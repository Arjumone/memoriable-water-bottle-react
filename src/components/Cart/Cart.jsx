
import PropTypes from 'prop-types'
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Cart{cart.length}</h2>
            <div className="w-32 flex">
                {
                    cart.map(bottle=><div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={()=>handleRemoveFromCart(bottle.id)} className='btn bg-slate-700'>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}
export default Cart;