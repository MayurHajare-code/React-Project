import '../style/home.css';

function Home() {
    return (
        <div>
            <div className="home-content">
                <div className="nav-content">
                    <h1>Lorem <br /> ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem quis, minima molestias aperiam
                        dolores excepturi ab vero dicta quibusdam quam nobis error. Sunt vero cupiditate facilis quia,
                        obcaecati omnis.Sunt vero cupiditate facilis quia,
                        obcaecati omnis.</p>
                    <a href="#" className="nav-btn">Join Now</a>
                </div>
            </div>


            <div id="home-page-content">

                <h4 className="h4-title">Latest Products</h4>
                <hr className="hr-line" />

                <a href="./product_detail.html" className="product-block">
                    <img className="product-block-img" src="/images/product-1.jpg" alt="" />
                    <h6 className="product-block-title">Apple IPhone 11 128GB White</h6>
                    <p className="product-block-price">&#8377;&nbsp;27,199</p>
                </a>

                <a href="./product_detail.html" className="product-block">
                    <img className="product-block-img" src="/images/product-3.jpg" alt="" />
                    <h6 className="product-block-title">JBL 660NC Wireless Headphone</h6>
                    <p className="product-block-price">&#8377;&nbsp;14,000</p>
                </a>

                <a href="./product_detail.html" className="product-block">
                    <img className="product-block-img" src="/images/product-2.jpg" alt="" />
                    <h6 className="product-block-title">Round Black Apple Led Watch</h6>
                    <p className="product-block-price">&#8377;&nbsp;499</p>
                </a>


                <h2 className="h4-title">Our Brands</h2>
                <hr className="hr-line" />


                <div className="brands">
                    <img src="/images//brand-img/dell-bg.png" alt="" />
                    <img src="/images/brand-img/iphone-bg.png" alt="" />
                    <img src="/images//brand-img/dell-bg.png" alt="" />
                    <img src="/images/brand-img/iphone-bg.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home;