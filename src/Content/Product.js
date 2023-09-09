import React, { useState } from 'react'
import { Chart as chartjs,Bar } from 'react-chartjs-2'
const Product = () => {
  const [data,setdata] =useState("")
  const [final,setfinal] = useState([])
  const submit = (e)=>
  {
    e.preventDefault();
       setfinal((old)=>
    {
      if (data.length > 0) {
        return [...old, data]
    }
    if (data.length === 0) {
        return [...old]
    }
    })
    setdata("")
  }
  const deleted = (id)=>
  {
    console.log("delete" + id)
    setfinal((old)=>
    {
      return old.filter((arrlele,index)=>
      {
          return index!==id
      })
    })
  }
  
  return (
    <><div className="addProduct">
    <div className='totalProduct'  style={{display:"flex",justifyContent:"space-around"} }>
    <div className='user' style={{width:"50%",height:"7vh"}}>
    Total No. Of Users: {final.length}
    </div>
    <div className='revenue'>
      Total Revnue: ${final.length *250}
    </div>  
    </div>
      <input type="text" value={data} onChange={(e)=>
      {
        setdata(e.target.value)
      }}/> 
      <button type="submit" style={{marginLeft:"20px"}} onClick={submit}>submit</button>
     <br/>
      {final && final.map((e,index)=>
      {
        const id = index;
        return(
          <>
            {e} <button type="submit" onClick={()=>
            {
              deleted(id)
            }}>DElete</button>

            <br/>
            
          </>
        )
      })}
     
    </div></>
  )
}

export default Product