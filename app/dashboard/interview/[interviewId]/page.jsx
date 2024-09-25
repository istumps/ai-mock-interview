"use client"
import React, {useEffect,useState}  from 'react'
import { db } from '@/utils/db.js';

import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm'
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Interview({params}) {
    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setwebCamEnabled] = useState(false);
     
    useEffect(()=>{
        GetInterviewDetails();
    }
    ,[])

    /*
    Get Interview Details via mockid/interview id
    */

    const GetInterviewDetails= async ()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))
        //console.log(result);
        setInterviewData(result[0]);
        //console.log(interviewData?.jobPosition);

  
       
    }




  return (
    <div className='my-10 '>
        <h2 className='font-bold text-2xl'>Let's get started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col my-5 gap-5 '>
            
                <div className='flex flex-col gap-5'>
                <h2 className='text-lg'><strong>Job Role/Position: </strong>{interviewData?.jobPosition}</h2>
                <h2 className='text-lg'><strong>Job Description/Tech Stack: </strong>{interviewData?.jobDesc}</h2>
                <h2 className='text-lg'><strong>Years of Experience: </strong>{interviewData?.jobExperience}</h2>
                </div>

                <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                   <h2 className='flex gap-2 items-center'> <Lightbulb/><strong>Information</strong> </h2> 
                   <h2 className='mt-3 '>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                   

                </div>

            

            </div>

        

            
            </div>
            <div className='flex justify-end items-end'>
                <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
            <Button  className='mt-5'>Start Interview</Button>
            </Link>
            </div>
        </div>
    
  )
}

export default Interview
