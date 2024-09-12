import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'

const font = Poppins({
    subsets:["latin"],
    weight:["400","700"]
})

export default function Logo() {
  return (
    <div className={`text-[.8rem] md:text-[1.2rem] logo flex items-center justify-between`}>
        <Link href="/"><span className=''>A</span>nuj <span className=''>B</span>hatt</Link>
    </div>
  )
}
