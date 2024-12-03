'use client'
import React from 'react'
import InputPlaces from '../../ui/InputPlaces';
import { Coords } from 'google-map-react';
import { useActions } from '@/app/hooks/useActions';

function ToInput() {

    const { setTo } = useActions()

    const cbSuccess = (selectedAddress: string, location: Coords) => {
        setTo({ location, description: selectedAddress });

    }

    return (
        <InputPlaces cbSuccess={cbSuccess} type='to' />
    )
}

export default ToInput