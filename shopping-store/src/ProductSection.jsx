/* eslint-disable react/prop-types */
import { useState } from "react"
import Product from "./ProductCard"
import "./ProductSection.css"

const ProductSection = ({products}) => {
    const [category, setCategory] = useState("All");
    const [query, setQuery] = useState("");
    return ( 
        <div className="product-section">
            <h1>Featured Products</h1>
            <div className="elementor-divider">
            </div>
            <div className="filter">
                <div className="product-search">
                    <input className="search" type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <div className="category-filter">
                    <div className="category-tag" data-active={category==="All"} onClick={() => setCategory("All")}>All</div>
                    <div className="category-tag" data-active={category==="Men's Apparel"} onClick={() => setCategory("Men's Apparel")}>Men's Apparel</div>
                    <div className="category-tag" data-active={category==="Women's Apparel"} onClick={() => setCategory("Women's Apparel")}>Women's Apparel</div>
                    <div className="category-tag" data-active={category==="Footwear"} onClick={() => setCategory("Footwear")}>Footwear</div>
                    <div className="category-tag" data-active={category==="Accessories"} onClick={() => setCategory("Accessories")}>Accessories</div>
                    <div className="category-tag" data-active={category==="Activewear"} onClick={() => setCategory("Activewear")}>Activewear</div>
                </div>
            </div>

            <div className="product-grid">
                {products.filter((item) => (item.title.toLowerCase().includes(query.toLowerCase()) && ( category==="All" || item.category===category))).map((item, index) => (
                    <Product item={item} key={index}/>
                ))}
            </div>
        </div>
    );
}
 
export default ProductSection;