import { IoMdClose } from "react-icons/io";
import Field from "./field";
import axios from "axios";

const Modal = ({isModalOpen, setIsModalOpen, setContacts, editItem, setEditItem}) => {

    // form gönderildiğinde çalışacak fonksiyon 
    const handleSubmit = async (e) => {
        // sayfa yenilenmesini engelle 
      e.preventDefault();

    //   javascript içerisinde bulunan formData yapısı sayesinde forma eriştik 
      const formData = new FormData(e.target);

    //   erişilen bu form içerisindeki değerleri alıp önce enteries metoduyla diziye sonrasında object.fromEntries ile diziye cevirdik bu sayede formun gönderilmesiyle bir kişi objesi elde ettik 
      const newContact = Object.fromEntries(formData.entries());
     
      try {
        if (!editItem) {
          // Formdan alınan değerler ile api'a verileri gönder
          const response = await axios.post("/contact", newContact);
          // Buradaki kişi verisini state e direkt aktarırsak bu bizim için önceki verileri kaybetme anlamına gelecektir.
          // Bunu engellemek için `spread operatör` kullanılır.
          // Bu operatör önceki değerleri koruyup yeni değeride state e aktarır
          setContacts((contacts) => [...contacts, response.data]);
        } else {
          // Edit item kısmındaki verilerle kişiyi api'da güncelle
          const response = await axios.put(`/contact/${editItem.id}`, newContact);
          setContacts((contacts) =>
            contacts.map((contact) =>
              contact.id === editItem.id ? newContact : contact
            )
          );
          setEditItem(null);
        }
         // Modal'ı kapat
         setIsModalOpen(() => false);
        } catch (err) {
          // Hata durumunda kullanıcıya mesaj göster
          alert(`İşlem gerçekleştirilemedi`);
          console.log(`Hataaa: ${err}`);
        }
      };
    

   
    return (
        isModalOpen && (
            <div className="modal">
            <div className="modal-inner">
                {/* modal head  */}
                <div className="modal-head">
                    <h2> {editItem ? "Kişiyi Güncelle" : "Yeni Kişi Ekle"}</h2>
                    <button onClick={() =>{ setIsModalOpen(false);
                      setEditItem(null);
                    }}><IoMdClose /></button>
                </div>
                {/* form  */}
                <form onSubmit = {handleSubmit}>
                   <Field  value={editItem?.name} label="İsim Soyisim" name= "name" />
                   <Field value={editItem?.positon} label= "Pozisyon" name="positon" />
                   <Field value={editItem?.company} label="Şirket" name="company"/>
                   <Field value={editItem?.phone} label="Telefon" name="phone" />
                   <Field value={editItem?.email} label="Mail" name="email" />          
                    <div className="buttons">
                      <button type="button" onClick={() => setIsModalOpen(false)}>Vazgeç</button>  
                      <button type="submit">Gönder</button> 
                   </div>      
                </form>
            </div>
        </div>
        )
    );
};

export default Modal;