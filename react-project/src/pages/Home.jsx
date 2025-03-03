import { Space } from "antd"
import Cards from "./Cards"
import Profile from '../assets/images/profile.png'

const Home = () => {
    return (
        <div>
            <Space direction="horizontal" className="home-space">
                <Cards
                title="Paypal"
                value="1234"
                icon="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                />

                <Cards
                title="Facebook"
                value="345"
                icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s"
                />

                <Cards
                title="Paypal"
                value="1234"
                icon="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                />

                <Cards
                title="Paypal"
                value="1234"
                icon="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                />
            </Space>
        </div>
    )
}

export default Home