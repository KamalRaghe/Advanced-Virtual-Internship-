import axios from "axios"
import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
export default function ForYou(){
    async function fetchBooks(){
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
        console.log(data)
      }
      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
             <div>
                <NavBar></NavBar>
             </div>
        </div>
      )
}