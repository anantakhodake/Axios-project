import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
function App() {
const[myData,setMyData] = useState([]);
const[isError,setIsError]= useState("")
  // using Promises
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((resp)=>
    setMyData(resp.data)
    )
    .catch((error)=>
    setIsError(error.message)
    );
  },[]);
  return (
    <>
    <center><h2 style={{fontSize:"45px"}}>Axios Tutorial</h2></center> 
    {isError!== ""&& <h2>{isError}</h2>}
    <div className='grid'>
    {myData.map((post)=>{
      const {id,title,body} = post;
      return <div className='card' key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    })}
    </div>
    </>
  );
}
export default App;
