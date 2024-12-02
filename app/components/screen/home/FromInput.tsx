'use client'
import React from 'react'
import InputPlaces from '../../ui/InputPlaces';
import { Coords } from 'google-map-react';

function FromInput() {

    const cbSuccess = (selectedAddress: string, location: Coords) => {
        console.log('success');
    }

    return (
        <InputPlaces cbSuccess={cbSuccess} type='from' />
    )
}

export default FromInput