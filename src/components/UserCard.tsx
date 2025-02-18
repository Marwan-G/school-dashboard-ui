import React from 'react'
import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
     <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/24</span>
        <Image src="/more.png" alt="" width={20} height={20}/>
     </div>
     <h1 className='text-2xl font-semibold my-4'>1,234</h1>
     <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
    </div>
  )
}

export default UserCard

//       {type === 'admin' && <p>This is a admin card</p>}
//       {type === 'student' && <p>This is a student card</p>}
//       {type === 'teacher' && <p>This is a teacher card</p>}
//       {type === 'parent' && <p>This is a parent card</p>}
//       {type === 'staff' && <p>This is a staff card</p>}
