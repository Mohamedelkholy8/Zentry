function Footer() {
    return (
        <div className="w-full h-[30vh]  xl:h-[50vh] bg-gradient-to-b from-[#5542FF] to-[#B18DF2]">
            <div className="w-full p-10 xl:p-20 flex justify-between text-[12px] " >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>zTerminal</li>
                    <li>zData</li>
                    <li>zAI</li>
                    <li>zigma</li>
                </ul>
                <ul>
                    <li>Discord</li>
                    <li>X</li>
                    <li>Youtube</li>
                    <li>Medium</li>
                </ul>
                <ul>
                    <li>Media Kit</li>
                </ul>
            </div>
            <div className="w-full p-10 xl:p-20 flex justify-between items-center text-[8px] ">
                <p>©MOHAMED EMAD {new Date().getFullYear()}. All rights reserved</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}
export default Footer;