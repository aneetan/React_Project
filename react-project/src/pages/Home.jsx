import { Space } from "antd"
import Cards from "./Cards"
import LineGraph from "./LineGraph"
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"

const Home = () => {
    return (
        <div>
            <Space direction="horizontal" className="home-space">
                <Cards
                title="Apple"
                value="Apple, Inc"
                icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s"
                price="$100.01"
                stockIcon={<ArrowUpOutlined/>}
                stock="11.01%"
                />

                <Cards
                title="Amazon"
                value="Amazon, Inc"
                icon="https://i.pinimg.com/736x/68/40/f3/6840f3293a5d4ddaa70ae6f1e32d93ca.jpg"
                price="$112.01"
                stockIcon={<ArrowDownOutlined/>}
                stock="15.01%"
                />

                <Cards
                title="Tesla"
                value="Tesls, Inc"
                icon="https://m.media-amazon.com/images/I/31jETLYSceL._AC_UF1000,1000_QL80_.jpg"
                price="$112.01"
                stockIcon={<ArrowUpOutlined/>}
                stock="9.01%"
                />

                <Cards
                title="Instgram"
                value="Instagram, Inc"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                price="$112.01"
                stockIcon={<ArrowUpOutlined/>}
                stock="5.00%"
                />
            </Space>

            <LineGraph/>
        </div>
    )
}

export default Home