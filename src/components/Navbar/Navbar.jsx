// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, PhoneOutlined, LoginOutlined, UserAddOutlined  } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-10 ${isMobile ? 'bg-gray-400 bg-opacity-50' : 'bg-gray-800 h-13'} text-white`}>
            <div className={`container mx-auto flex items-center justify-between p-4 ${isMobile ? 'bg-gray bg-opacity-30' : ''}`}>
              
                {/* Navbar for pc*/}
                {!isMobile && (
                    <div className="hidden md:flex space-x-4">
                        <Menu theme='black' mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '40px', border: 'none' }}>
                            <Menu.Item key="1" icon={<HomeOutlined />}style={{ backgroundColor: 'transparent' }} className="text-orange-500">
                                <a className='hover:text-white' href="#home">Home</a>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}style={{ backgroundColor: 'transparent' }} className="text-orange-500">
                                <a className='hover:text-white' href="#hotel">Hotel</a>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UserOutlined />}style={{ backgroundColor: 'transparent' }} className="text-orange-500 ">
                                <a className='hover:text-white' href="#room">Room</a>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<PhoneOutlined />} style={{ backgroundColor: 'transparent' }}className="text-orange-500">
                                <a className='hover:text-white' href="#contact">Contact Us</a>
                            </Menu.Item>
                        </Menu>
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="w-15 h-12" /> 
                        </div>
                        <div className="flex items-center space-x-4 justify-end">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-white">Register</button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-white">Login</button>
                        </div>
                    </div>
                )}

                {/* navbar for tablette and phone */}
                {isMobile && (
                    <div className="md:hidden flex flex-col items-center space-y-4">
                        <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ width: 120, border: 'none' }}>
                            <Menu.Item key="1" icon={<HomeOutlined />} style={{ backgroundColor: 'transparent' }} className="text-orange-500">
                                <a className='hover:text-white' href="#home">Home</a>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />} style={{ backgroundColor: 'transparent' }} className="text-orange-500">
                                <a className='hover:text-white' href="#hotel">Hotel</a>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UserOutlined />} style={{ backgroundColor: 'transparent' }} className="text-orange-500">
                                <a className='hover:text-white' href="#room">Room</a>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<PhoneOutlined />} style={{ backgroundColor: 'transparent' }}className="text-orange-500">
                                <a className='hover:text-white' href="#contact">Contact Us</a>
                            </Menu.Item>
                        </Menu>
                        <div className="flex flex-row justify-center space-x-4 mt-4">
                            <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-transparent">
                                <UserAddOutlined />
                            </button>
                            <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-transparent">
                                <LoginOutlined />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
