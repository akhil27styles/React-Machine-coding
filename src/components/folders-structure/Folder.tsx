import React, { useState } from 'react'

const Folder = ({data}:any) => {
    const [expand, setexpand] = useState(false);
  return (
    <div>
     <span onClick={()=>setexpand(!expand)} style={{cursor:'pointer'}}>
     {data.isFolder ? (expand ? '📂' : '📁') : '📄'} {data.name}
        </span>
      {data.isFolder && (
        <div style={{display:expand?'block':'none', paddingLeft:'5rem'}}  >
         {data.items?.map((item:any,index:number)=>(
            <Folder key={index} data={item}/>
         ))}
        </div>
      )}
    </div>
  )
}

export default Folder