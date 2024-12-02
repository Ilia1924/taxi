import React from 'react'
import Image from 'next/image'
import preloaderImage from '../../accets/images/gear.png'

const Loader = () => {
    return (
        <div className='w-screen h-screen'>
            <Image
                src={preloaderImage.src}
                alt='preloader'
                layout='fill'
                priority={true}
            />
        </div>
    )
}

export default Loader