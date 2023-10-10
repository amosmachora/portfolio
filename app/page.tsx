import HomePageSlides from "@/components/HomePageSlides";
import { IconRound } from "@/components/IconRound";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import "../css/start-page.css";

export default function Home() {
  return (
    <main className="start-page-div">
      <HomePageSlides />
      <div className="white-banner flex">
        <p className="capitalize satisfied">Number of satisfied clients</p>
        <p className="my-projects">My projects</p>
        <div className="banner-center">
          <p className="number">12+</p>
          <p className="describe">
            I already have a number of satisfied clients with which i have had
            multiple successful projects. This —number is continuously growing,
            talk to me and take advantage of my unique services.
          </p>
          <p className="capitalize cooperation">
            Cooperation, communication and satisfaction with multiple companies
            around the globe
          </p>
        </div>
      </div>
      <div className="my-portfolio-services">
        <div>
          <IconRound />
          <p className="my-portfolio">
            My Portfolio <br /> services
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/6340796/pexels-photo-6340796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People Looking at computer"
            className="people-looking-at-computer"
          />
        </div>
        <div className="flex space-between">
          <div className="flex-v">
            <p className="service-number">01</p>
            <h2 className="service-title">Experience</h2>
            <p className="bluish">
              Experience is the best teacher they say. I have been in the web
              development industry for over 4 years and i have worked with a lot
              of clients. You want the best ? you`ve got the best.
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">02</p>
            <h2 className="service-title">Quality Assurance</h2>
            <p className="bluish">
              Search Engine Optimization, Multiple device support, legacy
              browser support , Fast Loading Speeds, Data caching, you name it.
              I&apos;ve got it all
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">03</p>
            <h2 className="service-title">Freelance Work</h2>
            <p className="bluish">
              I also work online, all you need is send me an email and i will
              respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="i-create-gold flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pharmacy application"
        />
        <div>
          <h2>I create Api consuming web apps</h2>
          <h3>
            Data flows from multiple sources. Work with me see how you can
            represent the data in clean UI
          </h3>
          <div className="flex align-center">
            <div className="img-container relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"/Arrow.png"}
                alt="Arrow"
                className="center-absolutely"
              />
            </div>
            <p>Projects</p>
          </div>
          <p className="greyish">
            Visit my projects section to preview sites, view original design
            files and inspect the source code.
          </p>
          <ReadMore
            text="Check out my portfolio"
            link="portfolio"
            className="text-black hover:border-orange"
          />
        </div>
      </div>
    </main>
  );
}
