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
                <div style={{display:"flex",justifyContent:"start",border:"1px solid black",height:"100vh",width:"80vw",position:"relative",left:"18vw"}}>
                    {books.map(book =>{
                    return <div style={{position:"relative",right:"-280px"}} key={book.id}>LoremkdhsvbKSDWVwebkvbaweiVBQEAEWVWREBERB</div>
                  })}
                </div>
             </div>
        </div>
      )
}