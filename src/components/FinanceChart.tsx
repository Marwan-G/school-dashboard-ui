"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Image from 'next/image'

const data = [
    {
      name: 'Jan',
      expense: 4000,
      income: 2400,
    },
    {
      name: 'Feb',
      expense: 3000,
      income: 1398,
    },
    {
      name: 'March',
      expense: 2000,
      income: 9800,
    },
    {
      name: 'Abril',
      expense: 2780,
      income: 3908,
    },
    {
        name: 'May',
        expense: 1780,
        income: 2908,
      },
      {
        name: 'Jun',
        expense: 4780,
        income: 2908,
      },
  ];

const FinanceChart = () => {
  return (
    <div className='bg-gray-50  rounded-lg p-4 h-full'>
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false} 
            tick={{fill:"#d1d5db"}}
            tickLine={false}
            tickMargin={10}
          />
         <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
        
         <Tooltip />
         <Legend align='center' verticalAlign='top'  wrapperStyle={{
              paddingBottom: 20,
              marginBottom: 10
            }}/>
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5}/>
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF"strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default FinanceChart
