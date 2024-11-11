import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import AudioPlayer from "./audio";

export default function Player({url}){
    const [book, setBook] = useState([])
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    async function fetchBook(){
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${url}`)
        setBook(data)
      }

      useEffect(()=>{
        fetchBook()
        let min = window.localStorage.getItem('minute')
        setMinute(min)
        let sec = window.localStorage.getItem('second')
        setSecond(sec)
      },[])
      return(
        <div >
                <div className="BookScreen" style={{display:"flex",justifyContent:"space-between"}}>            
                    <div style={{padding:"10px"}} >
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{book.title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{book.subTitle}</div>
                        {book.audioLink && <AudioPlayer audioUrl={book.audioLink} show={'none'} />}
                        {minute}:{second}
                        <div>
                            {book.summary}
                        </div>

                      
                    </div>
                    <div>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}