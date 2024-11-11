import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { Suspense, useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/router";
import AudioPlayer from "./audio";

export default function Books({url,name,move,subName}){
  const [books, setBooks] = useState([])
  const router = useRouter()
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  function Minute(min){
      setMinute(min)
  }

  function Second(sec){
      setSecond(sec)
  }

    async function fetchBooks(){
        const { data } = await axios.get(url)
        setBooks(data)
        console.log(data)
      }

      useEffect(()=>{
        fetchBooks()
       
      },[])
      return(
        <div >
                <div className="BookScreen" style={{position:"relative",display:"flex",justifyContent:"start",marginBottom:"150px"}}>            
                    <div style={{position:"relative",left:"30px"}}>
                      <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >{name}</div>
                      <br></br>
                      <div>{subName}</div>
                    </div>
                    <div style={{display:"flex",position:"relative",right:move,bottom:"0px"}}>
                        {books.map(book =>{
                        return <div key={book.id} onClick={()=>{router.push(`/book/${book.id}`)}} style={{scale:"0.29",width:"200px",height:"300px"}} >
                              <img src={book.imageLink}></img>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"navy",fontSize:"60px",fontWeight:"bolder",padding:"10px"}}>{book.title}</div>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"grey",fontSize:"50px",padding:" 0 10px"}}>{book.author}</div>
                              <div className="center" style={{justifyContent:"start",width:"600px",fontSize:"45px",padding:"10px"}}>{book.subTitle}</div>
                              <div className="center" style={{justifyContent:"start",width:"600px",fontSize:"50px",padding:" 5px 10px"}}>
                                  {minute &&<IoMdTime></IoMdTime>} {minute && minute}:{second && second}  {book.audioLink && <AudioPlayer audioUrl={book.audioLink} show={'none'} minute= {Minute} second= {Second} />}
                                  <CiStar  style={{marginLeft:"20px"}} /> {book.averageRating}
                                </div>
                             
                            </div>
                        })}
                    </div>
                </div>
        </div>
      )
}