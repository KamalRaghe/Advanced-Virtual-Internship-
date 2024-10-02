import { useState } from "react"
import { useRouter } from "next/router"
import { provider, auth } from "@/firebase"
import { IoPersonSharp } from "react-icons/io5";
import { signInWithPopup,signInWithEmailAndPassword, sendPasswordResetEmail,createUserWithEmailAndPassword } from "firebase/auth"

export default function Modal({close}){
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
            <div className="modal">
                <div style={{display:"flex",justifyContent:"end",alignItems:"start",height:"35px"}} >
                    <button onClick={close}  style={{fontSize:"40px",border:"none",marginLeft:"20px"}} >x</button>
                </div>
                <p className="modal__title">Log in to Summarist</p>
                <div className="modal__buttons">
                    <button onClick={close} className="modal-btn" style={{backgroundColor:"#032b41",color:"white"}} ><IoPersonSharp/>Login as a Guest<div></div></button>
                </div>
                <div className="modal__buttons">
                    <button onClick={close} className="modal-btn" ><div style={{fontSize:"20px"}} ><IoPersonSharp/></div>Login as a Guest<div></div></button>
                </div>
            </div>
            <div className="backdrop" />
        </div>
    )
}