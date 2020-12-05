import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from "@material-ui/icons";


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/18835502_1866130286962050_1411904463507585596_n.jpg?_nc_cat=110&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Ijoo9k7zr5wAX9uo9cE&_nc_ht=scontent.fyyz1-2.fna&oh=d4a9bbadfa1b90794e1e863f1323dd11&oe=5FF00752"
        title="Setu Potnis"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Centre"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  );
}

export default Sidebar;
