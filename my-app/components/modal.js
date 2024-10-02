import { useState } from "react"
import { useRouter } from "next/router"
import { provider, auth } from "@/firebase"
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
                <div style={{display:"flex",justifyContent:"end"}} >
                    <button onClick={close}  style={{fontSize:"40px",border:"none",margin:"0",padding:"0",marginLeft:"20px"}} >x</button>
                </div>
                <p className="modal__title">Log in to Summarist</p>
                <div className="modal__buttons">
                <button onClick={close} className="btn btn__cancel">Cancel</button>
                </div>
            </div>
            <div className="backdrop" />
        </div>
    )
}