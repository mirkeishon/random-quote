import axios from 'axios';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import RandomQuote from './components/RandomQuote';
import Loading from './components/Loading';

const App = () => {
  const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  const [randomQuote, setRandomQuote] = useState([])
  const [loading, setLoading] = useState(true)
  const getRandomQuote = async ()=>{
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setRandomQuote(data.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(()=>{
    getRandomQuote()
  },[])

  return (
    <>
      <Header getRandomQuote={getRandomQuote}/>
      {loading ? <Loading/> : <RandomQuote randomQuote={randomQuote}/>}
    </>
  );
}

export default App;
