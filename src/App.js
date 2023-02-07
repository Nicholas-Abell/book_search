import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


function App() {

  const [search, setSearch] = useState('');

  let bookImg;
  let bookTitle = 'Art of War';
  let bookDescription = 'Description';

  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apiKey}`

  const pullData = () => {
    axios.get(url).then((res) => console.log(res))
    //data.items
  }

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        pullData={pullData} />
      <Main search={search}
        bookImg={bookImg}
        bookTitle={bookTitle}
        bookDescription={bookDescription} />
    </div>
  );
}

export default App;
