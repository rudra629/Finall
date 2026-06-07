import { useRef, useState } from 'react'
import Slider from 'react-slick'

/* -------------------------------------------------------
   Product data  (mirrors original HTML exactly)
   ------------------------------------------------------ */

const products = [
  {
    img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80',
    alt: 'Premium Roasted Almonds',
    h3: 'ROASTED SALTED', h2: 'ALMONDS\u00a0!',
    p: 'Roasted and salted to perfection, these almonds will give you the extra kick you need !',
    link: '#',
    gradient: 'linear-gradient(124deg, #01A7E3, #0187CE, #01A7E3)',
    colour: '#01A7E3',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1619586111742-02687df2a00c?w=600&q=80',
    alt: 'Golden Cashews',
    h3: 'ROASTED SALTED', h2: 'CASHEWS\u00a0!',
    p: 'Sweet notes of cashews along with proper salt and roast will prepare you for a power packed day ahead !',
    link: '#',
    gradient: 'linear-gradient(124deg, #00BBE8, #008CC1, #00BBE8)',
    colour: '#00BBE8',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1598218520286-90cb878dd5ea?w=600&q=80',
    alt: 'Roasted Pistachios',
    h3: 'ROASTED SALTED', h2: 'PISTACHIOS\u00a0!',
    p: 'Inshell pistachios roasted and salted is a playful pastime and the perfect hunger buddy you were in search of !',
    link: '#',
    gradient: 'linear-gradient(124deg, #55C5D9, #01ABCC, #55C5D9)',
    colour: '#55C5D9',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'Raw Walnuts',
    h3: 'NATURAL RAW', h2: 'WALNUTS\u00a0!',
    p: 'These crunchy, earthy walnuts are bound to create a flavor explosion in your mouth! Might as well buy two packs !',
    link: '#',
    gradient: 'linear-gradient(124deg, #518FCC, #006FB7, #518FCC)',
    colour: '#518FCC',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1597824041793-18bd0872bd48?w=600&q=80',
    alt: 'Sunflower Seeds',
    h3: 'ROASTED SALTED', h2: 'SUNFLOWER SEEDS\u00a0!',
    p: 'Experience a whole new snack, Roasted & Salted Sunflower Seeds that will take your taste buds by surprise!',
    link: '#',
    gradient: 'linear-gradient(124deg, #00A3D8, #007BB6, #00A3D8)',
    colour: '#00A3D8',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&q=80',
    alt: 'Cranberry Trail Mix',
    h3: 'TRAIL MIX', h2: 'CRANBERRY FUSION\u00a0!',
    p: 'Cranberry Fusion with a delicious mix of hand-picked cranberries, almonds and cashews will make your mouth water every time you see it !',
    link: '#',
    gradient: 'linear-gradient(124deg, #F0617D, #DA1A33, #F0617D)',
    colour: '#F0617D',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1600189020963-356c9a405d4b?w=600&q=80',
    alt: 'Unsalted Almonds',
    h3: 'ROASTED UNSALTED', h2: 'ALMONDS\u00a0!',
    p: 'Roasted to perfection, these almonds will deliver you the extra punch you need!',
    link: '#',
    gradient: 'linear-gradient(124deg, #FF9015, #F16C00, #FF9015)',
    colour: '#FF9015',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
  {
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Unsalted Cashews',
    h3: 'ROASTED UNSALTED', h2: 'CASHEWS\u00a0!',
    p: 'Crunchy cashews combined with proper roast will prepare you for a smashing day ahead!',
    link: '#',
    gradient: 'linear-gradient(124deg, #FCB24C, #FF8300, #FCB24C)',
    colour: '#FCB24C',
    topLeft:      '', topRight:     '', bottomRight:  '', bottomLeft:   '',
  },
]

export default function ProductCarousel() {
  const [arrowColour, setArrowColour] = useState(products[0].colour)
  const sliderRef = useRef(null)

  const settings = {
    prevArrow: (
      <button className="slick-prev-btn" style={{ color: arrowColour }}>
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next-btn">
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </button>
    ),
    fade: true,
    beforeChange: (_cur, next) => setArrowColour(products[next].colour),
  }

  return (
    <div className="row car-holder wow fadeIn">
      {/* Left column: heading */}
      <div className="col-lg-4">
        <div className="col-sm-12 slogans">
          <h2 className="text-uppercase">
            Snacks <br className="d-none d-sm-inline" />
            that get <br className="d-none d-sm-inline" />
            you <span>buzzing !</span>
          </h2>
          <img
            src="https://www.bazana.in/assets/images/bazana-nuts-separator.jpg"
            className="separator"
            alt=""
          />
          <p>{"Let's meet your Not Fried, No Oil Snacks !"}</p>
        </div>
      </div>

      {/* Right column: slider */}
      <div className="col-lg-8">
        <style>{`
          .buck-carousel .slick-prev-btn,
          .buck-carousel .slick-next-btn {
            background: none; border: none; cursor: pointer;
            font-size: 22px; position: absolute; top: 50%;
            transform: translateY(-50%); z-index: 10;
          }
          .buck-carousel .slick-prev-btn { left: -30px; }
          .buck-carousel .slick-next-btn { right: -30px; color: inherit; }
        `}</style>

        <Slider ref={sliderRef} {...settings} className="buck-carousel" id="buck-carousel">
          {products.map((prod, i) => (
            <div key={i}>
              <div className="blue colour">
                {/* Pack image */}
                {/* Pack image */}
                <div className="col-3 im d-flex align-items-center justify-content-center">
                  <img 
                    src={prod.img} 
                    alt={prod.alt} 
                    id="soprod" 
                    className="product" 
                    style={{
                      objectFit: 'cover',
                      borderRadius: '24px',
                      border: '6px solid white',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                      height: '380px',
                      width: '100%',
                      maxWidth: '280px',
                      backgroundColor: '#fff'
                    }} 
                  />
                </div>

                {/* Text panel with animated gradient */}
                <div
                  className="col-9 text-holder"
                  style={{
                    background: prod.gradient,
                    backgroundSize: '300% 300%',
                    WebkitAnimation: 'AnimationName 5s ease infinite',
                    MozAnimation: 'AnimationName 5s ease infinite',
                    animation: 'AnimationName 5s ease infinite',
                  }}
                >
                  <div>
                    <h3 className="text-uppercase">{prod.h3}</h3>
                    <h2 className="text-uppercase">{prod.h2}</h2>
                    <p>{prod.p}</p>
                    <a href={prod.link} className="btn btn-light text-uppercase">Buy Now</a>
                  </div>

                  {/* Corner icons */}
                  <div className="backg">
                    <img src={prod.topLeft}     className="top-left"    alt="" />
                    <img src={prod.topRight}     className="top-right"   alt="" />
                    <img src={prod.bottomRight}  className="bottom-right" alt="" />
                    <img src={prod.bottomLeft}   className="bottom-left" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <span className="seal" />
    </div>
  )
}
