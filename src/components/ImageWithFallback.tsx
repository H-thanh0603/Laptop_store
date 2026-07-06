
import { useState } from 'react';
export function ImageWithFallback({src,alt,className}:{src:string;alt:string;className?:string}){const [err,setErr]=useState(false);return <img src={err?'https://placehold.co/900x650/eef4ff/0b5fff?text=Laptop+Store':src} alt={alt} onError={()=>setErr(true)} className={className}/>}
