
import { Alert } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const Promotion = () => {
    return (
        <div className="max-w-4xl mx-auto mt-4">
            <Alert
                message="Special offer! Book now and save 20% on your stay."
                type="info"
                showIcon
                icon={<InfoCircleOutlined />}
                banner
                closable
                className="bg-gradient-to-r from-yellow-300 via-orange-500 to-black-800 text-black text-lg font-bold px-6 py-2 rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Promotion;
