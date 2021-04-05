import './Product.css';
import { Link } from 'react-router-dom';

function Product({id, name, price, imageUrl, description}) {
    return (
        <div className="product">
            <img 
                src={imageUrl}
                alt={name}
            />

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p>
                    {description.substring(0,80)}...
                </p>

                <p className="info_price">${price}</p>

                < Link to={`/product/${id}`} className="info_button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product
