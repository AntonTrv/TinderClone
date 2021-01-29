import * as React from 'react';
import {useEffect, useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../../firebase/firebase";


function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())))
    }, [])


        return (
        <div>
            {/*<h1></h1>*/}
            <div className="tinderCards__cardContainer">
                <h2>Out of options for today!</h2>
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key="person.name"
                    preventSwipe={['up','down']}
                >

                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
};

export  default TinderCards