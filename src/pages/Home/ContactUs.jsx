import { Form, Input, Row, Col, message } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GitlabOutlined} from '@ant-design/icons';

function ContactUs() {
    const onFinish = (values) => {
        console.log('Form submitted:', values);
    };

    const onFinishFailed = (errorInfo) => {
        message.error("Une c'est produite"); 
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center font-serif mt-3 mb-1">Contacter nous</h1>
            <div className="flex items-center justify-center mb-4">
                <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]" />
                <GitlabOutlined className="text-2xl text-gray-500" />
                <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]" />
            </div>
            <Row gutter={[16, 16]} className='bg-gray-200 p-4'>
                <Col xs={24} md={12} lg={8} style={{ backgroundImage: 'url(https://us.123rf.com/450wm/andreyuu/andreyuu1307/andreyuu130700092/21002573-service-de-cloche-l-h-tel.jpg?ver=6)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="p-6 m-3 rounded-lg" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                        <h2 className="text-xl text-white font-semibold mb-4">Contact Information</h2>
                        <div className="flex items-center mb-3">
                            <EnvironmentOutlined className="text-orange-400 mr-5 text-2xl" />
                            <p className='text-white'>Haute ecole Informatique, Ivandry</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <PhoneOutlined className="text-orange-400 mr-5 text-2xl" />
                            <p className='text-white'>+261 34 334 34</p>
                        </div>
                        <div className="flex items-center">
                            <MailOutlined className="text-orange-400 mr-5 text-2xl"/>
                            <p className='text-white'>hotelxpress@gmail.com</p>
                        </div>
                    </div>   
                </Col>
                <Col xs={24} md={12} lg={16}>
                    <div className="bg-white p-6 shadow-2xl rounded-lg">
                        <h2 className="text-xl font-semibold mb-6 ">Get in Touch</h2>
                        <Form
                            name="contact-form"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                        >
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your first name',
                                            },
                                        ]}
                                    >
                                        <Input style={{ color: 'black', border: '1px solid black' }}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your last name',
                                            },
                                        ]}
                                    >
                                        <Input style={{ color: 'black', border: '1px solid black' }}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please enter a valid email address',
                                    },
                                ]}
                            >
                                <Input style={{ color: 'black', border: '1px solid black' }}/>
                            </Form.Item>
                            <Form.Item
                                label="Live a message"
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your message',
                                    },
                                ]}
                            >
                                <Input.TextArea style={{ color: 'black', border: '1px solid black' }} rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-black">
                                    <p className='text-semibold text-xl'>Send</p>
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ContactUs;
