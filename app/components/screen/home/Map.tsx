'use client';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';


function Map() {
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (!apiLoaded) {
            setApiLoaded(true);
        }
    }, [apiLoaded]);

    if (!apiLoaded) {
        return <div>Loading map...</div>;
    }

    const containerStyle = {
        width: "100%",
        height: "100vh",
    };

    const center = {
        lat: 41.1579,
        lng: -8.6291,
    };

    return (
        <div className="h-screen w-full">
            <LoadScript googleMapsApiKey={String(process.env.NEXT_PUBLIC_MAP_KEY)}>
                <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={12}>

                </GoogleMap>
            </LoadScript>

        </div>
    );
}

export default Map;
