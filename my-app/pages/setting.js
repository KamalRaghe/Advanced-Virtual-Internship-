import SideBar from "@/components/sideBar"
import NavBar from "@/components/Nav"
import { db, initFirebase } from "@/firebase";
import { addDoc, collection, onSnapshot, query, where} from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Setting(){
    const [payed, Payed] = useState()
    const router = useRouter()
    async function PayedCheck() {
        const app = initFirebase()
        const userId = window.localStorage.getItem('uid')
        const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
        const q = query(
          subscriptionsRef,
          where("status", "in", ["trialing", "active"])
        );
      
        const promise = new Promise((resolve, reject) => {
          const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
              if (snapshot.docs.length === 0) {
                Payed(false);
              } else {
                Payed(true);
              }
              unsubscribe();
            },
            reject
          );
        });
      };
    
    useEffect(() =>{
        PayedCheck()
        console.log(payed)
      })
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