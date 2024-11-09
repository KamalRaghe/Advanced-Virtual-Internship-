import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";

export default function Player({url}){
    const [book, setBook] = useState([])
    const router = useRouter()
    const audioElem = useRef()

    async function fetchBook(){
        const { data } = await axios.get(url)
        setBook(data)
      }

      function Audio(){
        let audio = new Audio(book.audioLink)
        audio.play()
      }

      useEffect(()=>{
        fetchBook()
      },[])
      return(
        <div >
                <div className="BookScreen" style={{display:"flex",justifyContent:"space-between"}}>            
                    <div style={{padding:"10px"}} >
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{book.title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{book.subTitle}</div>
                        <audio src={book.audioLink} ref={audioElem} ></audio>
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