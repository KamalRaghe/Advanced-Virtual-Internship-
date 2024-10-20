import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";
export default function Book(){
  const [book, setBook] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        setBook(data[0])
      }

      useEffect(()=>{
        fetchBooks()
      },[])
      return(
        <div >
                <div  className="BookScreen" style={{position:"relative",margin:"20px",marginBottom:"100px"}}>            
                    <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder",marginBottom:"20px"}} >Selected just for you</div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"beige",width:"35%",height:"180px",padding:"20px"}} >
                        <div style={{width:"400px",position:"relative",bottom:"30px"}} >{book.subTitle}</div>
                        <div className="center" style={{borderRight:"1px solid lightblue",height:"90%",width:"10px"}} ></div>
                        <div key={book.id} style={{scale:"0.24",width:"200px",height:"300px",position:"relative",bottom:"30px"}} >
                            <img src={book.imageLink}></img>
                        </div>
                        <div style={{height:"100%",width:"300px",position:"relative",left:"20px",top:"10px"}} >
                            <div className="center" style={{justifyContent:"start",fontWeight:"bolder"}}>{book.title}</div>
                            <div className="center" style={{justifyContent:"start",scale:"0.8",position:"relative",right:"17px"}}>{book.author}</div>
                            <div className="center" style={{position:"relative",backgroundColor:"black",color:"white",borderRadius:"50%",width:'40px',height:'40px'}}><FaPlay></FaPlay></div>
                        </div>
                    </div>
                </div>
        </div>
      )
}