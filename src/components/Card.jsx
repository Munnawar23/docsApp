import React from 'react'
import { LuFiles } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data}) {
  return (
    <motion.div drag className='relative w-60 flex-shrink-0 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <LuFiles />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}.</p>
        <div className="footer absolute bottom-0 w-full h-15 left-0  ">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className='h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center '>
            {data.close ? <IoMdClose />: <MdDownload size=".7em" color='#fff'/>}
        
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full p-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h1 className='text-sm font-semibold '>{data.tag.tagTitle}</h1>
        </div>
        )}
        
        </div>
    </motion.div>
  )
}

export default Card