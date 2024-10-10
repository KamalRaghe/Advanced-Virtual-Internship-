import { GoSearch } from "react-icons/go";

export default function NavBar(){
    return (
        <div style={{position:'fixed',width:"100vw",height:"16vh",borderBottom:"1px solid lightgrey",paddingRight:"100px",display:"flex",justifyContent:"end",alignItems:"center"}} >
            <input placeholder="Search for books" style={{backgroundColor:"#f1f6f4",border:"1px solid grey",paddingLeft:"20px",width:"280px",height:"40px"}} ></input>
            <button style={{backgroundColor:"#f1f6f4",border:"1px solid grey",height:"40px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"}} >
                <div style={{scale:"1.8",position:"relative",top:"2px"}} ><GoSearch></GoSearch></div>
            </button>
        </div>
    )
}