import axios from "axios"
import SideBar from "@/components/sideBar"

export default function ForYou(){
    async function fetchBooks(){
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
        console.log(data)
      }
      return(
        <div style={{display:"flex"}}>
             <SideBar></SideBar>
        </div>
      )
}