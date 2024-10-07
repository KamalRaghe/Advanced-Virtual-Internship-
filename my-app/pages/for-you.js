import axios from "axios"

export default function ForYou(){
    async function fetchBooks(){
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
        console.log(data)
      }
      return(
        <div style={{backgroundColor:"#f1f6f4"}}>
             <div class="nav__img--mask">
                <img class="nav__img" src="logo.png" alt="logo" />
            </div>
        </div>
      )
}