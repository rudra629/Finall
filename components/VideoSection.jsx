export default function VideoSection() {
  return (
    <div className="relative">
      {/* Floating nut images */}
      <div className="wob-images">
        <img src="https://www.bazana.in/assets/images/about-us/Bazana-Foods-About-Cashews.png"   alt="Salted Cashew"    className="d-none w-cash wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/salted-pistachio.png"             alt="Salted Pistachio" className="d-none w-pista wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/almond.png"                       alt="Almond"           className="d-none w-almond wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/left-almond.png"                  alt="Almond"           className="d-none w-almond-left wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/sunflower-seed.png"               alt="Sunflower Seed"   className="d-none w-sunflower wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/right-cashew.png"                 alt="Cashew"           className="d-none w-cash-right d-none wow fadeIn" />
        <img src="https://www.bazana.in/assets/images/about-us/salted-pistachio.png"             alt="Pistachio"        className="d-none w-pista-right wow fadeIn" />
      </div>

      <div className="video-hold flexer row wow fadeIn">
        {/* Video */}
        <div className="col-sm-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_biSpR4a6xY?rel=0"
            className="the-video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Bazana! Roasted Not Fried! No Oil Snacks!"
          />
        </div>

        {/* Text */}
        <div className="col-sm-6">
          <div className="snack-info">
            <h3>Snack Time, Elevated: Goodness in Every Bite!</h3>
            <p>
              How many times have you been at a Kirana shop, railway platform, or in a rush leaving
              home and wished you could have a healthy on-the-go snack? We get it! In a world full
              of fried foods and sugar filled chocolates, our mission is to give you another option.
            </p>
            <p>
              Mom always told us to eat healthier foods, obviously! But can we get a little more
              flavor in the world? Yup, we can and we did!
            </p>
            <h4>Everywhere in reach of everyone!&nbsp;</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
