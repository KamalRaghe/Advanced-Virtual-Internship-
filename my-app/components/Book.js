import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function Book(){
  const [book, setBook] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        setBook(data[0])
        console.log(data[0].subTitle)
      }

      useEffect(()=>{
        fetchBooks()
      },[])
      return(
        <div >
                <div style={{width:"80%",position:"relative",left:"18vw",margin:"20px",marginBottom:"100px"}}>            
                    <div style={{zIndex:"100",width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >Selected just for you</div>
                    <div style={{backgroundColor:"beige"}} >
                        <div style={{width:"200px"}} >{book.subTitle}</div>
                    </div>
                </div>
        </div>
      )
}