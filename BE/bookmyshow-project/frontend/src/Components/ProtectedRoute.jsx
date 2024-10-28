import React, { useEffect } from 'react'
import { GetCurrentUser } from '../calls/users'
import {useNavigate} from "react-router-dom";
import {message, Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { hideLoading, showLoading } from '../redux/loaderSlice';
import { HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined,  } from '@ant-design/icons'; 
import {Link} from "react-router-dom";
import { setUser } from '../redux/userSlice';
import { Header } from 'antd/es/layout/layout';

function ProtectedRoute({children}) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined/>,
    },
    {
      lablel: `${user ? user.name : ""}`,
      icon: <UserOutlined/>,
      children: [
        {
          label: (
            <span onClick={() => {
              if(user.role === "admin"){
                navigate("/admin");
              } else if(user.role === "partner"){
                navigate("/partner")
              }else{
                navigate("/profile")
              }
            }}>My Profile</span>
          ),
          icon: <ProfileOutlined/>
        },
        {
          label: (
            <Link to="/login" onClick={() => {localStorage.removeItem("token")}}>Log Out</Link>
          ),
          icon: <LogoutOutlined/>
        }
      ]
    }
  ];

  const getValidUser = async () => {
    try{
      dispatch(showLoading());
      const response = await GetCurrentUser();
      console.log("bye",response.data);
      dispatch(setUser(response.data));
      dispatch(hideLoading());
    }catch(err){
      dispatch(setUser(null));
      message.error(err.message);
    }
  }

  useEffect(() => {
    if(localStorage.getItem("token")){
      getValidUser();
    }else{
      navigate("/login")
    }
  },[]);
  
  return (
    // user && (
      <>
      <Layout>
        <Header className = "d-flex justify-content-between" style = {{
            position: "sticky",
            top:0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignitems: "center"
          }}>
          <h3 className='demo-logo text-white m-0' style={{color:"white"}}>Book My Show</h3>
          <Menu theme='dark' mode='horizontal' items={navItems}></Menu>
        </Header>
        <div style={{
          padding: 24, minHeight: 30, background:"#fff"
        }}>{children}</div>
      </Layout>
      </>
    )
  // )
}

export default ProtectedRoute