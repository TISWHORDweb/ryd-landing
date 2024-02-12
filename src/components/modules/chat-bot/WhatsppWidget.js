import {  FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function WhatsappChatWidget() {
    const widgetStyle = {
        position: "fixed",
        right: "10px",
        bottom: "10px",
        background: "#0088cc",
        color: "white",
        height: "70px",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        fontSize: "30px",
        zIndex: "99999999999",
        boxShadow: "3px 5px 15px rgba(99, 99, 99, 0.2)",
        cursor: "pointer"
    }

    return (
        <a href="https://t.me/+kRUSHEc8S_thYzJk" target="_blank" style={widgetStyle}>
            <FaTelegramPlane />
        </a>
    )
}

export default WhatsappChatWidget;