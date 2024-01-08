import "./ProductCard.css"
import starIcon from "./assets/star.svg"

const ProductCard = ({item}) => {
    return ( 
        <div className="product-card">
            <img src={item.src} alt={item.title} className="product-card-image" />
            <div className="product-card-content">
                <h4 className="product-card-title">{item.title}</h4>
                <p className="product-card-category">{item.category}</p>
                <div className="product-card-flex">
                    <p className="product-card-price">$ {item.price}</p>
                    <div className="product-card-rating">
                        <p>{item.rating}</p>
                        <img src={starIcon} alt="Rating star icon" />
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default ProductCard