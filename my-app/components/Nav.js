import { GoSearch } from "react-icons/go";

export default function NavBar(){
    return (
        <div style={{width:"100vw",height:"12vh",borderBottom:"1px solid lightgrey",paddingRight:"100px",display:"flex",justifyContent:"end",alignItems:"center"}} >
            <input placeholder="Search for books" style={{backgroundColor:"#f1f6f4",border:" 1px solid #f1f6f4",borderRadius:"5px",paddingLeft:"25px",width:"280px",height:"40px"}} ></input>
        </div>
    )
}