import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function Books({url,name}){
  const [books, setBooks] = useState([])

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
                <div style={{width:"80%",position:"relative",left:"18vw",display:"flex",justifyContent:"start"}}>            
                    <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"end",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >{name}</div>
                    <div style={{display:"flex",position:"relative",right:"240px",bottom:"50px"}}>
                        {books.map(book =>{
                        return <div key={book.id} style={{scale:"0.28",width:"200px",height:"300px"}} >
                            <img src={book.imageLink}></img>
                          </div>
                        })}
                    </div>
                </div>
        </div>
      )
}