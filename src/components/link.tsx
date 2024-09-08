import React from "react"

interface linksprops{
    label:String
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
}
export function Links({label,onClick}:linksprops){
    return <div><button  onClick={onClick} className="hover:text-blue p-2">
{label}
    </button>
    </div>
}

export default Links;