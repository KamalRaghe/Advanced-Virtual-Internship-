import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"

export default function Setting(){
        return(
          <div style={{display:"flex"}}>
               <SideBar></SideBar>
               <div >
                    <NavBar></NavBar>
                    <div className="BookScreen">
                        <div style={{color:"#032b41",fontSize:"32px",fontWeight:"bolder",margin:"10px",marginBottom:"30px",padding:"20px 0px",borderBottom:"1px solid lightgrey"}} >Settings</div>
                        <div style={{marginLeft:"10px"}}>
                            <div style={{color:"#032b41",fontSize:"18px",fontWeight:"bolder"}}>Your Subscription plan</div>
                            <div style={{color:"#032b41",paddingTop:"10px",paddingBottom:"20px",borderBottom:"1px solid lightgrey"}} >premium-plus</div>
                            <div style={{color:"#032b41",fontSize:"18px",fontWeight:"bolder",marginTop:"30px",paddingBottom:"10px"}} >Email</div>
                            <div>hanna@gmail.com</div>
                        </div>
                    </div>
                </div>
          </div>
        )
  }