import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/router";
import { HiOutlineLightBulb, HiOutlineMicrophone  } from "react-icons/hi";

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
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{book.title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{book.subTitle}</div>
                        <div style={{display:"flex",marginTop:"50px"}} >
                            <div className="center" style={{width:"140px",justifyContent:"space-between"}}>
                                <CiStar style={{scale:"1.5"}} /> 
                                {book.averageRating} ({book.totalRating} ratings)
                            </div>
                            <IoMdTime style={{scale:"1.5",marginLeft:"60px"}}></IoMdTime>
                        </div>
                        <div style={{display:"flex",marginTop:"20px"}} >
                            <div className="center" style={{width:"115px",justifyContent:"space-between"}}>
                                <HiOutlineMicrophone  style={{scale:"1.5"}} /> 
                                {book.type}
                            </div>
                            <div className="center" style={{width:"105px",justifyContent:"space-between",marginLeft:"85px"}}>
                                <HiOutlineLightBulb style={{scale:"1.5"}} /> 
                                {book.keyIdeas} Key Ideas
                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",width:"300px",marginTop:"30px"}} >
                         <button style={{display:"flex",backgroundColor:"#032b41",color:'white',padding:"10px 45px",fontSize:"20px",borderRadius:"5px"}}> 
                            Read
                        </button>  
                         <button style={{display:"flex",backgroundColor:"#032b41",color:'white',padding:"10px 45px",fontSize:"20px",borderRadius:"5px"}}> 
                         <HiOutlineMicrophone/>  Listen
                        </button>  
                        </div>
                    </div>
                    
                    <div>
                        <img style={{width:"300px",height:"300px",margin:"10px"}} src={book.imageLink}></img>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}