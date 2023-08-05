import { Input, Button, Form } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        // Assuming you have an "adminKey" field in the values object
        const { nom, prenom, email, password, adminKey } = values;

        // Send the form data to the server for registration
        axios.post("http://localhost:5000/signup", { nom, prenom, email, password, adminKey })
            .then(response => {
                // Handle successful registration (optional)
                navigate("/login"); // Redirect to the login page after successful registration
            })
            .catch(error => alert("Failed to register. Please try again."));
    }

    return (
        <div className="w-full m-0 h-screen d-c-c flex-col bg-p-10">
            <div className="rounded-[5px] bg-white w-[fit-content] text-2xl p-7 box-shadow">
                <h1 className="font-bold p-3 mb-7 text-center">Sign Up</h1>
                <Form name="signupForm" onFinish={handleSubmit}>
                    <Form.Item name="nom">
                        <Input
                            name="nom"
                            required={true}
                            size="large"
                            placeholder="Nom"
                            prefix={<UserOutlined className="me-2" />}
                        />
                    </Form.Item>
                    <Form.Item name="prenom">
                        <Input
                            name="prenom"
                            required={true}
                            size="large"
                            placeholder="Prénom"
                            prefix={<UserOutlined className="me-2" />}
                        />
                    </Form.Item>
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
                            placeholder="Mot de passe"
                            type="password"
                            prefix={<LockOutlined className="me-2" />}
                        />
                    </Form.Item>
                    <Form.Item name="confirmPassword" dependencies={['password']} hasFeedback>
                        <Input
                            name="confirmPassword"
                            required={true}
                            size="large"
                            placeholder="Confirmer le mot de passe"
                            type="password"
                            prefix={<LockOutlined className="me-2" />}
                        />
                    </Form.Item>
                    <Form.Item name="adminKey">
                        <Input
                            name="adminKey"
                            size="large"
                            placeholder="Admin Key"
                            type="text"
                            prefix={<LockOutlined className="me-2" />}
                        />
                    </Form.Item>
                    <Form.Item className="mx-auto w-[fit-content] mt-3">
                        <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">Register</Button>
                    </Form.Item>
                    <div className="text-center">
                        Déjà un compte ? <Link to="/login"><b>Se connecter</b></Link>.
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
