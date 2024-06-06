import Image from "next/image";
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <div className='w-full text-center'>
        <h1 className='text-2xl font-serif font-bold text-inherit'>Our Service</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        <ServiceCard
          imageUrl="https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/ocean.jpg?alt=media&token=9888ce57-1c9e-430a-ac83-dffdcfa840e0"
          title='Promote Research'
          content='To promote the studies of ocean- and atmosphere-related sciences 
          and technologies and to make the results of such studies available to the public.'
        />
        <ServiceCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/desert.jpg?alt=media&token=290df981-3253-42fb-b0f6-0df2d1950b14'
          title='Advance Disciplines'
          content='To advance the various oceanic and atmospheric disciplines through 
          professional interactions and improve the qualifications of its members for occupational opportunities.'        />
        <ServiceCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/cloud.jpg?alt=media&token=a1b43790-5f5a-405e-a9c9-3dbba16010f4'
          title='Foster Collaboration'
          content='To promote collaborations with other national and international 
          scientific and technical societies and facilitate professional and social contacts among its members.'        />
      </div>
    </div>
  )
}
