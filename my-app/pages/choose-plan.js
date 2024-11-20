
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Book from "@/components/selected"
import Books from "@/components/Books"
import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [books, setBooks] = useState([])
  console.log('dvwvwre')
      return(
        <div>
             <div className="center"  style={{alignItems:"end",height:"90vh",width:"100vw",backgroundColor:"#032b41",borderBottomRightRadius:"40%",borderBottomLeftRadius:"40%"}}>
                <div style={{height:"300px",width:"300px",backgroundColor:"white",borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}} ></div>
            </div>
        </div>
      )
}