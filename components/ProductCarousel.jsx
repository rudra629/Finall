import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* -------------------------------------------------------
   Client Product Data (Grams Brand) - 25 Products Total
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
    p: 'Perfectly roasted and salted. Once you start popping these pistachios, you won\'t be able to stop!',
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
  },
  {
    img: '/images/Dried Kiwi F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1585059895524-72359fa06bc3?w=600&q=80',
    alt: 'Dried Kiwi Slice',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED KIWI SLICE !',
    p: 'Tangy, sweet, and packed with vitamin C. A vibrant tropical treat to brighten your day!',
    link: '#',
    colour: '#2A6136', 
  },
  {
    img: '/images/Dreid Mango F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80',
    alt: 'Dried Mango Slice',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED MANGO SLICE !',
    p: 'Chewy, naturally sweet tropical goodness. Your perfect on-the-go sunny escape!',
    link: '#',
    colour: '#D39121', 
  },
  {
    img: '/images/Hazelnuts F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1563013544-1f4a9ce86e1d?w=600&q=80',
    alt: 'Hazelnuts',
    h3: 'PREMIUM QUALITY', 
    h2: 'HAZELNUTS !',
    p: 'Rich, crunchy, and packed with healthy fats. The ultimate premium snacking experience.',
    link: '#',
    colour: '#192C69', 
  },
  {
    img: '/images/Dried Blueberry F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=600&q=80',
    alt: 'Dried Blueberry',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED BLUEBERRY !',
    p: 'Bite-sized antioxidant powerhouses. Perfectly sweet and tart for a healthy lifestyle!',
    link: '#',
    colour: '#22368B', 
  },
  {
    img: '/images/Dried Apricots F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Dried Apricots',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED APRICOTS !',
    p: 'Plump, moist, and naturally sweet. A delicious source of fiber and energy.',
    link: '#',
    colour: '#E08518', 
  },
  {
    img: '/images/Chia F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1585250482260-26477d61c6b1?w=600&q=80',
    alt: 'Chia Seeds',
    h3: 'PREMIUM QUALITY', 
    h2: 'CHIA SEEDS !',
    p: 'Tiny seeds with massive benefits. Rich in Omega-3s to fuel your busy mornings!',
    link: '#',
    colour: '#634E3C', 
  },
  {
    img: '/images/Cashew F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1619586111742-02687df2a00c?w=600&q=80',
    alt: 'Cashew',
    h3: 'PREMIUM QUALITY', 
    h2: 'CASHEW !',
    p: 'Creamy, rich, and perfectly whole. The classic premium nut for every occasion.',
    link: '#',
    colour: '#1A689D', 
  },
  {
    img: '/images/Brazil Nuts F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=600&q=80',
    alt: 'Brazil Nuts',
    h3: 'PREMIUM QUALITY', 
    h2: 'BRAZIL NUTS !',
    p: 'Earthy, crunchy, and loaded with selenium. A rare and powerful superfood snack.',
    link: '#',
    colour: '#594474', 
  },
  {
    img: '/images/Black Raisins F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Black Raisins',
    h3: 'PREMIUM QUALITY', 
    h2: 'BLACK RAISINS !',
    p: 'Juicy, sweet, and iron-rich. A timeless natural candy to keep your energy high.',
    link: '#',
    colour: '#411C6B', 
  },
  {
    img: '/images/Pistachio Kernals F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1598218520286-90cb878dd5ea?w=600&q=80',
    alt: 'Pistachio Kernels',
    h3: 'PREMIUM QUALITY', 
    h2: 'PISTACHIO KERNELS !',
    p: 'Vibrant, pre-shelled, and totally addictive. All the flavor without the work!',
    link: '#',
    colour: '#5F8D3B', 
  },
  {
    img: '/images/Pecan F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Pecan Nuts',
    h3: 'PREMIUM QUALITY', 
    h2: 'PECAN NUTS !',
    p: 'Buttery, rich, and naturally sweet. A classic favorite for snacking or elevating your favorite recipes!',
    link: '#',
    colour: '#4A2E24', 
  },
  {
    img: '/images/Macademia F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Macadamia Nuts',
    h3: 'PREMIUM QUALITY', 
    h2: 'MACADAMIA NUTS !',
    p: 'Creamy, decadent, and luxurious. Indulge in the king of nuts for a truly premium snacking experience.',
    link: '#',
    colour: '#801A3A', 
  },
  {
    img: '/images/Dried Cranberry F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Dried Cranberries',
    h3: 'PREMIUM QUALITY', 
    h2: 'DRIED CRANBERRIES !',
    p: 'Sweet, tart, and bursting with flavor. The perfect vibrant addition to your daily routine!',
    link: '#',
    colour: '#A51C30', 
  },
  {
    img: '/images/Apricots F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Apricots',
    h3: 'PREMIUM QUALITY', 
    h2: 'APRICOTS !',
    p: 'Golden, chewy, and rich in fiber. A burst of natural sunshine in every bite to keep you moving!',
    link: '#',
    colour: '#D97F27', 
  },
  {
    img: '/images/Almonds F.png',
    fallbackImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    alt: 'Almonds',
    h3: 'PREMIUM QUALITY', 
    h2: 'ALMONDS !',
    p: 'Crunchy, classic, and packed with protein. The ultimate everyday superfood for sustained energy!',
    link: '#',
    colour: '#C26732', 
  }
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // --- NEW SILENT PRELOADER ---
  // This downloads all 25 images into the browser cache the second the page loads
  // so there is zero delay when clicking next/prev arrows.
  useEffect(() => {
    products.forEach((product) => {
      const img = new window.Image()
      img.src = product.img
    })
  }, [])

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
    <div className="row car-holder wow fadeIn m-0 align-items-stretch" style={{ minHeight: '900px', position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .left-arrow-btn, .right-arrow-btn { 
          outline: none !important; 
          box-shadow: none !important; 
        }
        
        .left-arrow-btn:focus, .right-arrow-btn:focus {
          outline: none !important;
        }

        /* --- DESKTOP STYLES --- */
        .desktop-align { align-items: center; }

        .left-arrow-btn { left: calc(50% - 370px); }
        .right-arrow-btn { right: 30px; }

        .left-text-col { padding-left: 8%; padding-right: 380px; }
        .right-text-col { padding-left: 360px; padding-right: 140px; }

        .product-img-box { width: 650px; height: 950px; }
        
        .icon-top { top: 15%; right: 40px; }
        .icon-bottom { bottom: 15%; right: 40px; }

        @media (max-width: 1400px) {
          .product-img-box { width: 550px; height: 800px; }
          .left-arrow-btn { left: calc(50% - 310px); }
          .left-text-col { padding-right: 320px; }
          .right-text-col { padding-left: 310px; padding-right: 90px; }
          .icon-top { top: 10%; right: 20px; transform: scale(0.85); }
          .icon-bottom { bottom: 10%; right: 20px; transform: scale(0.85); }
        }

        @media (max-width: 1200px) {
          .floating-icon-group { display: none !important; }
          .left-arrow-btn { left: calc(50% - 250px); }
          .left-text-col { padding-right: 250px; }
          .right-text-col { padding-left: 250px; padding-right: 50px; }
          .product-img-box { width: 450px; height: 650px; }
        }

        /* --- FULL MOBILE OVERHAUL --- */
        @media (max-width: 991px) {
          .car-holder { min-height: auto !important; flex-direction: column !important; display: flex !important; }

          .desktop-align { align-items: flex-start !important; }
          .left-col-mobile { min-height: auto !important; width: 100% !important; }
          
          .right-col-mobile { 
            height: 520px !important; 
            min-height: 520px !important; 
            width: 70% !important; 
            margin-left: 30% !important; 
            align-items: center !important; 
            justify-content: flex-start !important; 
          }

          .left-text-col { padding: 3rem 1.5rem 1.5rem 1.5rem !important; text-align: center; }
          .left-text-col h2 { font-size: 2.5rem !important; }
          .separator { margin: 1rem auto !important; }

          .right-text-col { padding: 0 35px 0 130px !important; text-align: left; }
          .right-text-col h2 { font-size: 1.8rem !important; margin-bottom: 5px !important; }
          .right-text-col h3 { font-size: 0.8rem !important; letter-spacing: 1px !important; margin-bottom: 5px !important;}
          .right-text-col p { font-size: 0.8rem !important; line-height: 1.3 !important; max-width: 100% !important; }
          .right-text-col .btn { padding: 6px 16px !important; font-size: 0.8rem !important; margin-top: 10px !important; border-width: 2px !important; }

          .product-img-box {
            top: auto !important;
            bottom: 260px !important; 
            left: 30% !important; 
            transform: translate(-50%, 50%) !important;
            height: 420px !important; 
            width: 280px !important;
          }

          .left-arrow-btn {
            left: 5px !important;
            top: auto !important;
            bottom: 260px !important; 
            transform: translateY(50%) !important;
            font-size: 2.2rem !important;
          }
          .right-arrow-btn {
            right: 5px !important;
            top: auto !important;
            bottom: 260px !important;
            transform: translateY(50%) !important;
            font-size: 2.2rem !important;
          }

          .floating-icon-group { 
            display: flex !important; 
            transform: scale(0.6); 
            transform-origin: right center; 
            right: -5px !important; 
          }
          .icon-top { top: auto !important; bottom: 410px !important; }
          .icon-bottom { bottom: 30px !important; }
        }
      `}} />

      {/* LEFT COLUMN (White Section) */}
      <div className="col-lg-6 d-flex desktop-align left-col-mobile" style={{ backgroundColor: '#ffffff', zIndex: 2 }}>
        <div className="w-100 left-text-col">
          <h2 className="text-uppercase" style={{ fontWeight: 900, fontSize: '3.2rem', lineHeight: '1.2' }}>
            <span style={{ color: '#8b151b' }}>
              Snacks <br />
              that get <br />
            </span>
            <span style={{ color: '#d3121a', whiteSpace: 'nowrap' }}>you buzzing !</span>
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

      {/* RIGHT COLUMN (Colored Section) */}
      <motion.div 
        className="col-lg-6 position-relative d-flex desktop-align right-col-mobile"
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
        <div className="floating-icon-group icon-top" style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
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

        <div className="floating-icon-group icon-bottom" style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
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

        <button 
          className="right-arrow-btn"
          onClick={slideNext} 
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 30, background: 'none', border: 'none', color: 'white', fontSize: '3rem', cursor: 'pointer' }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </motion.div>

      {/* Left Arrow (Dynamic Color) */}
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