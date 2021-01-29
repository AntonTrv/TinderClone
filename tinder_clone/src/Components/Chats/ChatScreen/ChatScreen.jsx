import * as React from 'react';
import {useState, useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';
import database from "../../../firebase/firebase";
import { useLocation } from 'react-router-dom';



const ChatScreen = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const location = useLocation();

    useEffect(() => {

        let docRef = database.collection("messages").doc(location.pathname.split('/')[2]);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                setMessages(doc.data().message)
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    });

    const handleSend = e => {
        e.preventDefault();

        database.collection("messages").doc(location.pathname.split('/')[2]).set({
            name: "Mark Zuckerberg",
            message: [...messages, input]
        })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });




        setMessages([...messages, {message: input}]);
        setInput('');
    }


    return (
        <div className="chatScreen">
            <p>You've matched on 10/01/21</p>
            {messages.map(message => (

               message.name ? (
                   <div className="chatScreen__message" key={message.length}>
                       <Avatar className="chatScreen__image" alt={messages.name} src={messages.image}/>
                       <p className="chatScreen__text">{message}</p>
                   </div>
               ) :
                   (
                       <div className="chatScreen__message" key={message.length}>
                           <p className="chatScreen__textUser">{message}</p>
                       </div>
                   )
            ))}
            <div className="chatScreen__input">
                <form action="">
                    <input className="chatScreen__inputField" type="text" placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)}/>
                    <button className="chatScreen__inputButton" onClick={handleSend} type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatScreen;