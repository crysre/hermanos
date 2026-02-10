import { AtSign, Clock, MapPin, Phone } from "lucide-react"

export const Contactus = ()=>{
    return <div className="w-full h-full flex flex-col">
        <div className="flex bg-neutral-950 text-white p-24 text-2xl justify-center w-full font-bold"><p className=" ">Contact Us</p></div>
        <div className="flex justify-between rounded-2xl items-center bg-gray-50 p-24 gap-16">
            <div className="text-4xl w-[33%] font-bold" ><p>Hermanos</p></div>
            <div className="flex w-[33%] flex-col text-2xl gap-4 justify-center items-center">
                <ContactCard icon={<Clock/>} text={"Mon-Sat 9:00 AM - 10:00 PM"} />
                <ContactCard icon={<MapPin />} text={"4257 Isleta Blvd SW, Albuquerque, NM 87105"} />
                <ContactCard icon={<Phone/>} text={"1800575757"} />
                <ContactCard icon={<AtSign />} text={"Hermanos@gmail.com"} />
            </div>
            <div className="w-[33%]">
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.659276714263!2d-106.6855514!3d35.01523339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220dd72bedf733%3A0xd0672c8833de7ff7!2sTwisters%20Burgers%20and%20Burritos!5e0!3m2!1sen!2sin!4v1770727127455!5m2!1sen!2sin" className="w-full h-80 rounded-2xl border-2 border-neutral-200" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
}

type ContactCardProps = {
    icon: React.ReactNode;
    text: string;
}


const ContactCard = ({icon, text}: ContactCardProps)=>(
    <div className="flex w-full gap-4" >
        {icon}
        <p>{text}</p>

    </div>
)


                // <div className="flex">
                //     <Clock/>
                //     <p></p>
                // </div>
                // <div> <p></p></div>
                // <div><p></p></div>
                // <div className="flex"><p></p></div>