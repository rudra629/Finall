export default function StoreAmazonBanner() {
  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const target = document.getElementById('map')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="row wow fadeIn amazon align-items-stretch">
      {/* Kirana / Next-Door panel */}
      <div className="col-md-6 the-orange d-flex flex-column justify-content-center py-5">
        <div className="row align-items-center">
          {/* Mobile image */}
          <div className="col-sm-5 d-sm-none p-4">
            <img
              src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80"
              alt="Mixed dry fruits and nuts"
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: 'cover', height: '400px', width: '100%', border: '4px solid white' }}
            />
          </div>

          <div className="col-sm-7 alltext">
            <h5 className="text-uppercase">We are hanging</h5>
            <h4 className="text-uppercase">Next Door!</h4>
            <p>
              at your favorite neighborhood Kirana Stores across Mumbai, Bangalore and Pune!
            </p>
            <div className="btn-distances">
              <a
                className="btn btn-danger btn-lg text-uppercase sliding-link"
                href="#map"
                onClick={handleSmoothScroll}
              >
                Find Your Store!
              </a>
            </div>
          </div>

          {/* Desktop image */}
          <div className="col-sm-5 d-none d-sm-block p-4">
            <img
              src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80"
              alt="Mixed dry fruits and nuts"
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: 'cover', height: '550px', width: '100%', border: '6px solid white' }}
            />
          </div>
        </div>
      </div>

      {/* Amazon panel */}
      <div className="col-md-6 the-white d-flex flex-column justify-content-center py-5">
        <div className="row relative align-items-center">
          {/* Mobile image */}
          <div className="col-sm-5 d-sm-none p-4">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
              alt="Online Shopping E-commerce"
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: 'cover', height: '400px', width: '100%', border: '4px solid #f8f9fa' }}
            />
          </div>

          <div className="col-sm-7 alltext">
            <h5 className="text-uppercase">We are online on</h5>
            <h4 className="text-uppercase">Amazon.in!</h4>
            <p>
              Yup! You can buy your favorite snacks from the comfort of your digital device!
            </p>
            <div className="btn-distances">
              <a
                className="btn btn-warning btn-lg text-uppercase"
                href="#"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff', fontWeight: 'bold' }}
              >
                Buy on Amazon.in!
              </a>
            </div>
          </div>

          {/* Desktop image */}
          <div className="col-sm-5 d-none d-sm-block p-4">
            <div className="abs position-relative" style={{ right: 0, bottom: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                alt="Online Shopping E-commerce"
                className="img-fluid rounded shadow-lg"
                style={{ objectFit: 'cover', height: '550px', width: '100%', border: '6px solid #f8f9fa' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}