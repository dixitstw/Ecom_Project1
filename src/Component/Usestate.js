import React, { useEffect, useState } from 'react'
/*
        Usestate =>It is a hook to manage state

        rerenders the page when the value changes syntax:

        let/const [name, function] =useState(initial value)
        name: variable name
        funciton = function to update variable
        initial value = starting value 
        0-9: number
        "": srting
        {}:object
        []:array
*/
const Usestate = () => {
    let [count, setCount] = useState(0)
    let [value, setValue] = useState(10)


     //useEffect(function, state)
      useEffect(()=>{
     alert("value changed")
     }, [value, count])


    const additem = ()=> {
      setCount(count + 1)
    }

    const removeitem = ()=> {
      setCount(count - 1)
    }

    const add = () => {
      setValue(value + 10)
    }

    const remove = () => {
      setValue(value - 10)
    }
   
  return (
    <>
    <div>
    Count: {count}
    </div>
    {
      (count < 10) &&     <button onClick={additem}>add</button>

    }
    {
      (count > 0) &&     <button onClick={removeitem}>remove</button>

    }

<div>
    Count: {value}
</div>

    {
      (value < 100) &&     <button onClick={add}>add</button>

    }
    {
      (value > 0) &&     <button onClick={remove}>remove</button>

    }
    </>
  )
}

export default Usestate