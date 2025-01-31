import { useEffect, useState } from 'react';
import axios from 'axios';
import { GoSearch } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import Card from "./components/card";
import Modal from './components/modal';

// axios la baseUrl tanımlama 

axios.defaults.baseURL = "http://localhost:3000";

function App() {
// bileşen içerisinde verileri yönetmek için state tanımla 
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
// sayfa yüklendiğinde api dan verileri al 
  useEffect(() => {
    axios.get("/contact")
    .then((res) => setContacts(res.data))
  }, []);

  // form gönderildiğinde calısacak fonksiyon 
  const handleSubmit = (e) => {
     e.preventDefault();
     const text = e.target[1].value;

       // api ya gönderilecek parametreleri belirle 
  const params = {
    q: text,
  };

  axios.get(" /contact", {params})
  .then((res) => setContacts(res.data));

  };


  console.log(contacts);
  return (
    <div className='app'>
      {/* /* {header} */ }
      <header>
      <h1>Rehber</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <button><GoSearch /></button>
          <input type="text" placeholder='kişi arayınız' />
        </form>

        <button className='ns'><IoMenu /></button>
        <button className='ns'><HiMiniSquares2X2 /></button>

        <button onClick={() => setIsModalOpen(true)} className='add'>
          <IoMdPersonAdd />
          <span>Yeni Kişi</span>
        </button>
      </div>
    </header>

    {/* main  */}
    <main>
    {contacts.map((contact) => (
      <Card key={contact.id} contact = {contact}/>
    ))}
    </main>
    {/* modal  */}
    <Modal isModalOpen={isModalOpen} 
    setIsModalOpen={setIsModalOpen} 
    setContacts={setContacts}
    />
  </div>
  );
}

export default App;
