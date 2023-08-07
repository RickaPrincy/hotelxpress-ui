import React, { useState } from 'react';
import { LockOutlined, GitlabOutlined  } from '@ant-design/icons';
import { Form, Input, Radio, DatePicker} from 'antd';


const ReservationPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const onFinish = (values) => {
        console.log('Reservation details:', values);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold text-center font-serif mt-3 mb-1">Réservez votre séjour</h1>
            <div className="flex items-center justify-center mb-4">
                <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]" />
                <GitlabOutlined className="text-2xl text-gray-500" />
                <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Ajouter vos coordonnées</h2>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item
                                label="Nom"
                                name="lastName"
                                rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
                            >
                                <Input style={{ color: 'black', border: '1px solid black' }}/>
                            </Form.Item>
                            <Form.Item
                                label="Prénom"
                                name="firstName"
                                rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
                            >
                                <Input style={{ color: 'black', border: '1px solid black' }}/>
                            </Form.Item>
                            <Form.Item
                                label="Adresse"
                                name="address"
                                rules={[{ required: true, message: 'Veuillez entrer votre adresse' }]}
                            >
                                <Input style={{ color: 'black', border: '1px solid black' }}/>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Méthode de paiement</h2>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item
                                name="paymentMethod"
                                rules={[{ required: true, message: 'Veuillez sélectionner une méthode de paiement' }]}
                            >
                                <Radio.Group onChange={handlePaymentMethodChange}>
                                    <Radio value="carte">Par carte de crédit</Radio>
                                    <Radio value="paypal">Paypal</Radio>
                                    <Radio value="cash">En espèces</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {paymentMethod === 'carte' && (
                                <div>
                                    <Form.Item
                                        label="Numéro de carte"
                                        name="cardNumber"
                                        rules={[{ required: true, message: 'Veuillez entrer le numéro de carte' }]}
                                    >
                                        <Input style={{ color: 'black', border: '1px solid black' }}/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Date d'expiration"
                                        name="expirationDate"
                                        rules={[{ required: true, message: 'Veuillez sélectionner la date d\'expiration' }]}
                                    >
                                        <DatePicker picker="month" format="MM/YYYY"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Code de sécurité"
                                        name="securityCode"
                                        rules={[{ required: true, message: 'Veuillez entrer le code de sécurité' }]}
                                    >
                                        <Input style={{ color: 'black', border: '1px solid black' }}/>
                                    </Form.Item>
                                </div>
                            )}
                            {paymentMethod === 'paypal' && (
                                <div>
                                    <Form.Item
                                        label="Adresse e-mail Paypal"
                                        name="paypalEmail"
                                        rules={[{ required: true, message: 'Veuillez entrer l\'adresse e-mail Paypal' }]}
                                    >
                                        <Input style={{ color: 'black', border: '1px solid black' }}/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Password Paypal"
                                        name="password"
                                        rules={[
                                            { required: true, message: 'Veuillez saisir votre mot de passe' },
                                        ]}
                                    >
                                        <Input.Password prefix={<LockOutlined />}  style={{ color: 'black', border: '1px solid black' }} />
                                    </Form.Item>
                                </div>
                            )}
                            {paymentMethod === 'cash' && (
                                <div>
                                    <p>Le paiement en espèces se fera à l arrivée.</p>
                                </div>
                            )}
                            <Form.Item>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-black">
                                    <p className='text-semibold text-xl'>Reserver</p>
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;
