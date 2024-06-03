import React from 'react'
import ResearchCard from '@/components/ResearchCard'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <div className='w-full text-center'>
        <h1 className='text-2xl font-serif font-bold text-inherit'>Research</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        <ResearchCard
          imageUrl="https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/research%2FSoulik_tmo_2018232_tn.jpg?alt=media&token=b765d06a-3b16-4966-8dbc-2c35868e192a"
          title='Typhoon Soulik'
          author='MODIS'
          date="2018-01-01"
          content='Two typhoons lined up in the Northwest Pacific Basin, tracking northwest toward Japan.'
        />
        <ResearchCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/research%2Fatlantic_amo_2018016_front.jpg?alt=media&token=1ea7537f-8e25-4eae-9443-d80ecd2fb535'
          title='Signs of Ships in the Clouds'
          author='MODIS'
          date="2018-01-01"
          content='Under the right environmental conditions, pollution from ships can make long, bright tracks amidst the clouds.'
        />
        <ResearchCard
          imageUrl='https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-f66b6.appspot.com/o/research%2Foregon_tmo_2018226_th.jpg?alt=media&token=a45147ac-42f6-4c68-9ebb-968df1c8ce52'
          title="Smoky Oregon"
          author='MODIS'
          date="2018-01-01"
          content='Several large wildfires are blanketing the state with smoke.'
        />
      </div>
    </div>
  )
}
