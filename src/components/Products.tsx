import { motion } from "motion/react";
import espresso from "../assets/Espresso.jpg"
import Cappuccino from "../assets/Cappuccino.jpeg"
import Latte from "../assets/Latte.jpeg"
import Americano from "../assets/Americano.jpeg"
import Croissant from "../assets/Croissant.jpg"
import Bagel from "../assets/Bagel.jpeg"
import Caesar from "../assets/Caesar.jpeg"
import Panini from "../assets/Panini.jpeg"

const cafeFoods = [
    { id: 1, name: 'Espresso', price: 3.50, link: espresso },
    { id: 2, name: 'Cappuccino', price: 4.75, link: Cappuccino },
    { id: 3, name: 'Latte', price: 5.00, link: Latte },
    { id: 4, name: 'Americano', price: 4.00, link: Americano },
    { id: 5, name: 'Croissant', price: 4.25, link: Croissant },
    { id: 6, name: 'Bagel with Cream Cheese', price: 5.50, link: Bagel },
    { id: 7, name: 'Caesar Salad', price: 10.99, link: Caesar },
    { id: 8, name: 'Panini Sandwich', price: 9.75, link: Panini },
];

export const Products = ()=>{
    return <div
    className=" w-full h-full flex flex-col " >
        <div className="flex bg-neutral-900 text-white p-24 text-2xl justify-center w-full font-bold"><p className=" ">Our Popular Menu</p></div>
        
        <div className="w-full h-full rounded-2xl gap-8 flex  items-center justify-center px-12 py-40 bg-gray-50 flex-wrap" >

        {cafeFoods.map(({id, name, price, link})=>(
                            <FoodComponent key={id} id={id} name={name} price={price} link={link}/>
        ))}
        </div>
    </div>
}


type FoodProps = {
    id?: number;
    name: string;
    price: number;
    link: string;
}

const FoodComponent = ({name, price, link}: FoodProps)=>{
    return <motion.div
    whileHover={{
        scale:1.05
    }}
  
    className="flexflex-col relative shadow-2xl text-neutral-900 items-center overflow-hidden rounded-2xl w-84 h-72 " >
        <div className="w-92 overflow-hidden rounded-t-lg"><img src={link} alt="" /></div>
        <div className=" w-full flex justify-between px-4 py-2 absolute bottom-0 backdrop-blur-2xl">
            <div>
            <p>{name}</p>
            <p>${price}</p>
            </div>

            <div className="cursor-pointer py-2">
                <button className="flex text-xs  gap-2 bg-neutral-950 rounded-lg p-1 cursor-pointer text-white" ><Cart/></button>
            </div>
        </div>        
    </motion.div>
}

const Cart = ()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

}