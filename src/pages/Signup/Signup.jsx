import { Input, Button, Form, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserInfo } from "../../Context/UserInformation";
import { useSignIn } from "react-auth-kit";
import Cookies from "js-cookie";

function Signup() {
    const navigate = useNavigate();
    const user = useContext(UserInfo);
    const signIn = useSignIn();

    const fieldList = [
        {
            name: ["first_name", "last_name"],
            required: [true, false],
            max: [40, 40],
            type: ["text", "text"],
            placeholder: ["Prénom", "Nom"],
            icon: [<UserOutlined className="me-2" />, <UserOutlined className="me-2" />]
        },
        {
            name: ["email", "password"],
            type: ["email", "password"],
            required: [true, true],
            max: [100, 100],
            placeholder: ["Email", "Password"],
            icon: [<MailOutlined className="me-2" />, <LockOutlined className="me-2" />]
        },
        {
            name: ["phone_number", "key"],
            type: ["text", "password"],
            required: [true, false],
            max: [40, 50],
            placeholder: ["Phone Number", "clés (si vous êtes un admin)"],
            icon: [<PhoneOutlined className="me-2" />, <LockOutlined className="me-2" />]
        }
    ]

    const handleSubmit = (values) => {
        axios.post("http://localhost:5000/signup", values)
            .then(response => {
                if (signIn({
                    token: response.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer"
                })) {
                    user.toggleUser(response.data.user);
                    Cookies.set("token", response.data.token);
                } 

                message.success("Création de compte réussi");
                navigate("/");
            })
            .catch(error => message.error("Création de compte échoué"));
    }

    return (
        <div className="w-full m-0 bg-[url('http://localhost:5000/public/carrousel3.jpg')]">
            <div className="bg-hidden w-full h-screen d-c-c flex-col ">
                <div className="rounded-[5px] bg-white w-[fit-content] text-2xl p-7 box-shadow">
                    <h1 className="font-bold p-3 mb-7 text-center">S'incrire</h1>
                    <Form name="signupForm" onFinish={handleSubmit}>
                        {fieldList.map((el, index) => {
                            return <div className="d-c-c gap-3" key={index}>
                                <Form.Item name={el.name[0]}>
                                    <Input
                                        required={el.required[0]}
                                        size="large"
                                        max={el.max[0]}
                                        placeholder={el.placeholder[0]}
                                        type={el.type[0]}
                                        prefix={el.icon[0]}
                                    />
                                </Form.Item>
                                <Form.Item name={el.name[1]}>
                                    <Input
                                        required={el.required[1]}
                                        size="large"
                                        max={el.max[1]}
                                        placeholder={el.placeholder[1]}
                                        prefix={el.icon[1]}
                                        type={el.type[1]}
                                    />
                                </Form.Item>
                            </div>
                        })}
                        <Form.Item className="mx-auto w-[fit-content] mt-3">
                            <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">S'incrire</Button>
                        </Form.Item>
                        <p className="text-center">
                            Déjà un compte ?
                            <Link to="/signin" className="ms-3 text-green-800 font-bold">Se connecter</Link>.
                        </p>
                    </Form>
                </div>
            </div >
        </div >
    );
}

export default Signup;
