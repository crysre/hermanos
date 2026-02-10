import { useState } from "react";
import {motion } from "motion/react";

const navItems = [
            {
                title:"home",
                href:"/",
            },
            {
                title:"about",
                href:"/about",
            },
            {
                title:"services",
                href:"/services",
            },
            {
                title:"contact",
                href:"/contact",
            }
        ]

export const Nav = ()=>{
    const [hover, setHover] = useState<number|null>(null);

    return <motion.nav
    initial={{y:-100}}
    animate={{y:0}}
    transition={{delay:0.05}}
    
    className=" flex sticky z-15 w-full top-0 backdrop-blur-2xl shadow-2xl justify-between items-center px-8 py-4" >
        <motion.div
        initial={{y:-100}}
        animate={{y:0}}
        transition={{delay:0.05}}
        
        className="cursor-pointer font-bold tracking-tight text-neutral-300 hover:text-white text-xl"
        >
            Hermanos
        </motion.div>

        <div className="  w-full flex max-w-xl   rounded-4xl text-center text-xs text-neutral-300" >
            {navItems.map((items, index)=>(
            <motion.div
            initial={{y:-100}}
            animate={{y:0}}
            transition={{delay:0.05}}
            whileHover={{scale:1.1}}
            onMouseEnter={()=>{setHover(index)}}
            onMouseLeave={()=>{setHover(null)}}
            

            className="group relative  cursor-pointer w-full py-4"
            >
                <span className="relative group-hover:text-white z-25" >{items.title}</span>

                {hover == index && <motion.div layoutId="hover" className="absolute inset-0 rounded-xl w-full bg-black z-20" ></motion.div>}
            </motion.div>
        ))}
        </div>
        <div
        className="cursor-pointer text-neutral-200"
        >
        <motion.button
        whileHover={{
            scaleX:1.1
        }}
        className=" text-xl rounded-md p-2 cursor-pointer hover:text-white" >Book Now</motion.button>
        </div>
    </motion.nav>
}


