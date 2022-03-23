import '../style/Product.css'
function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt=""/>
      <p className="product-name">{props.name}</p>
      <p className="product-price">{props.price}</p>
    </div>
  );
}

export default Product