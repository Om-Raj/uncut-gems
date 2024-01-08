import "./Footer.css"

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                <h3>About Us</h3>
                <p>Discover our story and mission.</p>
                <a href="#" className="underline">Read More</a>
                </div>

                <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Have questions or need assistance?</p>
                <a href="#" className="underline">Email Us</a>
                </div>

                <div className="footer-section">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Shipping Information</a></li>
                    <li><a href="#">Returns & Exchanges</a></li>
                </ul>
                </div>

                <div className="footer-section">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#" target="_blank">Facebook</a></li>
                    <li><a href="#" target="_blank">Twitter</a></li>
                    <li><a href="#" target="_blank">Instagram</a></li>
                </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Snap Store. All rights reserved. &lt;/&gt; by Om Raj.</p>
            </div>
        </footer>

    );
}
 
export default Footer;