import React from 'react'
import './style.css'

const Card = () => {
  return (
    <>
    <div className="card-group  container mt-5 ">
        <div className="card  ">
          <div className=" zoom">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top custom-card" alt="..."/>
        </div>
          <div className="card-body">
            <h5 className="card-title">Headphone</h5>
            <h6 className="card-title">Nrs.2000</h6>
            <p className="card-text text-truncate">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            <div className="btn btn-primary form-control">See More</div>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card ">
          <div className="zoom">
          <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043" alt="..."
           className="card-img-top custom-card"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Camera</h5>
            <h6 className="card-title">Nrs.4000</h6>
            <p className="card-text text-truncate">This card has supporting text below as a natural lead-in to additional content.</p>
            <div className="btn btn-primary form-control">See More</div>

            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <div className="zoom">
          <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="card-img-top custom-card" alt="..."/>
        </div>
          <div className="card-body">
            <h5 className="card-title">Watch</h5>
            <h6 className="card-title">Nrs.1000</h6>
            <p className="card-text text-truncate">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <div className="btn btn-primary form-control">See More</div>

            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card