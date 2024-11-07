import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiBookmark, CiStar } from "react-icons/ci";
import { useRouter } from "next/router";
import { PiBookOpenText } from "react-icons/pi";
import { HiOutlineLightBulb, HiOutlineMicrophone  } from "react-icons/hi";

export default function Player({url,id}){
  const [book, setBook] = useState([])
  const [tags, setTags] = useState([])
  const router = useRouter()

    async function fetchBook(){
        const { data } = await axios.get(url)
        setBook(data)
        setTags(data.tags)
        console.log(data)
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