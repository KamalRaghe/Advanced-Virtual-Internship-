import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import AudioPlayer from "./audio";
import Time from "./time";

export default function Player(){
    const [loaded, setLoaded] = useState(false)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [subTitle, setSubTitle] = useState()
    const [audioLink, setAudioLink] = useState()
    const [summary, setSummary] = useState()
    const [image, setImage] = useState()

      useEffect(()=>{
        setTimeout(() => {
          setLoaded(true)
          setTitle(window.localStorage.getItem('title'))
          setAuthor(window.localStorage.getItem('author'))
          setSubTitle(window.localStorage.getItem('subtitle'))
          setAudioLink(window.localStorage.getItem('audioLink'))
          setSummary(window.localStorage.getItem('summary'))
          setImage(window.localStorage.getItem('imageLink'))
     }, 1000);
     
      },[])
      return(
        <div >
                <div className="BookScreen" style={{display:"flex",justifyContent:"space-between"}}>            
                    <div style={{padding:"10px"}} >
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{subTitle}</div>
                        <div>
                            {!summary ? summary : <div className="skeleton" style={{width:"800px",height:"700px"}} ></div>}
                        </div>
                        

                      
                    </div>
                    <div>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}