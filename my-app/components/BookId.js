import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/router";

export default function BookId({url,name,move,subName}){
  const [book, setbook] = useState([])
  const router = useRouter()

    async function fetchbook(){
        const { data } = await axios.get(url)
        setbook(data)
        console.log(data)
      }

      useEffect(()=>{
        fetchbook()
      },[])
      return(
        <div >
                <div className="bookcreen" style={{border:"1px solid black",position:"relative",display:"flex",justifyContent:"start"}}>            
                    <div>
                        <div style={{width:"700px",display:"flex",justifyContent:"start",color:"navy",fontSize:"30px",margin:"10px",fontWeight:"bolder"}} >{book.title}</div>
                        <div style={{marginLeft:"10px"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"20px"}} >{book.subTitle}</div>
                    </div>
                    <img style={{scale:"0.5"}} src={book.imageLink}></img>
                      
        
                </div>
        </div>
      )
}