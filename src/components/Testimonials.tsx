import { Star } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
}

const TestimonialsList: Testimonial[] = [
    {
        id: 1,
        name: "John Smith",
        image:"https://i.guim.co.uk/img/media/0a282d9a2211bca156a543750eb479736357c77b/370_242_600_360/master/600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4b6adf12d6ebbe92d045eefe772c28ed",
        text: "Amazing food and incredible service! We came back the next week."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        image:"https://metro.co.uk/wp-content/uploads/2013/08/750x100010.jpg?quality=90&strip=all&w=646",
        text: "Best restaurant in town. The ambiance is perfect for date night."
    },
    {
        id: 3,
        name: "Mike Chen",
        image:"https://www.estrelando.com.br/uploads/2016/04/04/aaron-paul-1459787802.jpg",
        text: "Outstanding quality ingredients and attention to flavor detail."
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz3ItIZEHIAQ_0QVxXIvUImhNoQJuji-rQw&s",
        text: "Professional staff that delivers exceptional dining experience."
    },
    {
        id: 5,
        name: "David Wilson",
        image:"https://metro.co.uk/wp-content/uploads/2013/08/750x100010.jpg?quality=90&strip=all&w=646",
        text: "Exceptional value for money. Worth every penny."
    },
    {
        id: 6,
        name: "Lisa Anderson",
        image:"https://i.ytimg.com/vi/JXMIpHDgb2A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoQ1wb5U3FTMMqlBdUnpFbrAH-1w",
        text: "Best meal we've had all year. Highly recommend!"
    },
    {
        id: 7,
        name: "James Martinez",
        image:"https://upload.wikimedia.org/wikipedia/en/d/db/Hank_Schrader_S5B.png",
        text: "Seamless dining experience from reservation to checkout."
    },
    {
        id: 8,
        name: "Jennifer Taylor",
        image:"https://cdn.britannica.com/64/258264-050-AACF7B53/Max-Verstappen-Grand-Prix-of-Emilia-Romagna.jpg",
        text: "Reliable quality, fresh ingredients, and consistent excellence."
    }
];


export const Testimonials = ()=>{
    return <div className="flex flex-col rounded-2xl" >
    <div className="bg-neutral-950 text-white p-24 flex justify-center items-center text-2xl font-bold">
            <p>Our Happy Clients</p>
        </div>
    <div className="flex flex-col rounded-2xl bg-white">
        <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] rounded-2xl py-20 overflow-hidden backdrop-blur-2xl bg-gray-50">
    <div className="animate-infinite-scroll  flex gap-8 items-center h-120 bg-neutral-50">
        {TestimonialsList.map(({id, name, text, image})=>(
            <TestimonialCard key={id} name={name} text={text} image={image} />
        ))}


        {TestimonialsList.map(({id, name, text, image})=>(
            <TestimonialCard key={"dup-" + id} name={name} text={text} image={image} />
        ))}
    </div>
    </div>
    </div>
    </div>
}

type TestimonialProps = {
    name: string;
    text: string;
    image:string;
}

const TestimonialCard = ({name, text, image}: TestimonialProps)=>{
    return <div className=" rounded-2xl text-xl backdrop-blur-2xl flex flex-col gap-4 shadow-2xl p-8 text-black w-md h-80 shrink-0" >

        <div > <img src={image} alt="Sam Williams" className="w-12 h-12 mb-2 rounded-full"/><p className=" font-bold">{name}</p></div>
        <p>{text}</p>
        <div className="flex gap-1">
             {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
        </div>

    </div>
}
