import React from "react";
import { BUTTON } from "./button";
import { IMG } from "./img";

export function Navbar(){

    return <div  className=" rounded-lg shadow-xl w-full flex justify-evenly p-5 bg-white end-0 ">
 {/*<BUTTON onClick={(e)=>{ }} label="Your Account"></BUTTON>*/}
 <div className="w-60 h-10"><IMG ></IMG></div>
 <div className="flex ml-96 ">
 <BUTTON label="Prompts" onClick={(e)=>{e}} className=" bg-white text-blue hover:bg-grey hover:text-blue bold" ></BUTTON>
 <BUTTON label="Resources" onClick={(e)=>{e}} bgcolour="bg-white" textcolour="text-blue" hovrcolour="hover:bg-grey hover:text-blue"></BUTTON>
 <BUTTON label="Blog" onClick={(e)=>{e}} bgcolour="bg-white" textcolour="text-blue" hovrcolour="hover:bg-grey hover:text-blue"></BUTTON>
 <BUTTON label="Your Account" onClick={(e)=>{e}} className="bg-slate-600" textcolour="text-white" hovrcolour="hover:bg-black"></BUTTON>
    </div>
    </div>
}

export default Navbar
