import { Layout, Space, theme } from "antd";
import Logo from "./components/sidebar/Logo";
import MenuList from "./components/sidebar/MenuList";
import { useState } from "react";
import ChangeThemeButton from "./components/header/ChangeThemeButton";
import ToggleMenu from "./components/header/ToggleMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SupportLayout from "./components/sidebar/SupportLayout";
import SearchBar from "./components/header/SearchBar";
import Notifications from "./components/header/Notifications";
import ProfileDropDown from "./components/header/ProfileDropDown";
import Cards from "./pages/Cards";

const {Header, Sider, Content} = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }; 

  const {
    token : {colorBgContainer, colorBgElevated},
  } = theme.useToken();

  const headerBackground = darkTheme ? "#101828" : "#FFFFFF";
  //171F2F
  return (
        <Layout>
          <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="sidebar"
          theme={darkTheme? 'dark' : 'light'}
          >
            <Logo darkTheme={darkTheme}/>
            <MenuList darkTheme={darkTheme}/>
          </Sider>

          <Layout>
            <Header className="header" style={{background: headerBackground}}>
              <div className="left-header">
                <ToggleMenu darkTheme={darkTheme} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
                <SearchBar darkTheme={darkTheme}/>
              </div>
              <div className="right-header">
                <ChangeThemeButton darkTheme={darkTheme} changeTheme={changeTheme} />
                <Notifications/>
                <ProfileDropDown/>
              </div>
            </Header>

            <Content className="main-content">
              <h2> Content </h2>
              <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/calendar" element={<div> This is calendar </div>}> </Route>
                <Route path="/support">
                  <Route path="chat" element={<div> This is chat </div>}> </Route>
                  <Route path="contact">
                    <Route path="facebook" element={<div> Facebook </div>}> </Route>
                    <Route path="instagram" element={<div> Instagram </div>}> </Route>
                  </Route>
                </Route>
                <Route path="/tables" element={<div> This is tables</div>}> </Route>
                <Route path="/profile" element={<div> This is profile </div>}> </Route>
              </Routes>
            </Content>

          </Layout>
        </Layout>
  )
}

export default App
