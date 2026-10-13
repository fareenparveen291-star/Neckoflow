"use client";
import { useState } from "react";
export default function Page(){
const [prompt,setPrompt]=useState("");
const [loading,setLoading]=useState(false);
const [done,setDone]=useState(false);
const gen=()=>{ if(!prompt) return alert("Prompt likho!"); setLoading(true); setTimeout(()=>{setLoading(false); setDone(true)},2500); };
return(
<div style={{minHeight:"100vh",background:"#070708",color:"#fff",fontFamily:"system-ui",padding:20}}>
<div style={{maxWidth:800,margin:"0 auto"}}>
<h1 style={{fontWeight:900,letterSpacing:2}}>NECK<span style={{color:"#a855f7"}}>O</span>Z</h1>
<div style={{textAlign:"center",marginTop:50}}>
<h2 style={{fontSize:42,fontWeight:900}}>Text se AI Video banao</h2>
<div style={{background:"#111",border:"1px solid #222",borderRadius:20,padding:14,display:"flex",gap:10,maxWidth:600,margin:"30px auto"}}>
<input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Jaise: Delhi girl dancing..." style={{flex:1,background:"#000",border:"1px solid #222",borderRadius:10,padding:12,color:"#fff"}}/>
<button onClick={gen} style={{background:"#fff",color:"#000",borderRadius:10,padding:"12px 18px",fontWeight:800,border:"none"}}>{loading?"Bana raha...":"Generate"}</button>
</div>
{done && <div style={{background:"#111",borderRadius:16,padding:16,border:"1px solid #333"}}>Video Ready: "{prompt}" 🎬<br/><br/><button style={{background:"#a855f7",color:"#fff",padding:"8px 16px",borderRadius:99,border:"none"}}>Download</button></div>}
</div>
</div>
</div>
)}
