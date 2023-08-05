import React, { useContext, useEffect } from 'react';
import { HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserInfo } from '../../Context/UserInformation';

function Navbar() {
    const isAuthentificate = useIsAuthenticated();
    const user = useContext(UserInfo);

    const navLinks = [
        { key: 1, icon: <HomeOutlined />, label: <Link to={"/"}>Home</Link> },
        { key: 2, icon: <UserOutlined />, label: <Link to={"/Hotel"}>Hotel</Link> },
        { key: 3, icon: <UserOutlined />, label: <Link to={"/Room"}>Room</Link> },
        { key: 4, icon: <PhoneOutlined />, label: <Link to={"/contact"}>Contact</Link> },
    ]

    useEffect(() => {
        if (isAuthentificate() && !user.user) {
            axios.get(
                "http://localhost:5000/find/user",
                {
                    headers: { Authorization: Cookies.get("token") }
                }
            )
                .then(response => user.toggleUser(response.data))
                .catch(error => console.log(error))
        }
    }, []);

    return (
        <nav className="fixed w-full z-[999] top-0 flex items-center justify-between left-0 bg-gray-800 p-3">
            <Link to={"/"}>
                <img src="logo.png" alt="HotelXpress" className="w-15 h-12" />
            </Link>
            <Menu
                theme="black"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '40px', border: 'none', color: "orangered" }}
                items={navLinks}
            />
            <div className="flex items-center space-x-4 justify-end">
                {
                    isAuthentificate() ?
                        <div className="d-c-c cursor-pointer p-1 bg-orange-800 bg-overflow-hidden rounded-[50%]">
                            <Link to={"/profile"}>
                                <img src={user.user?.profil_url_img} className="rounded-[50%] w-[40px] h-[40px]" alt="Your profile" />
                            </Link>
                        </div>
                        :
                        <>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-white">
                                <Link to={"/signup"}>S'inscrire</Link>
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-white">
                                <Link to={"/signin"}>Se Connecter</Link>
                            </button>
                        </>
                }
            </div>
        </nav>
    );
};
export default Navbar;
