import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"
export default function Book(){
  const [books, setBooks] = useState([])

    async function fetchBooks(){
        const { data } = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        setBooks(data)
        console.log(data)
      }

      useEffect(()=>{
        fetchBooks()
      },[])
      return(
        <div >
                <div style={{width:"80%",position:"relative",left:"18vw",margin:"20px",marginBottom:"100px"}}>            
                    <div style={{zIndex:"100",width:"700px",height:"25px",display:"flex",justifyContent:"start",color:"navy",fontSize:"20px",fontWeight:"bolder"}} >Selected just for you</div>
                    <div style={{position:"relative",bottom:"50px"}}>
                        {books.map(book =>{
                        return <div className="center" style={{backgroundColor:"beige",position:"relative",top:"70px",width:"30%"}} >
                            <div key={book.id} className="center" style={{justifyContent:"space-between",height:"200px",width:"100%",border:"1px solid black"}} >
                              <div >{book.subTitle}</div>
                              <div style={{scale:"0.22"}} >
                                    <img src={book.imageLink} style={{position:"relative"}} ></img>
                                    <div style={{border:"1px solid black"}} >vkyu</div>
                              </div>
                              
                            </div>
                        </div>
                        })}
                    </div>
                </div>
        </div>
      )
}