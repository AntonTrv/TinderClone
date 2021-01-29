import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import Chats from "./Components/Chats/Chats";
import ChatScreen from "./Components/Chats/ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
            <Router>
                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/chat"/>
                        <ChatScreen/>

                    </Route>

                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
