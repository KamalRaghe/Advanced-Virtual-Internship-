import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
import { IoMdTime } from "react-icons/io";
import { CiBookmark, CiStar } from "react-icons/ci";
import { useRouter } from "next/router";
import { PiBookOpenText } from "react-icons/pi";
import { HiOutlineLightBulb, HiOutlineMicrophone  } from "react-icons/hi";
import AudioPlayer from "./audio";

export default function BookId(){
  const [book, setBook] = useState([])
  const router = useRouter()
  const {id} = router.query
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [subtitle, setSubTitle] = useState()
  const [averageRating, setAverageRating] = useState()
  const [totalRating, setTotalRating] = useState()
  const [audioLink, setAudioLink] = useState()
  const [type, setType] = useState()
  const [keyIdeas, setKeyIdeas] = useState()
  const [summary, setSummary] = useState()
  const [authorDescription, setAuthorDescription] = useState()
  const [tag, setTag] = useState()
  const [tag1, setTag1] = useState()
  const [tag2, setTag2] = useState()

    async function fetchBook(){
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        setBook(data)
        setTag(data.tags)
        console.log(data.audioLink)
        window.localStorage.setItem('title', data.title)
        window.localStorage.setItem('author', data.author)
        window.localStorage.setItem('totalRating', data.subTitle)
        window.localStorage.setItem('audioLink', data.audioLink)
        window.localStorage.setItem('type', data.type)
        window.localStorage.setItem('keyIdeas', data.keyIdeas)
        window.localStorage.setItem('summary', data.summary )
        window.localStorage.setItem('authorDescription', data.authorDescription)
        window.localStorage.setItem('tag', data.tags[0])
        window.localStorage.setItem('tag1', data.tags[1])
        window.localStorage.setItem('tag2', data.tags[2])
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
                        <div style={{display:"flex",marginTop:"50px"}} >
                            <div className="center" style={{width:"140px",justifyContent:"space-between"}}>
                                <CiStar style={{scale:"1.5"}} /> 
                                {book.averageRating} ({book.totalRating} ratings)
                            </div>
                            <div className="center" style={{width:"80px",justifyContent:"space-between",marginLeft:"60px"}}>
                                <IoMdTime style={{scale:"1.7" }}></IoMdTime>{minute < 10 && 0}{minute}:{second}
                                <AudioPlayer audioUrl={book.audioLink} show={'none'} />
                            </div>
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
                            <HiOutlineMicrophone/>  <div style={{fontSize:"16px"}} onClick={()=>router.push(`/player/${id}`)} >Listen</div>
                        </button>  
                        </div>
                        <div className="side-bar__icon" style={{fontSize:"20px",color:"blue",padding:"20px 0px"}} ><CiBookmark></CiBookmark> <div style={{margin:"5px"}} ></div>Add title to My library</div>
                        <div style={{fontSize:"18px",fontWeight:"bold",paddingBottom:"20px"}}>What's it about?</div>
                        <div style={{display:"flex"}}>
                            {/* {tags && tags.map(tag =>{
                                return <div key={tag} style={{fontSize:"16px",margin:"10px 0px",marginRight:"10px",display:"flex",backgroundColor:"#f1f6f4",padding:'15px 20px'}}>{tag}</div>
                            })} */}
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