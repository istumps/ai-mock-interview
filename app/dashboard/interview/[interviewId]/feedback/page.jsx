'use client'
import React, {useEffect, useState} from 'react'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq,desc  } from 'drizzle-orm'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({params}) {

    const router=useRouter();

    const [feedbackList , setFeedbackList] = useState([]);


    useEffect(()=>{
        GetFeedback();
    },[feedbackList])


    const GetFeedback = async () => {
      try {
          
          const result = await db
              .select()
              .from(UserAnswer)
              .where(eq(UserAnswer.mockIdRef, params.interviewId))
              .orderBy(desc(UserAnswer.id)) 
              .execute();
  
          
          const uniqueFeedbackMap = new Map();
  
       
          result.forEach(answer => {
              
              if (!uniqueFeedbackMap.has(answer.question)) {
                  uniqueFeedbackMap.set(answer.question, answer);
              }
          });
  
         
          const uniqueFeedbackList = Array.from(uniqueFeedbackMap.values());
  
         
          uniqueFeedbackList.sort((a, b) => a.id - b.id);
  
          setFeedbackList(uniqueFeedbackList);
  
          console.log(uniqueFeedbackList);
      } catch (error) {
          console.error("Error fetching feedback:", error);
      }
  };
  
  return (
    <div className='p-10'>
        

        {feedbackList?.length==0? <h2 className='font-bold text-2xl text-gray-500'>No interview feedback available</h2> :
      
       <>
        <h2 className='text-3xl font-bold text-primary'>Congratulations!</h2>
        <h2 className='font-bold text-xl'>Here is your interview feedback</h2>
        <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2>

        <h2 className='text-sm text-gray-500'>Find below interview questions wiht correct answer, your answer, and feedback for improvement</h2>

      {feedbackList&&feedbackList.map((item,index)=>(
        <Collapsible key={index} className='mt-7'>
        <CollapsibleTrigger className=' w-full flex justify-between p-2 bg-secondary rounded-lg my-2 text-left gap-7'>{item.question}<ChevronsUpDown className='h-5 w-5'/></CollapsibleTrigger>
        <CollapsibleContent>
        <div className='flex flex-col gap-2'>
             <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{item.rating}/5 </h2>
             <h2 className='p-2 rounded-lg border bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
             <h2 className='p-2 rounded-lg border bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
             <h2 className='p-2 rounded-lg border bg-blue-50 text-sm text-primary'><strong>Feedback: </strong>{item.feedback}</h2>

        </div>
      
        </CollapsibleContent>
      </Collapsible>
      ))}
      </> }

      <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>
         


    </div>
  )
}

export default Feedback