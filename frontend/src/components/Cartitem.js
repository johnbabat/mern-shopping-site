import './Cartitem.css';
import { Link } from 'react-router-dom';

function Cartitem({ item, qtyChangeHandler, removeItemHandler }) {
    
    return (
        <div className="cartitem">
            <img src={item.imageUrl}
                alt={item.name}
            />

            <Link to={`/product/${item.product}`} className="cartitem_name">
                <p>{item.name}</p>
            </Link>

            <p className="cartitem_price">${item.price}</p>
            
            <select
                className="cartitem_select"
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
            >
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>
                        {x+1}
                    </option>
                ))}
            </select>
            
            <button onClick={() => removeItemHandler(item.product)} className="cartitem_deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Cartitem
