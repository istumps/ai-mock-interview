'use client'
import React, { useEffect, useState,useRef } from 'react'

import { db } from '@/utils/db.js';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm'

import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function StartInterview({params}) {

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);


    useEffect(()=>{
        GetInterviewDetails();
        
    }
    ,[activeQuestionIndex])


    const GetInterviewDetails= async ()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))
       
        const jsonMockResp=JSON.parse(result[0].jsonMockResp);
   //     console.log(result[0]);
       // console.log(jsonMockResp.questions);  
        setMockInterviewQuestion(jsonMockResp.questions);
        setInterviewData(result[0]);

       // console.log(result[0]);
       // console.log(interviewData);
  
       
    }

    const handleNextQuestion = async () => {
      
      if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
          setActiveQuestionIndex(activeQuestionIndex + 1);
      }
  };


  return (
    <div >
        {/*User input Section*/} 
        <RecordAnswerSection
        params={params}
        mockInterviewQuestion={mockInterviewQuestion} 
        interviewData={interviewData}
        />
        </div>
  )
}

export default StartInterview