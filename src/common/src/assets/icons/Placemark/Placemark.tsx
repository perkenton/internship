import React from 'react';
import { IconProps } from '../../../model/model';


export default function Placemark({ width, height, color }: IconProps) {

  return (
    <svg width={ width || "18"} height={ height || '20' } fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path stroke={ 'currentColor' || color || '#999' } d='M16.08 8.364C16.08 14.09 8.54 19 8.54 19S1 14.09 1 8.364c0-1.953.794-3.826 2.208-5.207A7.633 7.633 0 0 1 8.54 1c2 0 3.918.776 5.332 2.157a7.277 7.277 0 0 1 2.208 5.207z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
      <path stroke={ 'currentColor' || color || '#999' } d='M8.54 10.818c1.388 0 2.514-1.099 2.514-2.454 0-1.356-1.126-2.455-2.514-2.455S6.027 7.008 6.027 8.364c0 1.355 1.125 2.454 2.513 2.454z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  )
}