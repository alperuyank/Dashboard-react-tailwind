import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const SearchIcon = () => {
    return (
        <Link href='/' className='flex items-center justify-center '>
            <div className='relative'>
                <Image src='/images/search.png' alt={''} width={24} height={24} />
            </div>
        </Link>
    )
}

export default SearchIcon