import './App.css'
import Navbar from './Navbar';
import ProductSection from './ProductSection';
import Footer from './Footer';
import img1 from "./assets/1.webp"
import img2 from "./assets/2.webp"
import img3 from "./assets/3.webp"
import img4 from "./assets/4.webp"
import img5 from "./assets/5.webp"
import img6 from "./assets/6.webp"
import img7 from "./assets/7.webp"
import img8 from "./assets/8.webp"
import img9 from "./assets/9.webp"
import img10 from "./assets/10.webp"
import img11 from "./assets/11.webp"
import img12 from "./assets/12.webp"
import img13 from "./assets/13.webp"
import img14 from "./assets/14.jpg"
import img15 from "./assets/15.webp"
import img16 from "./assets/16.webp"
import img17 from "./assets/17.webp"
import img18 from "./assets/18.webp"
import img19 from "./assets/19.webp"
import img20 from "./assets/20.webp"

function App() {
  const products = [
  {
    id: 1,
    title: "Men's Cotton T-Shirt",
    price: 19.99,
    category: "Men's Apparel",
    rating: 4.5,
    src: `${img1}`,
  },
  {
    id: 2,
    title: "Men's Slim Fit Jeans",
    price: 44.99,
    category: "Men's Apparel",
    rating: 4.2,
    src: `${img2}`,
  },
  {
    id: 3,
    title: "Women's Denim Jeans",
    price: 34.99,
    category: "Women's Apparel",
    rating: 4.0,
    src: `${img3}`,
  },
  {
    id: 4,
    title: "Men's Jacket",
    price: 29.99,
    category: "Men's Apparel",
    rating: 4.7,
    src: `${img4}`,
  },
  {
    id: 5,
    title: "Unisex Hooded Sweatshirt",
    price: 29.99,
    category: "Apparel",
    rating: 4.8,
    src: `${img5}`,
  },
  {
    id: 6,
    title: "Unisex Beanie Hat",
    price: 12.99,
    category: "Accessories",
    rating: 4.5,
    src: `${img6}`,
  },
  {
    id: 7,
    title: "Running Shoes",
    price: 49.99,
    category: "Footwear",
    rating: 4.0,
    src: `${img7}`,
  },
  {
    id: 8,
    title: "Sports Sandals",
    price: 34.99,
    category: "Footwear",
    rating: 4.2,
    src: `${img8}`,
  },
  {
    id: 9,
    title: "Casual Summer Dress",
    price: 39.99,
    category: "Women's Apparel",
    rating: 4.7,
    src: `${img9}`,
  },
  {
    id: 10,
    title: "Formal Women's Blazer",
    price: 59.99,
    category: "Women's Apparel",
    rating: 4.3,
    src: `${img10}`,
  },
  {
    id: 11,
    title: "Men's Slim Fit Chinos",
    price: 45.99,
    category: "Men's Apparel",
    rating: 4.4,
    src: `${img11}`,
  },
  {
    id: 12,
    title: "Men's Leather Belt",
    price: 24.99,
    category: "Accessories",
    rating: 4.1,
    src: `${img12}`,
  },
  {
    id: 13,
    title: "Sports Leggings",
    price: 24.99,
    category: "Activewear",
    rating: 4.6,
    src: `${img13}`,
  },
  {
    id: 14,
    title: "Women's Yoga Pants",
    price: 29.99,
    category: "Activewear",
    rating: 4.9,
    src: `${img14}`,
  },
  {
    id: 15,
    title: "Classic Leather Wallet",
    price: 14.99,
    category: "Accessories",
    rating: 4.1,
    src: `${img15}`,
  },
  {
    id: 16,
    title: "Winter Jacket",
    price: 79.99,
    category: "Apparel",
    rating: 4.9,
    src: `${img16}`,
  },
  {
    id: 17,
    title: "Women's Sneakers",
    price: 59.99,
    category: "Footwear",
    rating: 4.3,
    src: `${img17}`,
  },
  {
    id: 18,
    title: "Formal Shirt",
    price: 29.99,
    category: "Men's Apparel",
    rating: 4.6,
    src: `${img18}`,
  },
  {
    id: 19,
    title: "Denim Skirt",
    price: 24.99,
    category: "Women's Apparel",
    rating: 4.0,
    src: `${img19}`,
  },
  {
    id: 20,
    title: "Gym Shorts",
    price: 19.99,
    category: "Activewear",
    rating: 4.2,
    src: `${img20}`,
  },
];

  return (
    <>
      <Navbar />
      <main className='main'>
        <div className="hero-section">
            <h1 className="hero-title">
              Style Redefined,<br />Fashion Rediscovered.
            </h1>
        </div>
        <ProductSection products={products}/>
      </main>
      <Footer />
    </>
  )
}

export default App
