import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* -------------------------------------------------------
   Slide data - Updated with high-quality Unsplash Images
   ------------------------------------------------------ */
const mobileSlides = [
  { img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&q=80', alt: 'Premium Almonds', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', alt: 'Fitness Lifestyle', h2: 'Power in', h1: 'Small Packs !', p: "Fuel your daily workout.", btn: true },
  { img: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80', alt: 'Trail Mix', h2: 'Crunchy ! Salty ! Sweet ! TRAIL MIX !', h1: 'CRANBERRY FUSION!', p: 'Mix it up! Change your snack, Change your life!', btn: true },
  { img: 'https://images.unsplash.com/photo-1536591375315-779cb53b3fdd?w=800&q=80', alt: 'Roasted Nuts', h2: 'The Power of', h1: 'Roasted Snacks !', p: 'Not Fried ! No Oil !', btn: true },
  { img: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=800&q=80', alt: 'Walnuts', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1619586111742-02687df2a00c?w=800&q=80', alt: 'Cashews', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80', alt: 'Healthy Diet', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1598218520286-90cb878dd5ea?w=800&q=80', alt: 'Pistachios', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80', alt: 'Granola and Nuts', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1600189020963-356c9a405d4b?w=800&q=80', alt: 'Gluten Free Snacks', h2: 'A Gluten-Free Snack', h1: 'With Zesty Flavors', p: '', btn: true },
]

const desktopSlides = [
  { img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=1920&q=80', alt: 'Premium Almonds', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80', alt: 'Fitness Lifestyle', h2: 'Power in', h1: 'Small Packs !', p: "Fuel your daily workout.", btn: true },
  { img: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=1920&q=80', alt: 'Trail Mix', h2: 'Crunchy ! Salty ! Sweet ! TRAIL MIX !', h1: 'CRANBERRY FUSION!', p: 'Mix it up! Change your snack, Change your life!', btn: true },
  { img: 'https://images.unsplash.com/photo-1536591375315-779cb53b3fdd?w=1920&q=80', alt: 'Roasted Nuts', h2: 'The Power of', h1: 'Roasted Snacks !', p: 'Not Fried ! No Oil !', btn: true },
  { img: 'https://images.unsplash.com/photo-1595111166405-b063ee34863f?w=1920&q=80', alt: 'Walnuts', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1619586111742-02687df2a00c?w=1920&q=80', alt: 'Cashews', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80', alt: 'Healthy Diet', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1598218520286-90cb878dd5ea?w=1920&q=80', alt: 'Pistachios', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=1920&q=80', alt: 'Granola and Nuts', h2: '', h1: '', p: '', btn: false },
  { img: 'https://images.unsplash.com/photo-1600189020963-356c9a405d4b?w=1920&q=80', alt: 'Gluten Free Snacks', h2: 'A Gluten-Free Snack', h1: 'With Zesty Flavors', p: '', btn: true },
]

/* -------------------------------------------------------
   Animated Carousel Renderer
   ------------------------------------------------------ */
function CarouselTrack({ slides, id }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000) 
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="carousel-root" id={id}>
      <style>{`
        /* Removed max-height and added min-height: 600px */
        .carousel-root { position: relative; overflow: hidden; width: 100%; background: #000; height: 100vh; min-height: 600px; }
        
        .c-dots { 
          position: absolute; 
          top: 50%; 
          right: 30px; 
          transform: translateY(-50%); 
          display: flex; 
          flex-direction: column; 
          gap: 12px; 
          z-index: 10; 
        }
        
        .c-dot { 
          width: 14px; 
          height: 14px; 
          border-radius: 50%; 
          background: rgba(255,255,255,.4); 
          cursor: pointer; 
          transition: all .3s ease; 
          border: 2px solid transparent;
        }
        
        .c-dot:hover { background: rgba(255,255,255,.7); }
        .c-dot.active { 
          background: #fff; 
          box-shadow: 0 0 8px rgba(255,255,255,0.8); 
          transform: scale(1.2);
        }
        
        .slide-container { position: absolute; inset: 0; width: 100%; height: 100%; }
        .slider-img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.8; }
        .the-cap { position: absolute; top: 50%; left: 10%; transform: translateY(-50%); z-index: 5; color: white; text-shadow: 0 4px 15px rgba(0,0,0,0.8); max-width: 600px; }
        .the-cap h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 10px; }
        .the-cap h2 { font-size: 2rem; font-weight: 300; }
        .the-cap p { font-size: 1.2rem; }
      `}</style>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="slide-container"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} 
        >
          {/* Black gradient overlay to make text pop against bright images */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', zIndex: 1 }} />
          
          <img src={slides[currentIndex].img} alt={slides[currentIndex].alt} className="slider-img" />
          
          {(slides[currentIndex].h1 || slides[currentIndex].h2 || slides[currentIndex].p || slides[currentIndex].btn) && (
            <motion.div 
              className="the-cap"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ zIndex: 5 }}
            >
              {slides[currentIndex].h2 && <h2>{slides[currentIndex].h2}</h2>}
              {slides[currentIndex].h1 && <h1>{slides[currentIndex].h1}</h1>}
              {slides[currentIndex].p  && <p>{slides[currentIndex].p}</p>}
              {slides[currentIndex].btn && (
                <a href="#" className="btn btn-warning btn-lg mt-3 fw-bold" style={{ color: 'white' }}>
                  Buy Now
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="c-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`c-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   Exported component
   ------------------------------------------------------ */
export default function HeroCarousel() {
  return (
    <div className="carousels wow fadeIn">
      <div className="d-block d-lg-none">
        <CarouselTrack slides={mobileSlides} id="carousel-mobile" />
      </div>
      <div className="d-none d-lg-block">
        <CarouselTrack slides={desktopSlides} id="carousel-desktop" />
      </div>
    </div>
  )
}