'use client'
import React from 'react';
import Button from '../../ui/Button';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { optionList } from './data';

const OrderButton = () => {

  const { travelTime, selectedOption } = useTypedSelector(state => state.taxi);

  const orderHandler = () => {
    alert(`You order car${optionList.find(option => option.id === selectedOption)?.title
      }`);
  }

  return <Button
    title='Order'
    bgColor='#FFE847'
    color='#111'
    cb={orderHandler}
    isDisabled={!travelTime && !travelTime}
  />
}

export default OrderButton