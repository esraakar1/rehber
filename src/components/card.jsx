import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Card = ({contact}) => {
    const [name, surname] = contact.name.split(" ");
    return (
        <div className="card">
            <div className="buttons">
                <button><MdDeleteForever />
                </button>
                <button><AiFillEdit /></button>
            </div>

            <div>
                {/* kişi profili  */}
                <h1> {name[0]} {surname[0]}</h1>
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