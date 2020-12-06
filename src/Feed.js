import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/18835502_1866130286962050_1411904463507585596_n.jpg?_nc_cat=110&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Ijoo9k7zr5wAX9uo9cE&_nc_ht=scontent.fyyz1-2.fna&oh=d4a9bbadfa1b90794e1e863f1323dd11&oe=5FF00752"
        message="this works"
        timestamp="this is a timestamp"
        username="setupotnis"
        image="https://scontent.fyyz1-2.fna.fbcdn.net/v/t31.0-8/18879863_1866130276962051_9010749479587354407_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a4a2d7&_nc_ohc=RCeTA45VcVkAX_VOzi_&_nc_ht=scontent.fyyz1-2.fna&oh=572ec6b8af8d192b64bdb18c28646340&oe=5FF1F248"
      />
      <Post
        profilePic="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/18835502_1866130286962050_1411904463507585596_n.jpg?_nc_cat=110&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Ijoo9k7zr5wAX9uo9cE&_nc_ht=scontent.fyyz1-2.fna&oh=d4a9bbadfa1b90794e1e863f1323dd11&oe=5FF00752"
        message="this works"
        timestamp="this is a timestamp"
        username="setupotnis"
      />
    </div>
  );
}

export default Feed;
