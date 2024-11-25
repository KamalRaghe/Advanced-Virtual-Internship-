
import { LuFileKey } from "react-icons/lu";
import {  PiPottedPlantFill} from "react-icons/pi"
import { FaHandshake } from "react-icons/fa"

import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [books, setBooks] = useState([])
      return(
        <div>
             <div className="center" style={{zIndex:"100",flexDirection:"column",justifyContent:"space-between",height:"95vh",width:"100vw",backgroundColor:"#032b41",borderBottomRightRadius:"30%",borderBottomLeftRadius:"30%"}}>
                <div style={{textAlign:"center",fontSize:"50px",width:"1000px",color:"white",marginTop:"40px",fontWeight:"bolder"}} >Get unlimited access to many amazing books to read</div>
                <div style={{color:"white",fontSize:"20px"}} >Turn ordinary moments into amazing learning opportunities</div>
                <div className="center" style={{zIndex:"2",height:"300px",width:"350px",backgroundColor:"white",borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}} >
                    <img style={{scale:"0.4",zIndex:"1",borderRadius:"50%"}} src="pricing-top.png" alt="logo" />
                </div>
            </div>
            <div className="center" style={{paddingBottom:"160px"}}> 
                <div className="center" style={{justifyContent:'space-between',width:"250px",scale:"3.5",paddingTop:"40px",color:"#032b41"}} >
                    <div className="center" style={{flexDirection:"column"}} >
                        <LuFileKey/>
                        <span style={{fontSize:"5px",paddingTop:"10px", width:"70px",textAlign:"center"}} ><span style={{fontWeight:"bolder"}} >Key ideas in few min</span> with many books to read</span>
                    </div>
                    <div className="center" style={{flexDirection:"column"}} >
                        <PiPottedPlantFill/>
                        <span style={{fontSize:"5px",paddingTop:"10px", width:"70px",textAlign:"center"}} ><span style={{fontWeight:"bolder"}} >3 million</span> people growing with Summarist everyday</span>
                    </div>
                    <div className="center" style={{flexDirection:"column"}}>
                        <FaHandshake/>
                        <span style={{fontSize:"5px",paddingTop:"10px", width:"70px",textAlign:"center"}} ><span style={{fontWeight:"bolder"}} >Precise recommendations</span> collections curated by experts</span>
                    </div>
                </div>
            </div>
            <div className="center" style={{flexDirection:"column"}} >
                <div style={{fontSize:"30px",fontWeight:"bolder",color:"#032b41"}} >Choose the plan that fits you</div>
                <div style={{border:"4px solid gray",width:"650px",height:"140px",margin:"20px"}}>
                    <button className="center" style={{width:"20px",height:"20px",borderRadius:"50%",border:"2px solid black",margin:"10px"}}>
                        <span style={{backgroundColor:"black",width:"6px",height:"6px",borderRadius:"50px"}} ></span>
                    </button>
                    <div style={{padding:"2px"}}>
                        <div style={{padding:"5px 20px"}} >Premium Plus Yearly</div>
                        <div style={{padding:"5px 20px"}} >$99.99/year</div>
                        <div style={{padding:"5px 20px"}} >7-day free trial included</div>
                    </div>
                </div>
            </div>
        </div>
      )
}