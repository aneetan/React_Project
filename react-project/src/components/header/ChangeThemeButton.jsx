import {Button} from 'antd';
import {SunOutlined, MoonOutlined} from '@ant-design/icons';


const ChangeThemeButton = ({darkTheme, changeTheme}) => {
    return(
        <div className="change-theme-btn">
            <Button type='text' onClick={changeTheme}>
                {darkTheme ? <SunOutlined/>: <MoonOutlined/>}
            </Button>
        </div>
    )

}

export default ChangeThemeButton;