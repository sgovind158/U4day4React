import React ,{useState} from 'react'
import Child1 from './Child1'
import Child2  from './Child2'


/// render defination  it my parent information is change, child will also be updated
const Parent = () => {

const [info,setInfo] = useState("")
  return (
    <div>
      
      parent : {info}
      <Child1 info={info} setInfo={setInfo}/>
      <Child2 info={info}/>
    </div>
  )
}

export default Parent


////// Types of communication 
// parent to child 
///// child to parent 
// child 1 to child 2 
/// state uplifting 
/// types of error