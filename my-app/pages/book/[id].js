
import BookPage from "@/components/book"
import { useEffect, useState } from "react"
export default function ForYouPage(){
  const [books, setBooks] = useState([])
      return(
        <div>
            <BookPage></BookPage>
        </div>
      )
}