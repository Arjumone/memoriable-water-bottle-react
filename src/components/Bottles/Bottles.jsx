import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoreCart, removeFromLS } from "../utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    useEffect(()=>{
        
        if(bottles.length > 0){
            const storeCart = getStoreCart();
            const saveCart = [];
            for(const id of storeCart){
                console.log(id);
                const bottle = bottles.find(bottle=>bottle.id===id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }
        
    },[bottles])

    const handleAddToCart = bottle=>{
        // console.log(bottles);
        const newCart=[...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart =(id)=>{
        const remainingCart= cart.filter(bottle=>bottle.id !== id)
        setCart(remainingCart)
        removeFromLS(id);
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto">
           <h2 className="text-4xl text-center">Bottles:{bottles.length}</h2> 
           <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>           {
            bottles.map(bottle=><Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
           }
        </div>
    );
};

export default Bottles;