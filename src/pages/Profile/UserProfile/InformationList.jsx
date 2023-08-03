import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload, message } from "antd";
import Information from "./Information";

const props = {
    name: 'file',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (icountList(info.file.status === 'error')) {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


function InformationList() {

    const fieldList= [
        { name: ["first_name", "last_name"] },
        { name: ["email", "phone_number"], type: ["email", "text"] }
    ]

    const gender = [
        { value: "", label: "Ne Pas Spécifier" },
        { value: "M", label: "Homme" },
        { value: "F", label: "Femme" }
    ]

    return (
        <Form className="w-full">
            {fieldList.map((el, index) => <Information key={index} {...el} />)}
            <div className="flex w-full justify-between mb-3">
                <Form.Item name="gender" className="w-[48%] mb-2">
                    <Select options={gender} placeholder="Sexe" />
                </Form.Item>
                <Form.Item name="password" className="w-[48%] mb-2">
                    <Input type="password" placeholder="Password" />
                </Form.Item>
            </div>
            <div className="flex w-full justify-between">
                <Form.Item name="profile_url_img" valuePropName="fileList" className="w-[48%] mb-2">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Changer le profile</Button>
                    </Upload>
                </Form.Item>
                <Form.Item className="m-0">
                    <Button type="primary" htmlType="submit" size="large" className="px-5 h-auto text-[16px] bg-blue-500">
                        Sauvegarder
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}

export default InformationList;