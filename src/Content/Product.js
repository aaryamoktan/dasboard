import React, { useState } from 'react'

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
    if (data.length == 0) {
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
  console.log(final.length)
  return (
    <><div className="addProduct">
      <input type="text" value={data} onChange={(e)=>
      {
        setdata(e.target.value)
      }}/>

      <button type="submit" onClick={submit}>submit</button>
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
      {final.length}
      <br></br>
      ${final.length *250}
    </div></>
  )
}

export default Product