import React from 'react'
import Card from './Card'

function Foreground() {


  const data = [
    {
      desc: "smooth like butter like criminal undercover",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green",},
    },
    {
      desc: "smooth like butter like criminal undercover",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green",},
    },
    {
      desc: "smooth like butter like criminal undercover",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Uplode", tagColor: "blue",},
    },
  ];
  return (  
    <div  className="fixed  top-0 p-5 left-0 z-[3] w-full h-full flex gap-10 flex-wrap ">
      {data.map((items, index)=>(
        <Card data={items} />
      ))}
    </div>
  )
}

export default Foreground