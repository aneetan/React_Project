import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined, CalendarOutlined, TeamOutlined,
    MessageOutlined, PhoneOutlined, FacebookOutlined,
    InstagramOutlined, DatabaseOutlined, UserOutlined
} from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';

const MenuList = ({ darkTheme }) => {
    const navigate = useNavigate()
    const [selectedKeys, setSelectedKeys] = useState(['home'])

    const items = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: "Home",
        },
        {
            key: '/calendar',
            icon: <CalendarOutlined />,
            label: 'Calendar',
        },
        {
            key: 'submenu',
            icon: <TeamOutlined />,
            label: 'Support',
            children: [
                {
                    key: '/chat',
                    icon: <MessageOutlined />,
                    label: 'Chat',
                },
                {
                    key: 'subtask',
                    icon: <PhoneOutlined />,
                    label: 'Contact',
                    children: [
                        {
                            key: '/facebook',
                            icon: <FacebookOutlined />,
                            label: 'Facebook',
                        },
                        {
                            key: '/instagram',
                            icon: <InstagramOutlined />,
                            label: 'Instagram',
                        },
                    ],
                },
            ],
        },
        {
            key: '/tables',
            icon: <DatabaseOutlined />,
            label: 'Tables',
        },
        {
            key: '/profile',
            icon: <UserOutlined />,
            label: 'Profile',
        },
    ];

    const handleMenuClick = ({key}) => {
        setSelectedKeys([key]);
        navigate(key)
    }

    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className={`menu-bar ${darkTheme ? 'menu-bar-dark' : ''}`}
            items={items}
            selectedKeys={selectedKeys}
            onClick={handleMenuClick}

        />
    );
};

export default MenuList;