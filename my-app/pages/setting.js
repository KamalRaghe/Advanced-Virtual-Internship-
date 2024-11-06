import SideBar from "@/components/sideBar"

export default function Setting(){
        return(
          <div style={{display:"flex"}}>
               <SideBar></SideBar>
               <div className="BookScreen" >
                    <div>Settings</div>
                    <div>Your Subscription plan</div>
                    <div>premium-plus</div>
                </div>
          </div>
        )
  }