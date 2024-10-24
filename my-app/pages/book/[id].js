import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Book from "@/components/selected"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import BookId from "@/components/BookId"

export default function ForYouPage(){
  
  const [book, setBook] = useState([])
  const [loaded, setLoaded] = useState([])
  const router = useRouter()
  const {id} = router.query
  
  async function fetchBooks(){
    const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    setBook(data)
    if(!data.id){
      router.push('/for-you')
    }
  }

  useEffect(()=>{
    fetchBooks()
  },[])

      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
              <BookId url={`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`} ></BookId>
              </div>
        </div>
      )
}