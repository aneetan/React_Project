import {Button} from 'antd' 
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const ToggleMenu = ({collapsed, setCollapsed}) => {
    return(
        <div>
             <Button type="text"
                onClick={setCollapsed}
                icon={collapsed? <MenuFoldOutlined />: <MenuUnfoldOutlined />}>
              </Button>
        </div>
    )
}

export default ToggleMenu