'use client'
import React, { useEffect,useState } from 'react'
import Webcam from "react-webcam";
import { Lightbulb, Send, WebcamIcon } from 'lucide-react';

import useSpeechToText from 'react-hook-speech-to-text';
import Image from 'next/image'

import { Button } from '@/components/ui/button';
import { Mic, StopCircle } from 'lucide-react';
import {toast} from 'sonner'
import { chatSession } from '@/utils/GeminiAiModel';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm'
import { UserAnswer } from '@/utils/schema';
import {TextareaWithLabel} from '@/components/ui/TextareaWithLabel';
import QuestionsSection from './QuestionsSection';
import Link from 'next/link';
//import { TestResp } from '@/utils/TestResp';



function RecordAnswerSection({
  params,
  mockInterviewQuestion,
  interviewData,

  

}) {

    const {user}= useUser();
    const [loading, setLoading] = useState(false);  

    const [userAnswer, setUserAnswer] = useState(''); 
    const [answers, setAnswers] = useState([]);


    const [webCamEnabled, setwebCamEnabled] = useState(false);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(() => {
        if (results.length > 0) {
          const newAnswer = results.map(result => result.transcript).join(' ');
          setUserAnswer((prevAns) => prevAns + ' ' + newAnswer);
        }
      }, [results]);

      useEffect(()=>{
      if(!isRecording && userAnswer?.length>10){
        UpdateUserAnswer();
        
      
      }
     
      },[isRecording])

      const handleTextChange = (event) => {

        setUserAnswer(event.target.value);
        //console.log("User Answer", userAnswer);
    };

    



    const StartStopRecording= async()=>{
      if(isRecording){
      
        stopSpeechToText();
      }

      else{
        startSpeechToText()
      }
    }

 
    const UpdateUserAnswer= async ()=>{
      console.log("This is Interview data",interviewData?.mockId); 
      console.log("This is the user answer", userAnswer);
      setLoading(true);
      const feedbackPrompt =
        "Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
        "User Answer:"+userAnswer+", Depends on the question and user answer for the given interview question"+
        "please give us a rating (1-5) for the answer and feedback as area of imoprovement if any"+
        "in just 3 to lines to improve it in JSON format with rating field and feedback field"

        const result = await chatSession.sendMessage(feedbackPrompt);
        console.log("Result", result);
        const mockJsonResp=(result.response.text().replace('```json', '').replace('```', ''))
        console.log(mockJsonResp);
        const JsonFeedbackResp=JSON.parse(mockJsonResp);

        
        
        console.log("User Email",user.primaryEmailAddress?.emailAddress);
        const resp=await db.insert(UserAnswer).values({
            mockIdRef:interviewData?.mockId,
            question:mockInterviewQuestion[activeQuestionIndex]?.question,
            correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
            userAns:userAnswer,
            feedback:JsonFeedbackResp?.feedback,
            rating:JsonFeedbackResp?.rating,
            userEmail:user.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('MM-DD-YYYY')
        })
     
        if(resp){
          toast.success('User answer saved successfully')
          setUserAnswer('');
          setResults([]);
        }
        setResults([]);
        
        setLoading(false);

       
    }
  


   
  
  const handleSubmit = async (e) => {
    //e.preventDefault();
    const savedAnswer = answers[activeQuestionIndex] || '';

    if (userAnswer !== savedAnswer) {
      if (userAnswer?.length > 10) {
        await UpdateUserAnswer();
        saveUserAnswerLocally();
      } else {
        toast('Please provide a valid answer');
      }
    }
  };


    const handleNextQuestion = async () => {
      
      if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
          await handleSubmit();
          setActiveQuestionIndex(activeQuestionIndex + 1);
          
      }
      else if(activeQuestionIndex==mockInterviewQuestion.length-1){
        await handleSubmit();
      }
  };

  const handlePreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      saveUserAnswerLocally();
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  useEffect(() => {
    loadUserAnswer();
  }, [activeQuestionIndex]);

  const saveUserAnswerLocally = () => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[activeQuestionIndex] = userAnswer;
      return updatedAnswers;
    });
  };

  const loadUserAnswer = () => {
    const savedAnswer = answers[activeQuestionIndex] || '';
    setUserAnswer(savedAnswer);
  };

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
           {/*Question Section*/} 
        <QuestionsSection 
        mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestionIndex}
        />
        </div>
    <div>
    <div className='flex flex-col mt-20 justify-center items-center bg-secondary rounded-lg p-5 w-full '>

    <div className='relative mb-5'>
       <div>
            {webCamEnabled? <Webcam
            onUserMedia={() => setwebCamEnabled(true)}
            onUserMediaError={() => setwebCamEnabled(false)}
            mirrored={true}
                style={{
                height: 400,
                width: 400,
                }}
            />:<><WebcamIcon size={256} className='h-full w-full my-7 p-2 '/></>
            }
            <Button 
                  variant='ghost'  
                  className='w-full' 
                  onClick={() => setwebCamEnabled(prevState => !prevState)}
                >
                  <div className='hover:bg-slate-300 rounded-lg cursor-pointer'>
                  {webCamEnabled ? 'Click to Disable Web Cam' : 'Click to Enable Web Cam '}
                  </div>
            </Button>
            </div>
    </div>

    <form className='mt-4 w-full'>
     <h2 className=''>Answer</h2>
    <textarea
    className="w-full p-2 border rounded"
    value={userAnswer}
    onChange={handleTextChange}
    rows={3}
    placeholder="Type your answer here"
    disabled={isRecording}
  />
  
    </form>
 
        <Button disabled={loading} variant='outline' className='my-10' onClick={StartStopRecording} >
        {isRecording?
        <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle/> Stop Recording
            </h2>   
        :<h2 className='text-primary flex gap-2 items-center'><Mic/> Record Answer</h2>}
        
        </Button>

 
      </div>
      
      <div className='flex justify-end gap-6  '>
       { activeQuestionIndex > 0 && <Button onClick={handlePreviousQuestion} >Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1 && <Button onClick={handleNextQuestion}>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1 && 
              <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
              <Button onClick={handleNextQuestion}>End Interview</Button>
              </Link>}
         </div>
</div>

</div>

       
      
     
 
  )
}

export default RecordAnswerSection