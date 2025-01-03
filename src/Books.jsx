import React from 'react'

const Books = (props) => {
  console.log(props)
  
  
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
        <div style={{border:"2px solid black",textAlign:"center",margin:"2px",width:"500px",borderRadius:"10px"}}>
        <h1>{props.bt}</h1>
        <div><img src={props.bi} alt="" height={300}/></div>
        <h2>{props.ba}</h2>
              
    </div>
    </div>
  
  )
}

export default Books