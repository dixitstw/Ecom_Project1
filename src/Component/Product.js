import React from 'react'
import './style.css'

const Product = () => {
  return (
    <>
       <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 border " >
                <h3 className="text-primary text-decoration-underline mt-4">Deals of the day</h3>
                <h3 className="text-danger text-decoration-underline">Flash Sales</h3>
                <h3 className="text-success text-decoration-underline">Winter Sales</h3>
                <h2 className="text-primary text-decoration-underline mt-4">Categories</h2>

                <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label " for="flexCheckDefault">
                      Laptop
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                     Mobiles
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Gym and Fitness
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Dress
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Shoes
                    </label>
                  </div>

                  <h2 className="text-primary text-decoration-underline">Prices</h2>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      ALL
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Above Nrs.50,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Nrs.40,000-Nrs.50,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Nrs.20,000-Nrs.40,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Less than Nrs.20,000
                    </label>
                  </div>







            </div>
            <div className="col-md-9 border">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col-md-3">
                      <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043" className="card-img-top custom-product" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Camera</h5>
                          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="card-img-top custom-product" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Casio Watch</h5>
                          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="card-img-top custom-product" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Sony Watch</h5>
                          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043" className="card-img-top custom-product" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Samsung Camera</h5>
                          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Product