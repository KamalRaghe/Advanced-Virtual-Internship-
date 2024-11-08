import axios from "axios"
import { useRouter } from "next/router";
import Link from "next/link";

export default function Player({url}){

  const router = useRouter()

    async function fetchBook(){
        const { data } = await axios.get(url)
        setBook(data)
        setTags(data.tags)
        console.log(data)
      }

      useEffect(()=>{
        fetchBook()
      },[])
      return(
        <div >
                <div className="BookScreen" style={{display:"flex",justifyContent:"space-between"}}>            
                    <div style={{padding:"10px"}} >
                        <div style={{width:"600px",display:"flex",justifyContent:"start",color:"#032b41",fontSize:"40px",margin:"10px",fontWeight:"bolder"}}>{book.title}</div>
                        <div style={{margin:"20px 10px",fontWeight:"bold"}} >{book.author}</div>
                        <div style={{margin:"10px",fontSize:"25px"}} >{book.subTitle}</div>

                       
                        <Link>{book.audioLink}</Link>
                        <div>
                            {book.summary}
                        </div>
                      
                    </div>
                    <div>
                    </div>
                    
                      
        
                </div>
        </div>
      )
}