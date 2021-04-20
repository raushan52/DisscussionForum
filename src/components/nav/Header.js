import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  DingdingOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style ={{"padding":"10px" ,  "background":  "white" ,"boxSizing":"border-box"}}>
      <Item key="home" icon={< DingdingOutlined style={{fontSize:"2rem"}}></DingdingOutlined>} 
      style ={{fontWeight:"bold" ,fontSize:"1.5rem", color:"#ffff"}}>
        <Link to="/">Home</Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined style={{fontSize:"2rem"}}/>} className="float-right" style ={{fontWeight:"bold" ,fontSize:"1.5rem", color:"#ffff"}}>
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined  style={{fontSize:"2rem"}}/>} className="float-right" style ={{fontWeight:"bold" ,fontSize:"1.5rem", color:"#ffff"}}>
          <Link to="/login">Login</Link>
        </Item>
       
      )}
     

      {user && (
        <SubMenu
          icon={<SettingOutlined style={{fontSize:"1.5rem"}}/>}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
          style ={{fontWeight:"bold" ,fontSize:"1rem",background:"#9F75F8",borderRadius:"1rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}}
        >
       
          <Item icon={<LogoutOutlined />} onClick={logout} style ={{fontWeight:"bold" ,fontSize:"1rem"}}>
            Logout
          </Item>
        </SubMenu>
      )}
      {user && (
        <Item key="New Discussion" icon={<UserOutlined style={{fontSize:"1.5rem"}}/>} className="float-right" style ={{fontWeight:"bold" ,fontSize:"1rem"}}>
          <Link to="/create">New Discussion</Link>
        </Item>
       
      )}

 
    </Menu>
   
  );
};

export default Header;
