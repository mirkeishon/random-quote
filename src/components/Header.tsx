import { MdAutorenew } from 'react-icons/md'
const Header: React.FC<{
  getRandomQuote: ()=>void
}> = ({getRandomQuote}) => {
  return (
    <header className='flex justify-end pt-5 sm:pr-5 max-w-6xl m-auto'>
        <button onClick={()=>getRandomQuote()} className='flex font-Raleway items-center'>
          random <MdAutorenew/>
        </button>
    </header>
  )
}

export default Header