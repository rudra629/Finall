import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* -------------------------------------------------------
   Client Product Data (Grams Brand)
   ------------------------------------------------------ */
const products = [
  {
    img: '/images/Prunes F.png', 
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Pitted Prunes',
    h3: 'PREMIUM QUALITY', 
    h2: 'PITTED PRUNES !',
    p: 'Naturally sweet, rich in antioxidants, and perfectly pitted. Beyond a snack, it is a lifestyle!',
    link: '#',
    colour: '#8B005D', 
  },
  {
    img: '/images/Pumpkin Seeds F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'Pumpkin Seeds',
    h3: 'PREMIUM QUALITY', 
    h2: 'PUMPKIN SEEDS !',
    p: 'Protein-rich and roasted for the perfect daily crunch. Power up your day!',
    link: '#',
    colour: '#3B5B8A', 
  },
  {
    img: '/images/Dried Pineapple F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=80',
    alt: 'Dried Pineapple',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED PINEAPPLE !',
    p: 'A tropical burst of flavor, high in vitamins and naturally delicious. Your sweet escape!',
    link: '#',
    colour: '#A36F1C', 
  },
  {
    img: '/images/Walnut Whole Cali F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'California Whole Walnuts',
    h3: 'CALIFORNIA', 
    h2: 'WALNUT WHOLE !',
    p: 'Premium California walnuts, packed with healthy fats and brain-boosting nutrients. Crack into freshness!',
    link: '#',
    colour: '#006D6B', 
  },
  {
    img: '/images/Walnut Whole Chile F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'Chile Whole Walnuts',
    h3: 'CHILE', 
    h2: 'WALNUT WHOLE !',
    p: 'Rich, earthy whole walnuts sourced directly from Chile. The ultimate brain food!',
    link: '#',
    colour: '#7B4734', 
  },
  {
    img: '/images/Walnut kernals F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'Walnut Kernels',
    h3: 'PREMIUM QUALITY', 
    h2: 'WALNUT KERNELS !',
    p: 'Ready-to-eat premium walnut halves to power up your breakfast, baking, or mid-day snack.',
    link: '#',
    colour: '#8C5E35', 
  },
  {
    img: '/images/Sunflower F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1597824041793-18bd0872bd48?w=600&q=80',
    alt: 'Sunflower Seeds',
    h3: 'PREMIUM QUALITY', 
    h2: 'SUNFLOWER SEEDS !',
    p: 'Crunchy, satisfying, and loaded with essential vitamins. Your perfect on-the-go buddy!',
    link: '#',
    colour: '#156843', 
  },
  {
    img: '/images/Salted Pista F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1598218520286-90cb878dd5ea?w=600&q=80',
    alt: 'Salted Pistachios',
    h3: 'PREMIUM QUALITY', 
    h2: 'SALTED PISTACHIOS !',
    p: 'Perfectly roasted and salted. Once you start popping these pistachios, you will not be able to stop!',
    link: '#',
    colour: '#5A8D55', 
  },
  {
    img: '/images/Raisins F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Premium Raisins',
    h3: 'PREMIUM QUALITY', 
    h2: 'RAISINS !',
    p: 'Naturally sweet, chewy, and highly nutritious. The ultimate energy booster for your active lifestyle.',
    link: '#',
    colour: '#114D62', 
  },
  {
    img: '/images/Quinoa F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
    alt: 'Quinoa Seeds',
    h3: 'PREMIUM QUALITY', 
    h2: 'QUINOA SEEDS !',
    p: 'The ultimate superfood. Protein-rich quinoa for a highly nutritious, balanced lifestyle!',
    link: '#',
    colour: '#22827F', 
  }
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const currentProduct = products[currentIndex]

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <div className="row car-holder wow fadeIn m-0 align-items-stretch" style={{ minHeight: '920px', position: 'relative', overflow: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .left-arrow-btn, .right-arrow-btn { 
          outline: none !important; 
          box-shadow: none !important; 
        }
        
        .left-arrow-btn:focus, .right-arrow-btn:focus {
          outline: none !important;
        }

        /* Perfect arrow placement hugging the giant bag */
        .left-arrow-btn { left: calc(50% - 320px); }
        .right-arrow-btn { right: 30px; }

        /* Adjusted padding so text completely clears the huge 580px bag and right-side icons */
        .left-text-col { padding-left: 8%; padding-right: 360px; }
        .right-text-col { padding-left: 330px; padding-right: 15%; }

        /* THE MASSIVE HERO BAG */
        .product-img-box { width: 580px; height: 850px; }

        @media (max-width: 1200px) {
          .left-arrow-btn { left: calc(50% - 280px); }
          .left-text-col { padding-right: 280px; }
          .right-text-col { padding-left: 260px; }
          .product-img-box { width: 450px; height: 650px; }
          .floating-icon-group { display: none !important; } /* Hide floating icons on small screens */
        }

        @media (max-width: 991px) {
          .left-arrow-btn { left: 20px !important; top: 40% !important; }
          .right-arrow-btn { right: 20px !important; top: 40% !important; }
          .left-text-col { padding: 2rem !important; padding-bottom: 250px !important; text-align: center; }
          .right-text-col { padding: 2rem !important; padding-top: 250px !important; text-align: center; }
          .product-img-box { left: 50% !important; top: 50% !important; height: 450px !important; width: 300px !important; }
        }
      `}} />

      {/* LEFT COLUMN */}
      <div className="col-lg-6 d-flex align-items-center" style={{ backgroundColor: '#ffffff', zIndex: 2 }}>
        <div className="w-100 left-text-col">
          {/* Split color header to exactly match original branding */}
          <h2 className="text-uppercase" style={{ fontWeight: 900, fontSize: '4rem', lineHeight: '1.1' }}>
            <span style={{ color: '#8b151b' }}>
              Snacks <br className="d-none d-sm-inline" />
              that get <br className="d-none d-sm-inline" />
            </span>
            <span style={{ color: '#d3121a' }}>you buzzing !</span>
          </h2>
          
          <img
            src="https://www.bazana.in/assets/images/bazana-nuts-separator.jpg"
            className="separator my-4"
            alt="Seed Separator"
            style={{ opacity: 0.5, display: 'block' }}
          />
          
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>{"Let's meet your Not Fried, No Oil Snacks !"}</p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <motion.div 
        className="col-lg-6 d-flex align-items-center position-relative"
        animate={{ backgroundColor: currentProduct.colour }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-white w-100 right-text-col" style={{ zIndex: 5 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-uppercase" style={{ fontWeight: 600, letterSpacing: '2px', opacity: 0.9 }}>{currentProduct.h3}</h3>
              <h2 className="text-uppercase mb-4" style={{ fontWeight: 900, fontSize: '3.8rem', lineHeight: '1.1' }}>{currentProduct.h2}</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '450px' }}>{currentProduct.p}</p>
              
              <a href={currentProduct.link} className="btn mt-4 text-uppercase fw-bold rounded-pill px-5 py-3" style={{ backgroundColor: 'transparent', color: 'white', border: '3px solid white', fontSize: '1.1rem' }}>
                Buy Now
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- DYNAMIC FLOATING LIFESTYLE ICONS --- */}
        <div className="floating-icon-group" style={{ position: 'absolute', top: '15%', right: '8%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <motion.div 
            style={{ width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
          >
            <motion.i 
              className="fa fa-suitcase" 
              animate={{ color: currentProduct.colour }} 
              transition={{ duration: 0.5 }} 
              style={{ fontSize: '2.5rem' }} 
            />
          </motion.div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>TIFFIN!</span>
        </div>

        <div className="floating-icon-group" style={{ position: 'absolute', bottom: '15%', right: '8%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <motion.div 
            style={{ width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
          >
            <motion.i 
              className="fa fa-book" 
              animate={{ color: currentProduct.colour }} 
              transition={{ duration: 0.5 }} 
              style={{ fontSize: '2.5rem' }} 
            />
          </motion.div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>STUDY!</span>
        </div>
        {/* --------------------------------------- */}

        <button 
          className="right-arrow-btn"
          onClick={slideNext} 
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 30, background: 'none', border: 'none', color: 'white', fontSize: '3rem', cursor: 'pointer' }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </motion.div>

      {/* Left Arrow */}
      <motion.button 
        className="left-arrow-btn"
        onClick={slidePrev} 
        animate={{ color: currentProduct.colour }}
        transition={{ duration: 0.5 }}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 30, background: 'none', border: 'none', fontSize: '3.5rem', cursor: 'pointer' }}
      >
        <i className="fa fa-chevron-left" />
      </motion.button>

      {/* CENTERED PRODUCT IMAGE */}
      <div 
        className="product-img-box"
        style={{ 
          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)', 
          zIndex: 20,
          pointerEvents: 'none' 
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentProduct.img}
            onError={(e) => { e.target.src = currentProduct.fallbackImg }} 
            alt={currentProduct.alt}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 30px 45px rgba(0,0,0,0.5))' 
            }}
          />
        </AnimatePresence>
      </div>

    </div>
  )
}