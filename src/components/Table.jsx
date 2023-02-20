import React, { useEffect, useState } from 'react'
import Loader from './Loader'
const tablestyles={
table: {
border: '3px solid black',
borderCollapse:"collapse",
borderRadius:"10px",
marginLeft:"25%",
marginRight:"50%",
width:700,
marginTop:100
},
div:{
    textAlign:"center",
    border:"1px solid black",
    paddingLeft:"300px"
}
}

export default function Table({data}) {
const [loading,setLoading]=useState(true)
useEffect(()=>{
// setLoading(!loading)
playwithloader()
},[data])   

const playwithloader=()=>{
    setLoading(false)
    setTimeout(()=>{
setLoading(true)
    },1000)
}

return (
    
    <div styles={{textAlign:"center",marginLeft:"300px"}}>
    { loading?(<>
        <table style={{...tablestyles.table}}>
    <thead>
    <tr >
    <th style={{border:"1px solid black"}}>User ID</th>
    <th style={{border:"1px solid black"}}>FirstName </th>
    <th style={{border:"1px solid black"}}>LastName</th>
    <th style={{border:"1px solid black"}}>Avatar</th>
    <th style={{border:"1px solid black"}}>Email</th>

    </tr>
    </thead>
   
    <tbody>
    {data?.map((el)=>{
        return (
          
           <tr  key={el.id}>
           <td style={{border:"1px solid black"}}>{el.id}</td>
    <td style={{border:"1px solid black"}} >{el.first_name}</td>  
    <td style={{border:"1px solid black"}}>{el.last_name}</td>  
    <td style={{border:"1px solid black"}}>{el.avatar}</td> 
    <td style={{border:"1px solid black"}}>{el.email}</td> 
           </tr> 
        )
      })}

    </tbody>
    
    </table>
        
        </>):<>
        
        <Loader/>
        </> }
    
    
    </div>
  )
}

