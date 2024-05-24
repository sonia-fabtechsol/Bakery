import React from 'react'

export const Button = ({text, className}) => {
  return (
    <>
    <button className={`px-5 py-3 rounded-2 border-0 fw-bold fs-4 ${className}`}>{text}</button>
    </>
  )
}
