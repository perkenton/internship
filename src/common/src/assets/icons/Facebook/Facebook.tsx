import React from 'react';

export default function Facebook(props: {
  width?: string,
  height?: string,
  color?: string,
}) {
  return (
    <svg width={ props.width || '32' } height={ props.height || '32' } viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fill={ 'currentColor' || props.color || 'white' } d='M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z' />
    </svg>
  )
}