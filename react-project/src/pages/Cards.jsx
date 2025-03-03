import { ShoppingCartOutlined } from "@ant-design/icons"
import { Card, Space, Statistic } from "antd"

const Cards = ({title, icon, value}) => {
    return (
        <Card className="home-cards">
            <Space direction="horizontal">
                <img className="cards-img" src={icon} alt="icon"  />
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}

export default Cards