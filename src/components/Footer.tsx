import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterList = [
    {
        category: "PRIVACY",
        links: ["Terms of use", "Privacy policy", "Cookies"]
    },
    {
        category: "SERVICES",
        links: ["Shop", "Order online", "Menu"]
    },
    {
        category: "ABOUT US",
        links: ["Find a location", "Our story", "Careers"]
    },
    {
        category: "INFORMATION",
        links: ["Plans & pricing", "Get your franchise", "FAQ"]
    }
]

export const Footer = ()=>{

    const date = new Date();
    const year = date.getFullYear()

    return <footer className=" text-white py-16 px-8 bottom-0 w-full bg-neutral-900">
        <div className="flex justify-between">
            <div className=" w-full">
            Hermanos
        </div>
        {FooterList.map(({category, links})=>(
            <div className="w-full  flex flex-col gap-2 ">
                <p className=" font-bold" >{category}</p>
                {links.map((item)=>(
                    <p className=" text-neutral-500 hover:text-white cursor-pointer text-sm">{item}</p>
                ))}
            </div>
        ))}
        </div>
        <div className="border-b border-neutral-400 mt-16"></div>

        <div className="flex text-neutral-500 justify-between mt-16  h-8">
            <p className="text-sm ">@ {year} Hermanos. All rights reserved.</p>
            <div className="flex justify-between w-40">
                <FaInstagram className="cursor-pointer hover:text-white" />
                <FaTwitter className="cursor-pointer hover:text-white" />
                <FaFacebook className="cursor-pointer hover:text-white" />
                <FaLinkedin className="cursor-pointer hover:text-white" />
            </div>
        </div>
    </footer>
}


