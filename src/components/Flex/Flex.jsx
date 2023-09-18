/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'

import './Flex.css'
function Flex({iconLabel}) {
  return (
    <div className='flex'>
        <div>
             <AiFillCheckCircle className='check_icon' />   
        </div>

        <p>{iconLabel}</p>
    </div>
  )
}

export default Flex