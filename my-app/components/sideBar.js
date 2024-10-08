import { FaHouse } from "react-icons/fa6";
import { CiBookmark, CiSettings, CiCircleQuestion } from "react-icons/ci";
import { FaPenClip } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { MdLogout } from "react-icons/md";

export default function SideBar(){
    return(
        <div style={{backgroundColor:"#f1f6f4",height:"100vh"}}>
            <div class="nav__img--mask">
                <img class="nav__img" style={{scale:"0.9"}} src="logo.png" alt="logo" />
            </div>
           <div><FaHouse></FaHouse> Home</div>
           <div><CiBookmark></CiBookmark> My library</div>
           <div><FaPenClip></FaPenClip> Highlights </div>
           <div><GoSearch></GoSearch> Search</div>
           <div><CiSettings></CiSettings> Settings</div>
           <div><CiCircleQuestion></CiCircleQuestion> Help & Support</div>
           <div><MdLogout></MdLogout> Logout</div>
        </div>
    )
}