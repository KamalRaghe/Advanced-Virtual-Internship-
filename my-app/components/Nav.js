import { GoSearch } from "react-icons/go";

export default function NavBar(){
    return (
        <div style={{width:"100vw",height:"12vh",borderBottom:"1px solid lightgrey",paddingRight:"100px",display:"flex",justifyContent:"end",alignItems:"center"}} >
            border:"1px solid grey"
            <input placeholder="Search for books" style={{backgroundColor:"#f1f6f4",paddingLeft:"25px",width:"280px",height:"40px"}} ></input>
            <button style={{backgroundColor:"#f1f6f4",height:"40px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"}} ><GoSearch></GoSearch></button>
        </div>
    )
}