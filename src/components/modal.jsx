import { IoMdClose } from "react-icons/io";
import Field from "./field";

const Modal = ({isModalOpen, setIsModalOpen, setContacts}) => {

    // form gönderildiğinde çalışacak fonksiyon 
    const handleSubmit = (e) => {
        // sayfa yenilenmesini engelle 
      e.preventDefault();
      console.log(e);

    //   javascript içerisinde bulunan formData yapısı sayesinde forma eriştik 
      const formData = new FormData(e.target);

    //   erişilen bu form içerisindeki değerleri alıp önce enteries metoduyla diziye sonrasında object.fromEntries ile diziye cevirdik bu sayede formun gönderilmesiyle bir kişi objesi elde ettik 
      const newContact = Object.fromEntries(formData.entries());
    //   formdan alınan değerler ile api a verileri gönder 
    axios.post('/contact', newContact);

    setContacts((contacts)=> [...contacts, newContact]);

    // modal ı kapat 
    setIsModalOpen(() => false);

   };
    return (
        isModalOpen && (
            <div className="modal">
            <div className="modal-inner">
                {/* modal head  */}
                <div className="modal-head">
                    <h2>Yeni Kişi Ekle</h2>
                    <button onClick={() => setIsModalOpen(false)}><IoMdClose /></button>
                </div>
                {/* form  */}
                <form onSubmit = {handleSubmit}>
                   <Field label="İsim Soyisim" name= "name" />
                   <Field label= "Pozisyon" name="positon" />
                   <Field label="Şirket" name="company"/>
                   <Field label="Telefon" name="phone" />
                   <Field label="Mail" name="email" />          
                    <div className="buttons">
                      <button>Vazgeç</button>  
                      <button>Gönder</button> 
                   </div>      
                </form>
            </div>
        </div>
        )
    );
};

export default Modal;