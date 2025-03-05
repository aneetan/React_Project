import { ArrowDownOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Card, Space, Statistic } from "antd"

const Cards = ({title, icon, value, price, stockIcon, stock}) => {
    const isArrowDown = stockIcon?.type === ArrowDownOutlined;
    return (
        <Card className="home-cards">
            <Space direction="horizontal">
                <div className="cards">
                    <div className="card-header">
                        <img className="cards-img" src={icon} alt="icon"  />
                        <div className="cards-text">
                            <h3 className="cards-title"> {title} </h3>
                            <span> {value} </span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <h3> {price} </h3>
                        <p className={`stock-item ${isArrowDown ? "arrow-down" : ""}`}> {stockIcon} {stock}</p>
                        
                    </div>
                    
                </div>
            </Space>
        </Card>
    )
}

export default Cards