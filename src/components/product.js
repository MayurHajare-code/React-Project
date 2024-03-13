

function Product({ product }) {
    return (
        <div>
            <div className="product-block">
                <img className="product-block-img" src={product.img} alt={product.name} />
                <h6 className="product-block-title">{product.name}</h6>
                <p className="product-block-price">&#8377;&nbsp;{product.price}</p>
            </div>

        </div>
    );
}
export default Product;