import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [color, setColor] =useState()

  const [quote, setQuote] = useState({
    quotes: [
      {
      quote: "",
      author: ""
      },
    ],
  })

  const [quoteIndex, setQuoteIndex] = useState(0)


  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const randomQuote = e => {
    const len = quote.quotes.length;
    setQuoteIndex(Math.floor(Math.random() * len));
    console.log(len)
  }

  const randomColors = e => {
    const len = colors.length;
    setColor(Math.floor(Math.random() * len));

    randomQuote()
  }

  const value = quote.quotes[quoteIndex]
  console.log(value)

  const fetchQuote = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => setQuote(data))
    .catch(error => console.log("Error: ", error))   
  }

  useEffect(() => {
    fetchQuote()
  }, [])
  


  return (
    <div>
       <div className="container" style={{backgroundColor: colors[color]}} >
        <div className="wrapper" style={{color: colors[color]}} >
          <p>"{value.quote}"</p>
          <p>- {value.author} </p>

            <div className="subcontainer">
              <i style={{color: colors[color]}} className="icon-group icon1 fab fa-github-square"></i>
              <i style={{color: colors[color]}} className="icon-group icon2 fab fa-linkedin"></i>
              <button className="button" style={{backgroundColor: colors[color]}} onClick={randomColors} >New Quote</button>
            </div>

            <div>
              <p className="footer" >By <a href="https://mariabeckles.herokuapp.com/" target="blank" > Maria Beckles </a> </p>
            </div>

        </div>
      </div>
       <div className="buttons-container">
      </div>
    </div>
  );
}

export default App;


