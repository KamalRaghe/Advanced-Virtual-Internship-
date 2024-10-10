import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function ForYou(){
  const [books, setBooks] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
        setBooks(data)
        console.log(data)
      }

      useEffect(()=>{
        fetchBooks()
      },[])
      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
                <div style={{height:"100vh",width:"80vw",position:"relative",left:"18vw",display:"flex"}}>
                    {books.map(book =>{
                    return <div key={book.id} style={{border:"1px solid black",scale:"0.2",margin:"0px"}} >
                        <img src={book.imageLink}></img>
                      </div>
                  })}
                </div>
             </div>
        </div>
      )
}