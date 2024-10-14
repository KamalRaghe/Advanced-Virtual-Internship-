import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function Books({url,name,move}){
  const [books, setBooks] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get(url)
        setBooks(data)
        console.log(data)
      }

     
      return(
        <div >
                <div style={{width:"80%",position:"relative",left:"18vw",display:"flex",justifyContent:"start",margin:"20px"}}>            
                    <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >{name}</div>
                    <div style={{display:"flex",position:"relative",right:move,bottom:"50px"}}>
                        {books.map(book =>{
                        return <div key={book.id} style={{scale:"0.28",width:"200px",height:"300px"}} >
                              <img src={book.imageLink}></img>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"navy",fontSize:"60px",fontWeight:"bolder",padding:"10px"}}>{book.title}</div>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"grey",fontSize:"50px",padding:" 10px"}}>{book.author}</div>
                            </div>
                        })}
                    </div>
                </div>
        </div>
      )
}