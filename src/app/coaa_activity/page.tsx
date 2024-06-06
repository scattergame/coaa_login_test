import React from 'react'
import ActivityCard from "@/components/ActivityCard"

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <div className='w-full text-center'>
        <h1 className='text-2xl font-serif font-bold text-inherit'>Activity</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        <ActivityCard
          imageUrl="https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/activity%2Factivity1.jpg?alt=media&token=b6ddcba5-3af1-44fa-a237-a5644f48fa89"
          title='Mid-Autumn Festival'
          content='COAA Mid-Autumn Festival Gathering at Cabin John Park'
        />
        <ActivityCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/activity%2Factivity2.jpg?alt=media&token=465ea159-1203-4551-bfeb-c89ff61adda9'
          title='Mid-Autumn Festival'
          content='COAA-CC Mid-Autumn Retreat at Colorado State University'
        />
        <ActivityCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/activity%2Factivity3.jpg?alt=media&token=287def46-c89e-4802-ae0c-6c433d4d2928'
          title='Activity 3'
          content='Placeholder content'
        />
        <ActivityCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/activity%2Factivity4.jpg?alt=media&token=6464ba17-5b65-4dd8-b403-ac7b7c6dadc7'
          title='Activity 4'
          content='Placeholder content'
        />
        <ActivityCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/activity%2Factivity5.jpg?alt=media&token=a908d3f4-aae8-4602-b7fa-72bcb1bcd4e0'
          title='Activity 5'
          content='Placeholder content'
        />
      </div>
    </div>
  )
}
