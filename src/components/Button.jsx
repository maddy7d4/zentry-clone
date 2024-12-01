/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer rounded-full overflow-hidden bg-voilet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>{title}</span>
        {rightIcon}
    </button>
  )
}

export default Button