import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import React from 'react'

function Dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your AI mock Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
        </div>

        {/* Previous Interviwew List */}
      <InterviewList/>

    </div>
  )
}

export default Dashboard