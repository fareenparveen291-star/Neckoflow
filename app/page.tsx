"use client";
import { useState, useRef } from "react";
export default function Page(){
const [ok,setOk]=useState(false);
const [scan,setScan]=useState(false);
const v=useRef<HTMLVideoElement>(null);
const start=async()=>{
setScan(true);
try{
const s=await navigator.mediaDevices.getUserMedia({video:true});
if(v.current){v.current.srcObject=s; v.current.play();}
setTimeout(()=>{setOk(true); setScan(false); s.getTracks().forEach(x=>x.stop())},2000);
}catch{alert("Camera allow karo"); setScan(false);}
};
if(ok) return <div style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:24}}><h1 style={{fontSize:28,fontWeight:900}}>NECKO FLOW Unlocked ✨</h1><p style={{marginTop:10,color:"#888"}}>Welcome to your studio</p><button onClick={()=>setOk(false)} style={{marginTop:20,padding:"10px 18px",borderRadius:10,background:"#222",color:"#fff",border:"none"}}>Lock Again 🔒</button></div>;
return <div style={{minHeight:"100vh",background:"#000",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><h1 style={{fontSize:34,fontWeight:900}}>NECKO FLOW</h1><p style={{color:"#666",fontSize:12,marginBottom:24,letterSpacing:4}}>FACE LOCK</p><div style={{width:260,height:260,borderRadius:28,background:"#111",border:"2px solid #333",overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}><video ref={v} autoPlay muted playsInline style={{width:"100%",height:"100%",objectFit:"cover",transform:"scaleX(-1)",position:"absolute"}}/><span style={{fontSize:60,zIndex:1}}>🔒</span></div><button onClick={start} style={{marginTop:28,background:"#fff",color:"#000",padding:"14px 32px",borderRadius:99,fontWeight:800,border:"none"}}>{scan?"Scanning...":"Unlock with Face"}</button></div>;
}
