
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
             <div className="center" style={{zIndex:"100",alignItems:"end",height:"95vh",width:"100vw",backgroundColor:"#032b41",borderBottomRightRadius:"30%",borderBottomLeftRadius:"30%"}}>
                <div className="center" style={{zIndex:"2",height:"300px",width:"350px",backgroundColor:"white",borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}} >
                    <div style={{scale:"0.4",zIndex:"1"}} ><img src="pricing-top.png" alt="logo" /></div>
                </div>
            </div>
        </div>
      )
}