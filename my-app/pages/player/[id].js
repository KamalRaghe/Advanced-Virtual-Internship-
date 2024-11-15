import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Book from "@/components/selected"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Player from "@/components/player"
import AudioPlayer from "@/components/audio"

export default function ForYouPage(){
  const [book,setBook] = useState()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [audioLink, setAudioLink] = useState()
  const [image, setImage] = useState()
  const router = useRouter()
  const {id} = router.query

  async function fetchBook(){
    const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    setBook(data)
    console.log(audioLink)
  }

  useEffect(()=>{
    fetchBook()
      setTitle(window.localStorage.getItem('title'))
      setAuthor(window.localStorage.getItem('author'))
      setAudioLink(window.localStorage.getItem('audioLink'))
      setImage(window.localStorage.getItem('imageLink'))
  },[])

 

      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <AudioPlayer audioUrl={audioLink} title = {title} img = {image} author={author}/>
             <div>
                <NavBar></NavBar>
                <Player url={id}/>
              </div>
        </div>
      )
}