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
        // position: "absolute",
        zindex: "0",
    };

    const center = {
        lat: 41.1579,
        lng: -8.6291,
    };

    return (
        <div className="h-1/2 w-full">
            {/* <LoadScript googleMapsApiKey={String(process.env.NEXT_PUBLIC_MAP_KEY)} libraries={['places']}> */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                    zoomControl: false,
                    keyboardShortcuts: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                }}
            />
            {/* </LoadScript> */}
        </div>
    );
}
// console.log(google.maps.MapOptions);

export default Map;
