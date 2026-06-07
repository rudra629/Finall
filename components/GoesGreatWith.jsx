const icons = [
  { src: 'https://www.bazana.in/assets/images/icon-fitness.png',   alt: 'Best roasted snacks brands in India', label: 'Fitness'   },
  { src: 'https://www.bazana.in/assets/images/icon-chai.png',      alt: 'Roasted snacks manufacturers in India', label: 'Chai'    },
  { src: 'https://www.bazana.in/assets/images/icon-tiffin.png',    alt: 'veg roasted snacks',                    label: 'Tiffin'  },
  { src: 'https://www.bazana.in/assets/images/icon-study.png',     alt: 'buy roasted snacks online india',       label: 'Study'   },
  { src: 'https://www.bazana.in/assets/images/icon-travel.png',    alt: 'dry roasted snacks',                    label: 'Travel'  },
  { src: 'https://www.bazana.in/assets/images/icon-just-cause.png',alt: 'roasted snacks shop',                   label: 'Just Coz'},
]

export default function GoesGreatWith() {
  return (
    <div className="yellow-grad text-center wow fadeIn">
      <h2 className="text-uppercase text-center">Goes Great With</h2>
      <div className="flexer wow fadeIn">
        {icons.map(({ src, alt, label }) => (
          <div key={label}>
            <img src={src} alt={alt} />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
