import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Select, message } from "antd";
import Information from "./Information";
import { useContext, useRef } from "react";
import { UserInfo } from "../../../Context/UserInformation";
import axios from "axios";
import Cookies from "js-cookie";

function InformationList() {
    const user = useContext(UserInfo);
    const form = useRef(null);

    const fieldList = [
        { name: ["first_name", "last_name"], defaultValue: [user.user.first_name, user.user.last_name || ""] },
        { name: ["email", "phone_number"], type: ["email", "text"], defaultValue: [user.user.email, user.user.phone_number] }
    ]
    const gender = [
        { value: "", label: "Ne Pas Spécifier" },
        { value: "M", label: "Homme" },
        { value: "F", label: "Femme" }
    ]

    const handlerSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(form.current);

        axios.put(`http://localhost:5000/upload/user/${user.user.id_user}`,data,{
            headers: { Authorization: Cookies.get("token") }
        })
            .then(response => {
                message.success("Modification éffectuer", 3);
                user.toggleUser(response.data);
            })
            .catch(error =>{
                message.error("Erreur de modification", 3);
            });
    }

    return (
        <form ref={form} className="w-full" onSubmit={handlerSubmit}>
            {fieldList.map((el, index) => <Information key={index} {...el} />)}
            <div className="flex w-full justify-between mb-3">
                <Select defaultValue={user.user.gender} className="w-[48%] m-0" name="gender" options={gender} placeholder="Sexe" />
                <Input name="password" className="w-[48%] m-0" defaultValue={user.user.password} type="password" placeholder="Password" />
            </div>
            <div className="flex items-center w-full justify-between">
                <Input type="file" id="profil_url_img" name="profil_url_img" accept="image/*" className="w-[48%] hidden m-0" />
                <label className="m-0 px-5 py-1 text-[15px] border rounded bg-green-500 cursor-pointer hover:bg-green-600 text-white" htmlFor="profil_url_img">
                    Changer la photo
                </label>
                <Button type="primary" htmlType="submit" size="middle" className="px-5 h-auto text-[16px] bg-blue-500">
                    Sauvegarder
                </Button>
            </div>
        </form >
    );
}

export default InformationList;