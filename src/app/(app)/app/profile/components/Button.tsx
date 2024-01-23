import Link from 'next/link'
import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const Button:React.FC = () => {
  return (
    <div className="mt-5 flex justify-end sticky left-0 ">
    <Link href={"/app/favorites"}>
    <div className="flex justify-center items-center rounded-2xl border-2 border-pink-500 w-[157px] h-[43px] ">
        <h2 className="font-normal">See More</h2>
          <MdNavigateNext size={32}/>
      </div>
    </Link>
  </div>
  )
}

export default Button
