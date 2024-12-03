'use client'
import { useActions } from '@/app/hooks/useActions';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import React from 'react';
import cn from 'classnames'
import { optionList } from './data';
import Image from 'next/image';

function Options() {
    const { selectedOption, travelTime } = useTypedSelector(state => state.taxi)
    const { setSelectedOption } = useActions();

    return (
        <div className='flex overflow-x-scroll hide-scroll-bar my-5'>
            <div className='flex flex-nowrap'>
                {optionList.map(option => (
                    <button key={option.id}
                        className='inline-block rounded-xl py-2 px-4 w-24 outline-none mr-3 bg-white overflow-hidden'
                        onClick={() => {
                            travelTime && setSelectedOption(option.id); 
                        }}
                    >
                        <div className={cn('opacity-30 text-left transition-opacity duration-300 ease-in-out', {
                            'opacity-95': option.id === selectedOption
                        })}>
                            <Image src={option.img} alt={option.title} width={60} height={50} />
                        </div>
                        <span className='text-sm -mt-1'>{option.title}</span>
                        <p className='text-md '>- PP</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Options