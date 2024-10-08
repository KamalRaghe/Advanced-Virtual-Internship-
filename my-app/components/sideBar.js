import { FaHouse } from "react-icons/fa6";
import { CiBookmark, CiSettings, CiCircleQuestion } from "react-icons/ci";
import { FaPenClip } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { MdLogout } from "react-icons/md";


export default function SideBar(){
    return(
        <div style={{backgroundColor:"#f1f6f4",height:"100vh",padding:"10px",display:"flex",alignItems:"center",flexDirection:"column",position:"fixed"}}>
            <div class="nav__img--mask">
                <img class="nav__img" style={{scale:"0.9"}} src="logo.png" alt="logo" />
            </div>
           <div style={{scale:"1.3",position:"relative",top:"100px",display:"flex",justifyContent:"space-between",flexDirection:"column",height:"60vh"}} >
                <div className="side-bar__icon"><FaHouse></FaHouse> <div style={{margin:"5px"}} ></div> Home </div>
                <div className="side-bar__icon"><CiBookmark></CiBookmark> <div style={{margin:"5px"}} ></div>My library</div>
                <div className="side-bar__icon"><FaPenClip></FaPenClip> <div style={{margin:"5px"}} ></div>Highlights </div>
                <div className="side-bar__icon"><div style={{scale:"1.2",position:"relative",top:"2px"}} ><GoSearch></GoSearch></div> <div style={{margin:"5px"}} ></div>Search</div>
                <div className="side-bar__icon"><div style={{scale:"1.3",position:"relative",top:"2px"}} ><CiSettings></CiSettings></div> <div style={{margin:"5px"}} ></div>Settings</div>
                <div className="side-bar__icon"><div style={{scale:"1.2",position:"relative",top:"2px"}} ><CiCircleQuestion></CiCircleQuestion></div> <div style={{fontSize:"13px",margin:'5px'}} >Help & Support</div></div>
                <div className="side-bar__icon"><MdLogout></MdLogout> <div style={{margin:"5px"}} >Logout</div></div>
           </div>
        </div>
    )
}