import React, { useEffect } from "react";
import "../CSS/App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "../StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
            {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
