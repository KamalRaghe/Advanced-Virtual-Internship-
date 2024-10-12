import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import ForYou from "@/components/for-you"
import { useEffect, useState } from "react"
export default function ForYouPage(){
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
                <ForYou></ForYou>
                <ForYou></ForYou>
              </div>
        </div>
      )
}