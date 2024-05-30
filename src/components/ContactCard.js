import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLinkedin } from "react-icons/ci";

function ContactCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-4 z-10 flex flex-col space-y-4 absolute bottom-20 right-20">
            <h1 className="text-text border-b-2 border-text text-center">Contactez moi :</h1>
            <div className="flex flex-row items-center space-x-4">
            <CiMail className="text-5xl text-text" />
            <h3 className="">michelrecchia1@gmail.com</h3>
            </div>

            <div className="flex flex-row items-center space-x-4">
            <IoCallOutline className="text-5xl text-text" />
            <h3 className="">06 71 33 28 93</h3>
            </div>

            <div className="flex flex-row items-center space-x-4">
            <CiLinkedin className="text-5xl text-text" />
            <a href="https://www.linkedin.com/in/michel-recchia-2601a5255/">Michel Recchia</a>
            </div>
        </div>
    );
}
export default ContactCard;