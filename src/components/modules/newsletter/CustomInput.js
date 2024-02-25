import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CustomInput = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");

    const handleSubscribe = async(e) => {
        e.preventDefault();
        if(!email) return;
    
        onValidated({
            MERGE0: email,
        })

      }

      useEffect(() => {
        if(!status) return;

        if(status === "success"){
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: `${email} has been subscribed to Ryd learning!`,
                showCancelButton: true,
                confirmButtonText: 'See Other Activites &#8599;', 
                confirmButtonAriaLabel: "See Other Activities",
                cancelButtonText: "Resume Scrolling",
                confirmButtonColor: "rgb(0, 136, 204)",
                cancelButtonColor: "#ababab",
                customClass: {
                    confirmButton: 'confirm-btn'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to another page
                    window.open('https://www.linkedin.com/company/ryd-learning/', '_blank')
                    setEmail("")
                }
            });
        }

        if(status === "error"){
            Swal.fire({
                icon: "error",
                title: "failed!",
                text: `Unable to subscribe ${email}, pls try again`,
                showCancelButton: true,
                cancelButtonText: "Close",
            })
        }

      }, [status])

    return (
        <>
            <form className="form form-subscribe" onSubmit={handleSubscribe}>
                <div className="input-group">
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    />
                    <span className="input-group-btn">
                    <button className="btn btn-success btn-lg" type="submit">
                    { status === "sending" ? <div>Sending...</div> : <div>Subscribe</div>}
                    </button>
                    </span>
                </div>
            </form>
            
        </>
    )
}

export default CustomInput;