'use client';

import { useActions } from '@/app/hooks/useActions';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import { optionList } from './data';

interface IMapStore {
    map: google.maps.Map,
    maps: any
}

function Map() {

    const [mapStore, setMapStore] = useState<IMapStore>({} as IMapStore);

    const [isExistRoute, setIsExistRoute] = useState(false);
    const { from, to } = useTypedSelector(state => state.taxi);
    const { setTravelTime, setSelectedOption } = useActions();


    const renderRoad = () => {
        const { map, maps } = mapStore;
        if (typeof maps.DirectionsRenderer === 'function') {

            const directionsRenderer: google.maps.DirectionsRenderer = new maps.DirectionsRenderer();
            const directionService: google.maps.DirectionsService = new maps.DirectionsService();

            directionService.route({
                origin: from.location,
                destination: to.location,
                travelMode: google.maps.TravelMode.DRIVING,
            }).then(res => {
                directionsRenderer.setDirections(res);

                const dutationSec = res.routes[0].legs[0].duration?.value;

                if (dutationSec) {
                    setTravelTime(Math.ceil(dutationSec / 60));
                    console.log(optionList[0].id);

                    setSelectedOption(optionList[0].id);
                }
            }).catch(err => alert(err));

            directionsRenderer.setOptions({
                markerOptions: {
                    clickable: false
                }
            })

            directionsRenderer.setMap(map)
        }
    }

    useEffect(() => {
        if (from.location?.lat &&
            to.location?.lat &&
            mapStore?.map &&
            mapStore?.maps &&
            !isExistRoute
        ) {
            renderRoad();
        }
    }, [from, to, mapStore?.map, mapStore?.maps, isExistRoute]);

    const defaultCenter = {
        lat: 41.1449,
        lng: -8.6241,
    };

    return (
        <div className="h-screen w-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: String(process.env.NEXT_PUBLIC_MAP_KEY) }}
                zoom={13}
                options={{
                    zoomControl: false,
                    keyboardShortcuts: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                }}
                defaultCenter={defaultCenter}
                center={
                    from?.location?.lat ? {
                        lat: from?.location.lat,
                        lng: from?.location.lng,
                    } : undefined
                }
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={setMapStore}
            />
        </div>
    );
}

export default Map;