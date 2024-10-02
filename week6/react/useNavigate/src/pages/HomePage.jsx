import ProductCard from '../components/ProductCard';
import products from '../products.js'

const HomePage = () => {
    return ( 
        <section>
            <h1 className='title'>Zoo App</h1>
            <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </section>
     );
}
 
export default HomePage;