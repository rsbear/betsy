import React from 'react'
import { Button, Sans } from '@rsbear/betsy'

const Landing: React.FC<any> = () => {

  return (
    <div>
      <h1>Landing</h1>
      <Button text="YES" backgroundColor="purple" onClick={() =>{}}/>
      <Sans fontSize="16px" color="indianred">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, corporis possimus. Architecto quia facere quae, non itaque alias nisi? Quas labore laboriosam eligendi eius vero ipsam nulla culpa deleniti repudiandae.</Sans>
    </div>
  )
}

export default Landing