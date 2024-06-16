import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to Apple mart, your ultimate mobile e-commerce destination where convenience meets variety. Apple mart is designed to provide a seamless shopping experience right at your fingertips. With an extensive range of products, from the latest tech gadgets and trendy fashion to home essentials and beauty products, we cater to all your needs in one place. Our intuitive, user-friendly interface ensures that you can browse, select, and purchase items effortlessly. Secure payment gateways and fast, reliable delivery services guarantee that your shopping experience is not only enjoyable but also safe and efficient. Our dedicated customer support team is always ready to assist you with any queries, ensuring a hassle-free shopping journey. Moreover, with regular updates on the latest deals, discounts, and exclusive offers, ShopEase ensures that you never miss out on great savings. Download the ShopEase app today and transform the way you shop, making it smarter, faster, and more enjoyable than ever before. Whether you’re at home, at work, or on the go, ShopEase brings the world of shopping right to your mobile device. Shop smart, live better with ShopEase.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
