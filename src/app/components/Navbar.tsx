"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import ProfileIcon from './ProfileIcon'
import SearchIcon from './SearchIcon'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-yellow-500  flex items-center justify-between p-4'>
        {/* Sol Taraf - Logo */}
        <div className="flex items-center space-x-4">
            <Link href="/dashboard">
                <div className="text-xl font-bold text-black cursor-pointer">Dashboard</div>
            </Link>
            <div className='mx-4 cursor-pointer hidden'>
                {!open ? (<Image src="/images/bars.png" alt="" width={24} height={24} onClick={() => setOpen(true)} />
                ) : (
                    <Image src="/images/x.png" alt="" width={24} height={24} onClick={() => setOpen(false)} />
                )}
            </div>
        </div>

        {/* Sağ Taraf - İkonlar ve Profil */}
        <div className="flex items-center space-x-6">
            {/* İkonlar */}
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
                <SearchIcon />
                <ProfileIcon />
            </div>
        </div>
    </div>
    )
}

export default Navbar