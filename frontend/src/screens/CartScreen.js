import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartScreen.css';

// Components
import Cartitem from '../components/Cartitem';
import { addCart, removeFromCart } from '../redux/actions/cartActions';

function CartScreen() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addCart(id, qty));
    }

    const removeItemHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getTotalItems = () => {
        return cartItems.reduce((qty, item) => (qty + Number(item.qty)), 0)
    }

    const getTotalCost = () => {
        return cartItems.reduce((price, item) => (price + (Number(item.qty) * item.price)), 0)
    }

    const formatNum = (num) => {
        const numStr = String(num)

        const setCommas = (n) => {
            if (n.length < 4) {return n}
            return setCommas(n.slice(0,-3)) + ',' + n.slice(-3) 
        }
        return setCommas(numStr.split(".")[0]) + "." + numStr.split(".")[1]
    }

    return (

        <div className="cartscreen">
            {cartItems.length === 0 ? (
                <div>
                    Your cart is empty <Link to="/">Go Back</Link>
                </div>
            )
            : (
                <>
                <div className="cartscreen_left">
                    <h2>Shopping Cart</h2>                
                    {cartItems.map(item => 
                        < Cartitem
                            key={item.product}
                            item={item}
                            qtyChangeHandler={qtyChangeHandler}
                            removeItemHandler={removeItemHandler}
                        />)}
                    
                </div>
                <div className="cartscreen_right">
                    <div className="cartscreen_info">
                        <p>
                            Subtotal ({getTotalItems()}) items
                        </p>
                        <p>${formatNum(getTotalCost().toFixed(2))}</p>
                    </div>
                    <div>
                        <button type="button">Proceed to Checkout</button>
                    </div>
                    
                </div>
                </>
            )}

        </div>
    )
}

export default CartScreen
