import '../style/product.css'

function Product() {
    return(
        <div>
            
    <div class="product-content">
        <div class="nav-content">
            <h1>Our products</h1>
        </div>
    </div>



    <div id="product-page">

        {/* <!-- <h4 class="h4-title">Our Products</h4>
        <hr class="hr-line"> -->

        <div class="sort">
            <select name="product" id="product">
                <option value="mobile">Sort By</option>
                <option value="mobile">Mobile</option>
                <option value="mobile">Headphone</option>
                <option value="mobile">Watch</option>
            </select>
        <!-- </div>
        <div class="filter"> -->
            <button>Filter</button>
        </div> */}



        <a href="./product_detail.html" class="product-block">
            <img class="product-block-img" src="/images/product-1.jpg" alt=""/>
            <h6 class="product-block-title">Apple IPhone 11 128GB White</h6>
            <p class="product-block-price">&#8377;&nbsp;27,199</p>
        </a>

        <a href="./product_detail.html" class="product-block">
            <img class="product-block-img" src="/images/product-3.jpg" alt=""/>
            <h6 class="product-block-title">JBL 660NC Wireless Headphone</h6>
            <p class="product-block-price">&#8377;&nbsp;14,000</p>
        </a>

        <a href="./product_detail.html" class="product-block">
            <img class="product-block-img" src="/images/product-2.jpg" alt=""/>
            <h6 class="product-block-title">Round Black Apple Led Watch</h6>
            <p class="product-block-price">&#8377;&nbsp;499</p>
        </a>

        
    </div>
        </div>
    )
}

export default Product;