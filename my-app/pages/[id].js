import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Book from "@/components/selected"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
export default function ForYouPage(){
  
  const [books, setBooks] = useState([])
  const [loaded, setLoaded] = useState([])
  const router = useRouter()

  
  async function fetchBooks(){
    const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    setBook(data)
    console.log(data)
  }


      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
              </div>
        </div>
      )
}