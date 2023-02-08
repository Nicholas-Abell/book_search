import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


function App() {

  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState();


  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apiKey}`

  const pullData = () => {
    axios.get(url).then((res) => setBookData(res.data.items));
  }

  useEffect(() => {
    console.log(bookData);
  }, [bookData])

  return (
    <div className="App">
      <Header
        pullData={pullData}
        search={search}
        setSearch={setSearch} />
      <Main
        bookData={bookData} />
    </div>
  );
}

export default App;