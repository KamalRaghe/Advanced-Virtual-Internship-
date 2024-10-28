import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

export default function NavBar(){
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
  
      async function fetchBooks(){
          const { data } = await axios.get(` https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`)
          setBooks(data)
        }
  
        useEffect(()=>{
          fetchBooks()
        },[])
   
    return (
        <div style={{width:"100vw",height:"16vh",borderBottom:"1px solid lightgrey",paddingRight:"100px",display:"flex",justifyContent:"end",alignItems:"center"}} >
            <input placeholder="Search for books" value={search} onChange = {(e) => {setSearch(e.target.value);console.log(e.target.value)}}
            style={{backgroundColor:"#f1f6f4",border:"1px solid grey",paddingLeft:"20px",width:"280px",height:"40px"}} ></input>
            <button style={{backgroundColor:"#f1f6f4",border:"1px solid grey",height:"40px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"}} >
                <div style={{scale:"1.8",position:"relative",top:"2px"}} ><GoSearch></GoSearch></div>
            </button>
        </div>
    )
}
