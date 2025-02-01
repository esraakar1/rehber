import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Card = ({contact, handleDelete, handleEdit}) => {
    
    return (
        <div className="card">
            <div className="buttons">
                <button onClick={() => handleDelete(contact.id)}><MdDeleteForever />
                </button>
                <button onClick={() => handleEdit(contact)}><AiFillEdit /></button>
            </div>

            <div>
                {/* kişi profili  */}
                <h1>{contact.name[0]}</h1>
                {/* name  */}
                <h3>{contact.name}</h3>
                {/* position  */}
                <p>{contact.positon}</p>
                {/* company  */}
                <p>{contact.company}</p>

                {/* bottom  */}
                <div className="bottom">
                    <div>
                        <span><FaPhone /></span>
                        <span>t{contact.phone}</span>
                    </div>
                    <div>
                        <span><IoIosMail /></span>
                        <span>{contact.email}</span>
                    </div>
                </div>
            </div>
        </div>

   
       
    );
};

export default Card;