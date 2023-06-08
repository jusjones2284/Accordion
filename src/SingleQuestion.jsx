import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)

  return (

   <article className='question'>
       <header>
           <h5>{title}</h5>
           <p>{info}</p>
       </header>
   </article>
  )
}

export default SingleQuestion