import { useEffect, useState } from 'react'
import Table from "./components/Table"
import axios, {isCancel, AxiosError} from 'axios';
import ErrorMessage from './components/ErrorMessage';
import "./styles.css"

function App() {
const [count, setCount] = useState(0)
const [data,setData]=useState([])
const [counter,setCounter]=useState(1)
const [error,setError]=useState(false)
console.log(counter)
useEffect(()=>{
  getdata()
  },[])
  
useEffect(()=>{
getdata()
},[counter])

function getdata(){
 
    if(counter>=1||counter<=2){
      axios.get(`https://reqres.in/api/users/?page=${counter}`).then((res)=>{
        setData(res.data.data)  
        console.log(res.data.data)}).catch((err)=>{
        setError(true)  
          console.log(err)
        }) 
     } 

}
return (
  <>
  <div style={{textAlign:"center"}}>
  <h1 >
  Data Fetcher by Anurag Upadhyay
  </h1>
  </div>
 
  
  {error?(<>
  <ErrorMessage/>
    </>):(<>
      <Table data={data} />
      </>)}

<button 
className='counterbtn1'
onClick={()=>{
 
  if(counter>=1||counter<=2){
    
    if(counter==1){
      setCounter(1)
    }
   else{
    setCounter(counter-1)  
  } 
  }
}}>Previous page</button>

<button className='counterbtn2' onClick={()=>{
 
  if(counter>=1||counter<=2){
    if(counter==2){
      setCounter(2)
    }else{
    setCounter(counter+1)
    }
    }
}
}>NextPage</button>


  </> 
  
  )
}

export default App
