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
                    <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >Selected just for you</div>
                    <div style={{display:"flex",alignItems:"center",backgroundColor:"beige",width:"30%",height:"200px",padding:"20px",border:'10px solid black'}} >
                        <div style={{width:"220px",position:"relative",bottom:"20px"}} >{book.subTitle}</div>
                        <div key={book.id} style={{scale:"0.22",width:"200px",height:"300px",position:"relative",bottom:"20px"}} >
                            <img src={book.imageLink}></img>
                        </div>
                    </div>
                </div>
        </div>
      )
}