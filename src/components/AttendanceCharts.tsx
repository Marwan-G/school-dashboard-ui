"use client";
import React from 'react'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    absent: 20,
    present: 70,
   
  },
  {
    name: 'Tus',
    absent: 30,
    present: 60,
   
  },
  {
    name: 'Wen C',
    absent: 30,
    present: 40,
  
  },
  {
    name: 'Thur',
    absent: 50,
    present: 50,
 
  },
  {
    name: 'Fri',
    absent: 90,
    present: 20,
    
  },
];

const AttendanceCharts = () => {
  return (
    
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      
      
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:'lightgray'}} />
          <Legend align='left' verticalAlign='top'  wrapperStyle={{
              paddingBottom: 20,
              marginBottom: 10
            }}/>
          <Bar dataKey="present" fill="#83a6ed" legendType="circle"  radius={[7,7,0,0]} />
          <Bar dataKey="absent" fill="#ffd700"  legendType="circle"  radius={[7,7,0,0]}  />

        </BarChart>
      </ResponsiveContainer>
     
    </div>
    
  )
}

export default AttendanceCharts
