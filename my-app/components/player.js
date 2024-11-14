import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import AudioPlayer from "./audio";
import Time from "./time";

export default function Player({url}){
    const [book, setBook] = useState([])
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [subTitle, setSubTitle] = useState()
    const [audioLink, setAudioLink] = useState()
    const [summary, setSummary] = useState()

    async function fetchBook(){
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${url}`)
        setBook(data)
      }

      useEffect(()=>{
        fetchBook()
        setTimeout(() => {
          setTitle(window.localStorage.getItem('title'))
          setAuthor(window.localStorage.getItem('author'))
          setSubTitle(window.localStorage.getItem('subtitle'))
          setAudioLink(window.localStorage.getItem('audioLink'))
          setSummary(window.localStorage.getItem('summary'))
     }, 1000);
        let min = window.localStorage.getItem('minute')
        setMinute(min)
        let sec = window.localStorage.getItem('second')
        setSecond(sec)
      },[])
      return(
        <div >
                <div className="BookScreen" style={{display:"flex",justifyContent:"space-between"}}>            
                    <div style={{padding:"10px"}} >
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{subTitle}</div>
                        {audioLink && <AudioPlayer audioUrl={audioLink} show={'flex'} />}
                        {minute}:{second}
                        <div>
                            {summary}
                        </div>

                      
                    </div>
                    <div>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}