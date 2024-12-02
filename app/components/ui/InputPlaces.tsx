"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import cn from 'classnames'
import { Coords } from 'google-map-react'

interface IInputPlaces {
    cbSuccess: (selectedAddress: string, location: Coords) => void
    type: 'from' | 'to'
}

const InputPlaces: FC<IInputPlaces> = ({ cbSuccess, type }) => {
    const [address, setAddress] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const setFocus = () => inputRef?.current?.focus();

    const isFrom = type === 'from';

    useEffect(() => {
        if (isFrom) {
            setFocus();
        }
    }, [isFrom])

    const handleSelect = (selectedAddress: string) => {
        geocodeByAddress(selectedAddress).then(res => {
            getLatLng(res[0]).then(location => {
                cbSuccess(selectedAddress, location);
                setAddress(selectedAddress);
            })
        }).catch(error => console.log('Error:', error));
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            onError={err => console.log('Error', err)}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className={cn('shadow-lg', { 'mb-5': isFrom })}>
                    <div className='py-2 px-3 bg-white rounded-lg flex items-center'
                        style={suggestions.length ? {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        } : {}}
                        onClick={setFocus}>
                        <FiSearch color={isFrom ? '#ffbc00' : "#615f5d"} className='m-2' size={30} />
                        <input {...getInputProps({
                            ref: inputRef,
                            placeholder: isFrom ? 'where from?' : 'where to?',
                            className: 'outline-none w-full text-gray-800'
                        })}
                        />
                        {!isFrom && (
                            <div className='absolute right-5 text-sm text-gray-800'> -min.</div>
                        )}
                    </div>
                    <div className={cn('absolute w-full h-0 overflow-y-auto rounded-b-lg z-10', { 'h-48': suggestions.length || loading })}>
                        {loading && <div className='p-2 bg-white'>Loading... </div>}
                        {
                            suggestions.map((suggestion, ind) => {
                                return <div {...getSuggestionItemProps(suggestion, {
                                    className: cn('cursor-pointer p-3 text-zinc-800', {
                                        'bg-gray-300': suggestion.active,
                                        'bg-white': !suggestion.active,
                                    })
                                })}
                                    key={`loc-${ind}`}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}

export default InputPlaces