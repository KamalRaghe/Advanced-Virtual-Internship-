import { useRouter } from "next/router"

export default function Book(){
const router = useRouter()
const {id} = router.query 


async function fetchBooks(){
    const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    setBook(data[0])
  }

return(
    <div>
        {id}
    </div>
)
}