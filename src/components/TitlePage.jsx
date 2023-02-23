import React from 'react'
import { useParams } from "react-router-dom";



function TitlePage() {
    const {titre} = useParams();

  return (
    <div className='titre'>{titre}</div>
  )
}

export default TitlePage