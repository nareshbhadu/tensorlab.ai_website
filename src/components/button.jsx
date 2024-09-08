import React from "react"

export function BUTTON({label,onClick, bgcolour ,textcolour,hovrcolour}){
return  <button className={`h-10 max-w-fit p-5 rounded ${bgcolour} ${textcolour} ${hovrcolour} items-center flex justify-center`} onClick={onClick}>{label}</button>
    
}

export default BUTTON