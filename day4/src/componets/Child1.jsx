import React,{useState} from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  
   
    const onHandlechange = (e) =>{
        let newValue = e.target.value;
         props.setInfo(newValue)
    }

  return (
    <div>
        <input onChange={onHandlechange} />
      child1 : {props.info}
   </div>
  )
}

export default Child1
