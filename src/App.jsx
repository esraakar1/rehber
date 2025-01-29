import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // fetch metoduyla apı ya istek atma 

  useEffect(() => {
    fetch(" http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);

    useEffect(() => {
      axios
      .get("http://localhost:3000/posts")
      .then((res) => console.log(`axios: ${res}`));
    }, []);
  // axios ile api ya istek atma 
  return (
    <div>
      <h1>React</h1>
    </div>
  );
}

export default App;
