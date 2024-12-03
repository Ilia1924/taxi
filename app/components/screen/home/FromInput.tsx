'use client'
import React from 'react';
import InputPlaces from '../../ui/InputPlaces';
import { Coords } from 'google-map-react';
import { useActions } from '@/app/hooks/useActions';

function FromInput() {

    const { setFrom, setTo } = useActions();

    const cbSuccess = (selectedAddress: string, location: Coords) => {
        setFrom({ location, description: selectedAddress });
        setTo('');
    }

    return (
        <InputPlaces cbSuccess={cbSuccess} type='from' />
    )
}

export default FromInput