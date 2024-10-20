
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Book from "@/components/selected"
import Books from "@/components/Books"
import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [books, setBooks] = useState([])
      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
                <div class="nav__img--mask" style={{position:"relative",left:"200px"}}>
                    <img class="nav__img" style={{scale:"0.9"}} src="logo.png" alt="logo" />
                </div>
              </div>
        </div>
      )
}