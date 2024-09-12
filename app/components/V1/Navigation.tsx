"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
export default function () {
    const [hash,setHash] = useState("");
    const handleHash = (id:string)=>{
        setHash(id);
    }

    const linkStyle = "mr-[1.5rem] hover:text-link-hover transition-all duration-[.5s]"
    const activeLinkStyle = linkStyle + " text-link-active"


    useEffect(()=>{   
        handleHash(window.location.hash);
    },[])
    
    return (
        <nav className="hidden text-[.9rem] md:flex">
            <ul className="flex hover:bg-red">
                <li onClick={()=>handleHash("#about")} className={hash=="#about"?activeLinkStyle:linkStyle}><Link href="#about">About Me</Link></li>
                <li onClick={()=>handleHash("#projects")} className={hash=="#projects"?activeLinkStyle:linkStyle} ><Link href="#projects">Projects</Link></li>
                <li onClick={()=>handleHash("#learnings")} className={hash=="#learnings"?activeLinkStyle:linkStyle} ><Link href="#learnings">Learnings</Link></li>
                <li onClick={()=>handleHash("#contact")} className={hash=="#contact"?activeLinkStyle:linkStyle} ><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
  )
}
