import './HomeScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Componenets
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

function HomeScreen() {
    
    const dispatch = useDispatch();

    const productsInState = useSelector(state => state.getProducts);
    const { products, loading, error } = productsInState;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

     return (
         <div className="homescreen">
            <h2 className="homescreen_title">Latest Products</h2>

            <div className="homescreen_products">
                {loading ? <h2>Loading...</h2> 
                : error ? <h2>{error}</h2> 
                : products.map(product => (
                    < Product
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        price={product.price}
                    />
                )
                )}
            </div>             
         </div>
     )
 }
 
 export default HomeScreen
 