import {Button} from 'antd';
import {SunOutlined, MoonOutlined} from '@ant-design/icons';


const ChangeThemeButton = ({darkTheme, changeTheme}) => {
    return(
        <div className="change-theme-btn">
            <Button className='theme-btn' type='text'
            style={{color: darkTheme ? "#FFFFFF" : "#101828"}}
            onClick={changeTheme}
            >
                {darkTheme ? <SunOutlined/>: <MoonOutlined/>}
            </Button>
        </div>
    )
}

export default ChangeThemeButton;