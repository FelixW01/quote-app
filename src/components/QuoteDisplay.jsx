import { useState, useEffect } from 'react'

function QuoteDisplay() {
  const [quote, setQuote] = useState('')
  
  async function fetchRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      // Alerts user if fetch fails
      alert('Failed to fetch quote')
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    setQuote(`"${data.content}" — ${data.author}`)
    return data;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
  }
}

useEffect(() => {
    fetchRandomQuote()
}, []);

  return (
    <>
     <h1>{quote}</h1>
     <button onClick={fetchRandomQuote}>Get another Quote</button>
    </>
  )
}

export default QuoteDisplay
