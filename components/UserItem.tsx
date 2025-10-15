import React from 'react'

export const UserItem = () => {
  return (
    <div className='flex items-center justify-between gap-4 border rounded-[8px] p-2' >
        <div className='avatar rounded-full min-h-12 min-w-12  text-white font-[700] bg-emerald-500 flex items-center justify-center '>
            <p>BM</p>
        </div>
        <div className='grow'>
            <p className='text-[16px] font-bold'>Ben Mulbah</p>
            <p className='text-[12px] text-neutral-500'>example@gmail.com</p>
        </div>
    </div>
  )
}
