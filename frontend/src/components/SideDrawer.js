import './SideDrawer.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SideDrawer({ show }) {

    const { cartItems } = useSelector(state => state.cart)

    const getTotalItems = () => {
        return cartItems.reduce((qty, item) => (Number(item.qty) + qty), 0)
    }

    return (
        <div className={`sidedrawer ${show && "show"}`}>
            <div className = "sidedrawer_header">
                <h2>MERN Shopping Cart</h2>
            </div>
            
            <ul className="sidedrawer_links">
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="drawer_cartlogo_badge">{getTotalItems()}</span>
                        </span>
                    </Link>
                </li>
                <hr/>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
                <hr/>
            </ul>
        </div>
    )
}

export default SideDrawer
