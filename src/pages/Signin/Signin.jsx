import { Input, Switch, Button, Form, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useSignIn } from "react-auth-kit";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Signin() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const handlerSubmit = (values)=> {

        axios.post("http://localhost:5000/signin", values)
            .then(response => {
                if (signIn({
                    token: response.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                })) {
                    Cookies.set("token", response.data.token);
                    navigate("/");
                }
                else {
                    message.error("Erreur de connexion");
                }
            })
            .catch(error => message.error("Erreur d'authentification"));
    }

    return (
        <div className="w-full m-0 h-screen bg-[url('carrousel3.jpg')]">
            <div className="w-full m-0 p-0 bg-hidden d-c-c flex-col h-full">
                <div className="rounded-[5px] bg-white w-[fit-content] text-2xl p-7 box-shadow">
                    <h1 className="font-bold p-3 mb-7 text-center">Se connecter</h1>
                    <Form onFinish={handlerSubmit}>
                        <Form.Item name="email">
                            <Input
                                name="email"
                                required={true}
                                size="large"
                                placeholder="Email"
                                type="email"
                                prefix={<MailOutlined className="me-2" />}
                            />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                name="password"
                                required={true}
                                size="large"
                                placeholder="Password"
                                type="password"
                                prefix={<LockOutlined className="me-2" />}
                            />
                        </Form.Item>
                        <div className="flex items-center my-3">
                            <Form.Item name="remember" className="my-0 me-3" valuePropName="checked">
                                <Switch id="remember" className="bg-slate-500 " />
                            </Form.Item>
                            <label htmlFor="remember" className="cursor-pointer">Souvenez de Moi</label>
                        </div>
                        <Form.Item className="mx-auto w-[fit-content] mt-3">
                            <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">Connecter</Button>
                        </Form.Item>
                        <p>
                            Si tu n'as pas de compte,
                            <Link to="/signup" className="text-green-800 font-bold ml-2">Crée-en un</Link>.
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Signin;
