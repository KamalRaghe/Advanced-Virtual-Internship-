import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiBookmark, CiStar } from "react-icons/ci";
import { useRouter } from "next/router";
import { PiBookOpenText } from "react-icons/pi";
import { HiOutlineLightBulb, HiOutlineMicrophone  } from "react-icons/hi";

export default function BookId({url,name,move,subName}){
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
                         <button className='center' style={{backgroundColor:"#032b41",color:'white',padding:"15px 40px",fontSize:"22px",borderRadius:"5px"}}> 
                            < PiBookOpenText/>  <div style={{marginLeft:"5px",fontSize:"16px"}}>Read</div> 
                        </button>  
                         <button className='center' style={{backgroundColor:"#032b41",color:'white',padding:"15px 40px",fontSize:"22px",borderRadius:"5px"}}> 
                            <HiOutlineMicrophone/>  <div style={{fontSize:"16px"}}>Listen</div>
                        </button>  
                        </div>
                        <div className="side-bar__icon" style={{fontSize:"20px",color:"blue",padding:"20px 0px"}} ><CiBookmark></CiBookmark> <div style={{margin:"5px"}} ></div>Add title to My library</div>
                        <div style={{fontSize:"18px",fontWeight:"bold",paddingBottom:"20px"}}>What's it about?</div>
                        <div style={{display:"flex"}}>
                            {tags && tags.map(tag =>{
                                return <div key={tag} style={{fontSize:"16px",margin:"10px 0px",marginRight:"10px",display:"flex",backgroundColor:"#f1f6f4",padding:'15px 20px'}}>{tag}</div>
                            })}
                        </div>
                        <div>
                            {book.summary}
                        </div>
                        <div style={{fontSize:"18px",fontWeight:"bold",padding:"20px"}}>About the author</div>
                        <div>
                            {book.authorDescription}
                        </div>
                    </div>
                    <div>
                        <img style={{width:"300px",height:"300px",margin:"10px"}} src={book.imageLink}></img>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}