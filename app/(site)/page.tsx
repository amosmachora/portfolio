import HomePageSlides from "@/components/HomePageSlides";
import { IconRound } from "@/components/IconRound";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import { getNumberOfProjects } from "@/util/utils";
import { Metadata } from "next";
import Image from "next/image";
import "../../css/start-page.css";
import arrow from "../../public/Arrow.png";

export const metadata: Metadata = {
  title: "Amos Machora | Portfolio",
  description:
    "Welcome to my portfolio 🎂. View some of my personal and client projects.",
};

export default async function Home() {
  const numberOfProjects = await getNumberOfProjects();
  return (
    <main className="start-page-div">
      <HomePageSlides />
      <div className="white-banner flex">
        <p className="capitalize satisfied">
          Number of completed personal and client projects
        </p>
        <p className="my-projects">My projects</p>
        <div className="banner-center">
          <p className="number">{numberOfProjects}+</p>
          <p className="describe">
            The number of personal and freelance projects i have successfully
            completed in my freelance development career. This number is
            continuously growing, talk to me and take advantage of my unique
            services.
          </p>
          <p className="capitalize cooperation">
            <span className="text-xl text-black font-semibold">
              Core Values
            </span>{" "}
            <br />
            Cooperation, communication and satisfaction with multiple companies
            around the globe
          </p>
        </div>
      </div>
      <div className="my-portfolio-services">
        <div>
          <IconRound />
          <p className="my-portfolio">
            Why hire <br /> me?
          </p>
          <Image
            src="https://images.pexels.com/photos/6340796/pexels-photo-6340796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People Looking at computer"
            className="people-looking-at-computer"
            width={1260}
            height={750}
          />
        </div>
        <div className="flex space-between">
          <div className="flex-v">
            <p className="service-number">01</p>
            <h2 className="service-title">Experience</h2>
            <p className="bluish">
              Experience is the best teacher they say. I have been in the web
              development industry for over 2 years and i have worked with a lot
              of clients.You want a site fast? You get a site fast.So the
              question is; do you want the best?
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">02</p>
            <h2 className="service-title">Quality Assurance</h2>
            <p className="bluish">
              Search Engine Optimization, Multiple device support, legacy
              browser support , Fast Loading Speeds, Data caching, you name it.
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">03</p>
            <h2 className="service-title">Integrate payments</h2>
            <p className="bluish">
              You want to create a page where people can buy goods from your
              page using different payment methods like Paypal , Stripe and
              M-Pesa?
            </p>
          </div>
        </div>
      </div>
      <div className="i-create-gold flex">
        <Image
          src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pharmacy application"
          height={750}
          width={1260}
        />
        <div>
          <h2>So what have i done before?</h2>
          <h3>
            I have worked with clients to build fast scalable responsive and
            highly dynamic sites.
          </h3>
          <h3>
            Harnessing the power of NextJS , and Backend as a Service providers
            like convex and firebase it has never been easier to create full
            stack apps. Check out some of my previous projects in my portfolio.
          </h3>
          <div className="flex align-center">
            <div className="img-container relative">
              <Image src={arrow} alt="Arrow" className="center-absolutely" />
            </div>
            <p>Portfolio</p>
          </div>
          <p className="greyish">
            Visit my portfolio section to preview sites, view original design
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
