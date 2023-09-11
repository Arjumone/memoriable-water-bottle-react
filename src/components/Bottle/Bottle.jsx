

const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle);
    const{img,name,price}=bottle
    return (
        <div className="border-2 bg-orange-200 p-10">
            <img className="w-32 h-32" src={img} alt="" />
            <h2 className="text-5xl">{name}</h2>
            <p className="text-3xl">${price}</p>
            <button onClick={()=>handleAddToCart(bottle)} className="btn bg-slate-200">Purchase</button>
        </div>
    );
};

export default Bottle;