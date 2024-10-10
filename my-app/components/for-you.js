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
            <div style={{border:"1px solid black",}} >Recommended For You</div>
                <div style={{display:"flex",position:"relative",right:"120px"}}>
                    {books.map(book =>{
                        return <div key={book.id} style={{scale:"0.28",width:"200px",height:"300px",}} >
                            <img src={book.imageLink}></img>
                        </div>
                    })}
            </div>
        </div>
      )
}