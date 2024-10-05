import { useState } from "react"
import { useRouter } from "next/router"
import { provider, auth } from "@/firebase"
import { IoPersonSharp} from "react-icons/io5";
import { signInWithPopup,signInWithEmailAndPassword, sendPasswordResetEmail,createUserWithEmailAndPassword } from "firebase/auth"

export default function Modal({close}){
    const [login, setLogin] = useState(true)
    const [account, setAccount] = useState({
        title:"", 
        password:""
        })

        const router = useRouter()

        function signIn(){
          const email = account.title
          const password = account.password
          signInWithEmailAndPassword(auth,email,password).then(()=>{
          }).catch(err =>{
            alert(err)
          })
        }
        
        function Forgot(){
          const email = account.title
          if(email){
            sendPasswordResetEmail(auth, email).then(()=>{alert('Check your email')})
          }else{
            alert('Put in your email') 
          }
        }
      
        function CreateUser(e){
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
      
          createUserWithEmailAndPassword(auth,email,password).then(()=>{
          }).catch(err =>{
            alert(err)
          })
      }

      function signInWithGoogle(){
        signInWithPopup(auth, provider)
      }

    return (
        <div>
            {login ? <div className="modal">
                <div style={{display:"flex",justifyContent:"end",alignItems:"start",height:"35px"}} >
                    <button onClick={close}  style={{fontSize:"40px",border:"none",marginLeft:"20px"}} >x</button>
                </div>
                <p className="modal__title">Log in to Summarist</p>
                <div className="modal__buttons">
                    <button onClick={close} className="modal-btn" style={{backgroundColor:"#0564f1",color:"white"}} >
                        <div style={{fontSize:"30px",position:"relative",top:"3px",left:"5px"}} >
                            <IoPersonSharp/>
                        </div>
                        Login as a Guest
                        <div style={{fontSize:"30px",color:"transparent"}} ><IoPersonSharp/></div>
                    </button>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",margin:"10px",width:"95%"}}>
                    <div style={{borderBottom:"1px solid black",width:"35%",position:"relative",bottom:"8px",opacity:"0.5" }}></div>
                    or
                    <div style={{borderBottom:"1px solid black",width:"35%",position:"relative",bottom:"8px",opacity:"0.5" }}></div>
                </div>
                <div className="modal__buttons">
                <button onClick={close} className="modal-btn" style={{backgroundColor:"#0365f2",color:"white"}} >
                    <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px",borderRadius:"5px"}} >
                        <img style={{scale:"0.25"}} src="google.png" alt="logo" /></div>
                        Login with Google
                        <div style={{fontSize:"30px",color:"transparent"}} ><IoPersonSharp/>
                    </div>
                </button>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",margin:"10px",width:"95%"}}>
                    <div style={{borderBottom:"1px solid black",width:"35%",position:"relative",bottom:"8px",opacity:"0.5" }}></div>
                    or
                    <div style={{borderBottom:"1px solid black",width:"35%",position:"relative",bottom:"8px",opacity:"0.5" }}></div>
                </div>
                <div className="modal__buttons">
                    <button onClick={close} style={{justifyContent:"center"}} className="modal-btn" >Login</button>
                </div>
                <input></input>
            </div>: null}
            <div onClick={close} className="backdrop" />
        </div>
    )
}