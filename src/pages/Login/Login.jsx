import { Input, Switch, Button, Form } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useSignIn } from "react-auth-kit";
import { useNavigate, Link } from "react-router-dom"; // Step 1: Import Link
import axios from "axios";
import "./Login.css";
import Cookies from "js-cookie";

function Login() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const handlerSubmit = (values) => {
        // Assuming you have an "adminKey" field in the values object
        const { email, password, adminKey } = values;

        // Send the email, password, and adminKey to the server
        axios.post("http://localhost:5000/signin", { email, password, adminKey })
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
                    alert("wrong information");
                }
            })
            .catch(error => alert("failed to login"));
    }

    return (
        <div className="w-full m-0 h-screen d-c-c flex-col bg-p-10">
            <div className="rounded-[5px] bg-white w-[fit-content] text-2xl p-7 box-shadow">
                <h1 className="font-bold p-3 mb-7 text-center">Sign in</h1>
                <Form name="logInformation" onFinish={handlerSubmit}>
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
                    {/* New Form.Item for the Admin Key */}
                    <Form.Item name="adminKey">
                        <Input
                            name="adminKey"
                            size="large"
                            placeholder="Admin Key"
                            type="text"
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
                        <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">Submit</Button>
                    </Form.Item>
                    {/* Step 2: Add the link */}
                    <div className="text-center">
                        Si tu n'as pas de compte, <Link to="/signup"><b>crée-en un</b></Link>.
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
