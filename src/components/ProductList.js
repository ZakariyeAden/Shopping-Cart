import '../style/ProductList.css'
import Product from './Product';
import { Link } from 'react-router-dom'
function ProductList(props) {
  const { products} = props;
  return (
    <div className="product-list">
      {products.map((product, i) => (
        <Link to={`/product/${product.name}`}>
          <Product
            name={product.name}
            img={product.img}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductList