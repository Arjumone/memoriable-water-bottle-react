import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    const handleAddToCart = bottle=>{
        // console.log(bottles);
        const newCart=[...cart,bottle]
        setCart(newCart)

    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto">
           <h2>Bottles:{bottles.length}</h2> 
           <h2 className="text-3xl">Cart:{cart.length}</h2>
           {
            bottles.map(bottle=><Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
           }
        </div>
    );
};

export default Bottles;