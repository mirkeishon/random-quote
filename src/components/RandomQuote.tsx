import { MdArrowRightAlt } from "react-icons/md"
import { Link } from "react-router-dom"

interface quote{
    quoteAuthor: string,
    quoteGenre: string,
    quoteText: string,
    _id: string    
}

const RandomQuote: React.FC<{
    randomQuote: quote[],
}> = ({randomQuote}) => {
    console.log(randomQuote)
  return (
    <main className="max-w-6xl m-auto mb-10">
        <div className="md:m-32 mt-10 sm:px-24 px-4 md:border-l-4 border-yellow-400">
            <p className="sm:text-4xl text-2xl font-semibold font-Raleway">"{randomQuote[0].quoteText}"</p>
        </div>
        <div className="md:m-32 md:mt-0 mt-10 mb-10 sm:px-20 px-4">
            <Link to={`author/${randomQuote[0].quoteAuthor}`}>
                <div className="px-4 py-8 hover:bg-black group hover:bg-opacity-80 flex justify-between">
                    <div className="group">
                        <p className="text-2xl group-hover:text-white font-Raleway text-gray-600 group font-bold flex items-center justify-between">{randomQuote[0].quoteAuthor}</p>
                        <p className="text-gray-500 text-sm font-Raleway">{randomQuote[0].quoteGenre}</p>
                    </div>
                    <div className="flex items-center">
                        <MdArrowRightAlt className=" text-gray-500 sm:text-white text-4xl"/>
                    </div>
                </div>
            </Link>
        </div>
    </main>
  )
}

export default RandomQuote