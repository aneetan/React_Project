import { Layout, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import { useState } from "react";
import ChangeThemeButton from "./components/ChangeThemeButton";
import ToggleMenu from "./components/ToggleMenu";

const {Header, Sider} = Layout;


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
    console.log("Hello dark")
  }; 

  const {
    token : {colorBgContainer},
  } = theme.useToken();


  return (
    <>
        <Layout>
          <Sider collapsed={collapsed} collapsible trigger={null} className="sidebar" theme={darkTheme? 'dark' : 'light'}>
            <Logo darkTheme={darkTheme}/>
            <MenuList darkTheme={darkTheme}/>
          </Sider>
          <Layout>
            <Header className="header" style={{background: colorBgContainer}}>
              <ToggleMenu collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
              <ChangeThemeButton darkTheme={darkTheme} changeTheme={changeTheme} />

            </Header>
          </Layout>
        </Layout>
    </>
  )
}

export default App
