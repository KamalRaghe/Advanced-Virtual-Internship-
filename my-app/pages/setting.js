import SideBar from "@/components/sideBar"

export default function Setting(){
        return(
          <div style={{display:"flex"}}>
               <SideBar></SideBar>
               <div className="BookScreen" >
                    <div style={{color:"#032b41",fontSize:"40px",fontWeight:"bolder"}} >Settings</div>
                    <div>Your Subscription plan</div>
                    <div>premium-plus</div>
                    <div>Email</div>
                    <div>hanna@gmail.com</div>
                </div>
          </div>
        )
  }