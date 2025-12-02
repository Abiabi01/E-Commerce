import React, { useEffect,useState } from "react";
import axios from "axios";
import bg from '../assets/bg.png'
import { Link } from "react-router-dom";
const HeroBanner = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://dummyjson.com/products")
            const data= response.data.products
            setData(data)
            // console.log(data)
            
        }
        fetchData()
    })
    
    return(
        <div className="flex items-center justify-center flex-col mt-4">
            <p className="text-2xl">Lets' Shop to the </p>
            <p className="m-2 w-64 text-3xl rounded text-center bg-gradient-to-r from-pink-300 to-indigo-300 font-sans font-normal">Best Products!!!</p>
           {data.filter((item) => item.id === 3).map((item) => (
           <div className="flex flex-row w-full gap-0" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="flex items-start justify-start">
                <img key={item.id} src={item.images[0]} alt="hero-img" className="w-md h-md"/>   
            </div>
             <div className="flex items-center justify-center flex-col w-96 h-64 mt-28 rounded-xl">
                <p className="text-3xl font-semibold">{item.title}</p>
                <p className="p-2 pl-4 items-center justify-center font-semibold text-black">{item.description}</p>
                
            </div>
           </div>
           ))}
        </div>
    )
}
export default HeroBanner   