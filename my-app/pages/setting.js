import SideBar from "@/components/sideBar"

export default function Setting(){
        return(
          <div style={{display:"flex"}}>
               <SideBar></SideBar>
               <div className="BookScreen">
                    Settings
                </div>
          </div>
        )
  }