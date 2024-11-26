
import { LuFileKey } from "react-icons/lu";
import {  PiPottedPlantFill} from "react-icons/pi"
import { FaHandshake } from "react-icons/fa"

import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState()
  const [border1, setBorder1] = useState("4px solid #20ba68")
  const [border2, setBorder2] = useState("4px solid gray")
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
            <div className="center" style={{flexDirection:"column"}} onClick={()=>{setOn1(true);setOn2(),setBorder1("4px solid #20ba68"),setBorder2("4px solid gray")}}>
                <div style={{fontSize:"30px",fontWeight:"bolder",color:"#032b41"}} >Choose the plan that fits you</div>
                <div className="center" style={{justifyContent:'start',border:border1,width:"650px",height:"140px",margin:"20px",backgroundColor:"#f1f6f4",borderRadius:"8px"}}>
                    <button onClick={()=>{setOn1(true);setOn2(),setBorder1("4px solid #20ba68"),setBorder2("4px solid gray")}} className="center" style={{width:"25px",height:"25px",borderRadius:"50%",border:"2px solid black",margin:"20px",position:"relative",bottom:"30px"}}>
                        {on1 && <span style={{backgroundColor:"black",width:"6px",height:"6px",borderRadius:"50px"}} ></span>}
                    </button>
                    <div>
                        <div style={{padding:"5px",fontWeight:"bolder",fontSize:"20px",color:"#032b41"}} >Premium Plus Yearly</div>
                        <div style={{padding:"5px",fontWeight:"bolder",fontSize:"22px",color:"#032b41"}} >$99.99/year</div>
                        <div style={{padding:"5px",fontSize:"13px",color:"grey"}} >7-day free trial included</div>
                    </div>
                </div>
            </div> 
            <div className="center" style={{flexDirection:"column"}} onClick={()=>{setOn2(true);setOn1(),setBorder2("4px solid #20ba68"),setBorder1("4px solid gray")}}>
                <div className="center" style={{justifyContent:'start',border:border2,width:"650px",height:"140px",margin:"20px",backgroundColor:"#f1f6f4",borderRadius:"8px"}}>
                    <button onClick={()=>{setOn2(true);setOn1(),setBorder2("4px solid #20ba68"),setBorder1("4px solid gray")}} className="center" style={{width:"25px",height:"25px",borderRadius:"50%",border:"2px solid black",margin:"20px",position:"relative",bottom:"30px"}}>
                        {on2 && <span style={{backgroundColor:"black",width:"6px",height:"6px",borderRadius:"50px"}} ></span>}
                    </button>
                    <div>
                        <div style={{padding:"5px",fontWeight:"bolder",fontSize:"20px",color:"#032b41"}} >Premium Monthly</div>
                        <div style={{padding:"5px",fontWeight:"bolder",fontSize:"22px",color:"#032b41"}} >$9.99/month</div>
                        <div style={{padding:"5px",fontSize:"13px",color:"grey"}} >No trial included</div>
                    </div>
                </div>
                {on1 ? <button className=" center btn" style={{width:"300px"}} >Start your free 7-day trial</button>:<button className=" center btn" style={{width:"300px"}} >Start your first month </button>}
            </div> 
            
        </div>
      )
}