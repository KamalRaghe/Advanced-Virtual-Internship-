import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import Books from "@/components/Books"
import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [books, setBooks] = useState([])
      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
                <Books url= {"https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"} name={'Recommended For You'} move={'280px'}/>
                <Books url= {"https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"} name={'Suggested Books'} move={'480px'}/>
              </div>
        </div>
      )
}