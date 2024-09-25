import { Button } from '@/components/ui/button';
import React from 'react';
import Link  from 'next/link';
function Page() {
  return (

        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-12 lg:max-w-5xl lg:px-8">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-bold text-4xl text-center ">Upgrade</h2>
        <p className="text-md text-center mt-2">Upgrade to our monthly plan and unlock exclusive benefits.</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10 lg:gap-12 items-center justify-center">

        <div className="max-w-sm mx-full rounded-3xl border border-indigo-600  p-6 sm:p-8  shadow-lg lg:p-12 ">
          <div className="text-center">
            
            <h2 className="text-lg font-medium text-gray-900">
              Free
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2">
              <strong className="text-4xl font-bold text-gray-900 sm:text-5xl">$0</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-6 py-4 text-base sm:text-lg  lg:text-xl mb-4">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Interviews</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Retakes</span>
            </li>
            <li className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        
        </svg>
              <span className="text-gray-700">Technical Questions</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>

              <span className="text-gray-700">Email support</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
              <span className="text-gray-700">Phone support</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
              <span className="text-gray-700">Community access</span>
            </li>
          </ul>

          <Button

          className=" p-4 rounded-lg w-full bg-indigo-600 text-white hover:bg-indigo-700" 
          >Get Started</Button>
        </div>

        <div className="max-w-sm mx-full rounded-3xl border border-indigo-600  p-6 sm:p-8  shadow-lg lg:p-12 ">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Upgrade
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2">
              <strong className="text-4xl font-bold text-gray-900 sm:text-5xl">$5.99</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-6 py-4 text-base sm:text-lg  lg:text-xl mb-4">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Interviews</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Retakes</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Technical Questions</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-700">Email support</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Phone support</span>
            </li>
            <li className="flex items-center gap-2">
            <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Community access</span>
            </li>
          </ul>

          <Link href="https://buy.stripe.com/test_5kA4jn7Y97gPggg7ss"> <Button

          className=" p-4 rounded-lg w-full bg-indigo-600 text-white hover:bg-indigo-700" 
          >Get Started</Button></Link>   
        </div>
        
      </div>
    </div>
  );
}

export default Page;
