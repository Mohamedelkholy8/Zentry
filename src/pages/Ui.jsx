

function Ui() {
    
    return (
            <ul  className="flex gap-3 ">
                <li className="flex items-center gap-1 duration-300 p-2 rounded-3xl hover:bg-[#DFDFF2] hover:text-black ">
                    <span>ZTERMINAL</span>
                    <svg width="10" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,55 95,15 55,85 45,55" fill="black" />
                    </svg>
                </li>
                <li className="flex items-center gap-1 duration-300 p-2 rounded-3xl hover:bg-[#DFDFF2] hover:text-black">
                    <span>ABOUT</span>
                    <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,55 95,15 55,85 45,55" fill="black" />
                    </svg>
                </li>
                <li className="flex items-center gap-1  duration-300 p-2 rounded-3xl hover:bg-[#DFDFF2] hover:text-black">
                    <span>CONTACT</span>
                    <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,55 95,15 55,85 45,55" fill="black" />
                    </svg>
                </li>
            </ul>
    )
}

export default Ui