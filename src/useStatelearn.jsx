import React, { useState } from 'react';
const data=[{name:"oman"},{name:"roman"}]
const UseStateLearn = () => {
const[count,setCount]=useState(0)
console.log(count)
console.log(setCount)
const handelClick=()=>
{
  return setCount(count+1)
}
return(
  <div>
    <p>Count: {data.map((ele)=> <h1>{ele.name}</h1>)}</p>
    <button onClick={handelClick}>Increment</button>
  </div>
)


}

export default UseStateLearn;
