import React from 'react'
import VideoCard from '@/components/VideoCard'

export default function page() {
  return (
      <div className='flex flex-col items-center justify-center py-20'>
        <div className='w-full text-center'>
            <h1 className='text-2xl font-serif font-bold text-inherit'>Spotlight Seminars</h1>
          </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
            <VideoCard
                videoUrl="https://www.youtube.com/embed/T9ippZIALt0"
                title="'Godzilla' Saharan dust"
                author='NASA'
                date="2020-07-09"
                  description="Aerosol data has been collected by the Copernicus Sentinel satellite on the unusually 
                large Saharan dust plume that has traversed the Atlantic Ocean, nicknamed
                'Godzilla.' -- Satellite sees 'Godzilla' dust plume sweep across the Atlantic Ocean"
              />
              <VideoCard
                videoUrl="https://www.youtube.com/embed/T9ippZIALt0"
                title="'Godzilla' Saharan dust"
                author='NASA'
                date="2020-07-09"
                  description="Aerosol data has been collected by the Copernicus Sentinel satellite on the unusually 
                large Saharan dust plume that has traversed the Atlantic Ocean, nicknamed
                'Godzilla.' -- Satellite sees 'Godzilla' dust plume sweep across the Atlantic Ocean"
              />
              <VideoCard
                videoUrl="https://www.youtube.com/embed/T9ippZIALt0"
                title="'Godzilla' Saharan dust"
                author='NASA'
                date="2020-07-09"
                  description="Aerosol data has been collected by the Copernicus Sentinel satellite on the unusually 
                large Saharan dust plume that has traversed the Atlantic Ocean, nicknamed
                'Godzilla.' -- Satellite sees 'Godzilla' dust plume sweep across the Atlantic Ocean"
            />
          </div>
          
      </div>
  )
}

