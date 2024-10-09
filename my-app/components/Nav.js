import { GoSearch } from "react-icons/go";

export default function NavBar(){
    return (
        <div style={{width:"100vw",height:"12vh",borderBottom:"1px solid lightgrey",paddingRight:"100px",display:"flex",justifyContent:"end",alignItems:"center"}} >
            <input placeholder="Search for books" style={{backgroundColor:"lightgray",border:"none",borderRadius:"2px",widows:"400px",height:"40px"}} ></input>
        </div>
    )
}