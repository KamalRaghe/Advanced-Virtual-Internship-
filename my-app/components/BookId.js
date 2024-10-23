import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/router";

export default function BookId({url,name,move,subName}){
  const [book, setBook] = useState([])
  const router = useRouter()

    async function fetchBook(){
        const { data } = await axios.get(url)
        setBook(data)
        console.log(data)
      }

      useEffect(()=>{
        fetchBook()
      },[])
      return(
        <div >
                <div className="BookScreen" style={{position:"relative",display:"flex",justifyContent:"space-between"}}>            
                    <div>
                        <div style={{width:"700px",display:"flex",justifyContent:"start",color:"navy",fontSize:"30px",margin:"10px",fontWeight:"bolder"}} >{book.title}</div>
                        <div style={{marginLeft:"10px"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"20px"}} >{book.subTitle}</div>
                    </div>
                    <div style={{border:"1px solid black"}} >
                        <img style={{border:"1px solid black",scale:"0.29",width:"200px",height:"300px"}} src={book.imageLink}></img>
                    </div>
                      
        
                </div>
        </div>
      )
}