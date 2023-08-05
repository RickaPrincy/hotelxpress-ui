import { Link, useLocation } from "react-router-dom";

function LeftLink({ children, text, to }) {
    const location = useLocation();

    return (
        <li
            className={ location.pathname === to ? "font-bold" : "text-white" }>
            <Link to={to} className="flex gap-5 items-center hover:bg-orange-900 p-2 rounded-md">
                {children}
                <span className="text-[16px]">{text}</span>
            </Link>
        </li>
    );
}

export default LeftLink;