import heroImage from "../assets/250px-Twisters,_Isleta_Blvd,_Sou.jpg"
import { easeInOut, motion } from "motion/react"
export const Hero = ()=>{
    return <div className="relative  rounded-b-2xl w-full h-200 overflow-hidden" >
        <img className=" inset-0 z-0  w-full" src={heroImage} alt="" />
        <div
       
        className="absolute flex flex-col gap-5 top-40 z-10 text-white px-24">
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay:0.8,ease:easeInOut }}
            
            className=" w-4xl text-9xl" >Welcome to Hermanos
            </motion.p>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:1, ease:easeInOut }}
        className="w-full text-neutral-100 text-4xl" >Enjoy your quality time</motion.p>
        <div>
            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:1.1, ease:easeInOut }}
            className="bg-neutral-950 rounded-lg p-4 cursor-pointer text-white" >Book Now</motion.button>

        </div>        
        </div>
    </div>
}









