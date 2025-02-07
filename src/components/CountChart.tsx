'use client';

import React, { PureComponent } from 'react';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Boys',
    count: 55,
    fill: '#83a6ed', // lamaSky color
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#ffd700', // lamaYellow color
  },
];




const CountChart = () => {
  return (
    <div className='bg-gray-50 rounded-xl w-full h-full p-4 '>
        {/* titel */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
      {/* chart */}
      <div className='relative w-full h-[75%]'>
      <ResponsiveContainer >
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="30%" 
            outerRadius="80%" 
            barSize={15} 
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
         
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={30} height={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      {/* button */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-lamaSky rounded-full'>
            <h1 className='font-bold mt-6'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-lamaYellow rounded-full'>
            <h1 className='font-bold mt-6'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
          </div>
        </div>
        </div>
      </div>
  )
}

export default CountChart
