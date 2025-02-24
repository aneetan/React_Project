import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined, ContactsOutlined, CoffeeOutlined, CopyOutlined,
    PieChartOutlined, FullscreenOutlined, CloseCircleOutlined,
    DingdingOutlined, AppleOutlined
} from '@ant-design/icons';
import '../assets/css/menuList.css';

const MenuList = ({ darkTheme }) => {
    const [selectedKeys, setSelectedKeys] = useState(['home'])


    const items = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: 'contact',
            icon: <ContactsOutlined />,
            label: 'Contact',
        },
        {
            key: 'submenu',
            icon: <FullscreenOutlined />,
            label: 'Task',
            children: [
                {
                    key: 'task1',
                    icon: <CloseCircleOutlined />,
                    label: 'Task1',
                },
                {
                    key: 'subtask',
                    icon: <HomeOutlined />,
                    label: 'Subtask',
                    children: [
                        {
                            key: 'subtask1',
                            icon: <AppleOutlined />,
                            label: 'Subtask1',
                        },
                        {
                            key: 'subtask2',
                            icon: <DingdingOutlined />,
                            label: 'Subtask2',
                        },
                    ],
                },
            ],
        },
        {
            key: 'features',
            icon: <CoffeeOutlined />,
            label: 'Features',
        },
        {
            key: 'about',
            icon: <CopyOutlined />,
            label: 'About',
        },
        {
            key: 'settings',
            icon: <PieChartOutlined />,
            label: 'Settings',
        },
    ];

    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className={`menu-bar ${darkTheme ? 'menu-bar-dark' : ''}`}
            items={items}
            selectedKeys={selectedKeys}
            onSelect={({key}) => setSelectedKeys([key])}
        />
    );
};

export default MenuList;