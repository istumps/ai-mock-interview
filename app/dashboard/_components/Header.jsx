'use client'
import React from 'react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import Link from 'next/link'




function Header() {

    const { user } = useUser();

    const path = usePathname(); 

    return (
      <div className='flex p-4 items-center text-lg justify-between bg-secondary shadow-sm'>
          <Image src={'/logo.png'} width={65} height={200} alt='logo'/>
          <ul className='hidden md:flex gap-6'>
              <li>
                  <Link href="/dashboard" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}>
                      Dashboard
                  </Link>
              </li>
             
              <li>
                  <Link href="/dashboard/upgrade" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}>
                      Upgrade
                  </Link>
              </li>
              <li>
                  <Link href="/dashboard/how" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-primary font-bold'}`}>
                      How it Works
                  </Link>
              </li>
          </ul>


          {user ? (
            <div className=' flex mr-10'><UserButton
                 
                /></div>
                
            ) : (
                <Link href='/sign-in' className='mr-10'>
                    Sign in
                </Link>
            )}
      </div>
  )
}

export default Header;