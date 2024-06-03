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
          title='Service 1'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <ServiceCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/desert.jpg?alt=media&token=290df981-3253-42fb-b0f6-0df2d1950b14'
          title='Service 2'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <ServiceCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/cloud.jpg?alt=media&token=a1b43790-5f5a-405e-a9c9-3dbba16010f4'
          title='Service 3'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
      </div>
    </div>
  )
}
