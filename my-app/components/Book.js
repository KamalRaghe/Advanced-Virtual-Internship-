import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function Book(){
  const [books, setBooks] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        setBooks(data)
      }

      useEffect(()=>{
        fetchBooks()
      },[])
      return(
        <div >
                <div style={{width:"80%",position:"relative",left:"18vw",display:"flex",justifyContent:"start",margin:"20px",marginBottom:"150px"}}>            
                    <div style={{width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >Selected just for you</div>
                    <div style={{position:"relative",bottom:"50px"}}>
                        {books.map(book =>{
                        return <div className="center" style={{backgroundColor:"beige"}} >
                            <div key={book.id} className="center" style={{scale:"0.22",width:"400px",height:"200px"}} >
                              <img src={book.imageLink} style={{position:"relative"}} ></img>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"navy",fontSize:"60px",fontWeight:"bolder",padding:"10px"}}>{book.title}</div>
                              <div className="center" style={{justifyContent:"start",width:"600px",color:"grey",fontSize:"50px",padding:" 0px"}}>{book.author}</div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
        </div>
      )
}