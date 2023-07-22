import React from 'react'

const Display = ({name, address}) => {
    //destructure
    //let{name, address} = props

  return (
    <>
    <div>Name: {name} </div>
    <div>Address: {address}</div>
    </>
  )
}

export default Display