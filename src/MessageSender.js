import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // some clever db stuff
    setInput("");
    setImageURL("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top ">
        <Avatar src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/18835502_1866130286962050_1411904463507585596_n.jpg?_nc_cat=110&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Ijoo9k7zr5wAX9uo9cE&_nc_ht=scontent.fyyz1-2.fna&oh=d4a9bbadfa1b90794e1e863f1323dd11&oe=5FF00752" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind?`}
          ></input>
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL(Optional)"
          ></input>

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Cam</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
