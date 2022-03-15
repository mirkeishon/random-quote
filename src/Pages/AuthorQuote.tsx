import axios from "axios";
import { useEffect, useState } from "react";
import { MdAutorenew } from "react-icons/md"
import { Link, useParams } from "react-router-dom"
import Loading from "../components/Loading";

interface quote{
    quoteAuthor: string,
    quoteGenre: string,
    quoteText: string,
    _id: string    
}

const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/'

const AuthorQuote = () => {
    const [authorQuotes, setAuthorQuotes] = useState<quote[]>([])
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const getAuthorQuotes = async () => {
        console.log('hola')
        try {
            const { data } = await axios.get(url, {
                params: {
                    author: params.author,
                    limit: 3
                }
            })
            setAuthorQuotes(data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAuthorQuotes()
    },[])
  return (
    <>
        <header className='flex justify-end pt-5 sm:pr-5 max-w-6xl m-auto'>
            <Link to='/'>
                <button className='flex items-center font-Raleway text-lg'>
                    random <MdAutorenew/>
                </button>
            </Link>
        </header>
        <main className="max-w-6xl m-auto mb-10">
            <h1 className="md:ml-32 mt-10 md:pl-16 text-center sm:text-left text-4xl font-bold font-Raleway text-gray-600">{params.author}</h1>
            {loading ? <Loading/>: 
            authorQuotes.map((quote)=>{
                const {quoteText, _id} = quote;
                return (
                    <div key={_id} className="md:m-32 mt-16 px-16 md:border-l-4 border-yellow-400">
                        <p className="text-4xl font-semibold font-Raleway">"{quoteText}"</p>
                    </div> 
                )
            })}
        </main>
    </>
  )
}

export default AuthorQuote