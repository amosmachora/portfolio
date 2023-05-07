import interiorDesignOne from "../../Assets/Interior-design-one.jpg";
import interiorDesignTwo from "../../Assets/Interior-design-two.jpg";
import interiorDesignThree from "../../Assets/Interior-design-three.jpg";
import pharmaOneMain from "../../Assets/Pharmaone-main.png";
import pharmaOneTwo from "../../Assets/Pharmaone-second.png";
import pharmaOneThree from "../../Assets/Pharmaone-third.png";
import productPageOne from "../../Assets/productpagemain.jpg";
import productPageTwo from "../../Assets/productpagelightbox.jpg";
import productPageThree from "../../Assets/productpagemobile.jpg";
import tipCalculatorOne from "../../Assets/Tip-calculator.jpg";
import tipCalculatorTwo from "../../Assets/Tip-calculator-small.jpg";
import sunnySide from "../../Assets/Sunny-side.jpg";
import travelEarthOne from "../../Assets/travel-earth-black.png";
import travelEarthTwo from "../../Assets/travel-earth-brown.png";
import travelEarthThree from "../../Assets/travel-earth-yellow.png";
import spaceTourism from "../../Assets/space-tourism.jpg";
import cafeInspire from "../../Assets/CafeInspire.png";
import JavaScript from "../../Assets/Javascript.svg";
import React from "../../Assets/react.svg";
import Figma from "../../Assets/Figma.svg";
import MagloDashboard from "../../Assets/MagloDashboardBlack.png";
import MagloMyWallets from "../../Assets/MagloMyWallets.png";
import MagloSettings from "../../Assets/MagloSettings.png";
import Tailwind from "../../Assets/Tailwind.svg";
import BooklerOne from "../../Assets/Bookler (1).png";
import BooklerTwo from "../../Assets/Bookler (2).png";
import BooklerThree from "../../Assets/Bookler (3).png";
import BooklerFour from "../../Assets/Bookler (4).png";
import BooklerFive from "../../Assets/Bookler (5).png";

export type Project = {
  images: string[];
  category: string;
  description: string;
  title: string;
  live: string;
  github: string;
  languages: string[];
};

export const portFolioItems = [
  {
    images: [BooklerOne, BooklerTwo, BooklerThree, BooklerFour, BooklerFive],
    category: "Web Application",
    description:
      "Bookler is a simulated booking platform that provides a visually appealing user interface for viewing real-time flight, car rental, and hotel information. Although only accessible on desktop, it is highly recommended to give it a try. Authentication is managed through Firebase, and Google Maps React Library is used to provide interactive maps. Additionally, Bookler makes use of multiple APIs to handle real-time data flows for flights, car rentals, and hotels. This allows for seamless integration of information from various sources to provide up-to-date and accurate information for users.",
    title: "Bookler",
    live: "https://bookler-six.vercel.app/",
    github: "https://github.com/amosmachora/bookler",
    languages: [React, Figma, Tailwind],
  },
  {
    images: [MagloDashboard, MagloMyWallets, MagloSettings],
    category: "Dynamic Web Application",
    description:
      "A payment method called maglo. Currently in development, Supports dark mode",
    title: "Maglo",

    live: "https://maglo.vercel.app",
    github: "https://github.com/amosmachora/maglo",
    languages: [React, Figma, Tailwind],
  },
  {
    images: [interiorDesignOne, interiorDesignTwo, interiorDesignThree],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Interior Design Shop",
    live: "https://amosmachora.github.io/room-homepage/",
    github: "https://github.com/amosmachora/room-homepage",
    languages: [JavaScript, Figma],
  },
  {
    api: true,
    images: [pharmaOneMain, pharmaOneTwo, pharmaOneThree],
    category: "Application",
    description:
      "A pharmacy management application providing capabilities to sort, search , organize medicine into groups, delete medicines and visualize sales in graphs. All the data is pulled from a Java Api on AWS",
    title: "Pharmacy management application",
    live: "http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/",
    github: "https://github.com/amosmachora/pharmaone-frontend",
    figma:
      "https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A549",
    languages: [JavaScript, Figma, React],
  },
  {
    images: [productPageOne, productPageTwo, productPageThree],
    category: "Dynamic Landing Page",
    description:
      "A small product page that mimics adding item to cart and lightbox images viewing capabilities",
    title: "Product Page",
    live: "https://amosmachora.github.io/ecommerce-product-page/",
    github: "https://github.com/amosmachora/ecommerce-product-page",
    languages: [React],
  },
  {
    images: [tipCalculatorOne, tipCalculatorTwo],
    category: "Mini Project",
    description: "A tip calculator application. Obviously very useful",
    title: "Tip Calculator",
    live: "https://amosmachora.github.io/tipcalculatorapp/",
    github: "https://github.com/amosmachora/tipcalculatorapp",
    languages: [JavaScript],
  },
  {
    images: [sunnySide],
    category: "Landing Page",
    description: "A responsive , brightly coloured landing page",
    title: "SunnySide landing page",
    github: "https://github.com/amosmachora/sunnyside-agency-landing-page",
    live: "https://amosmachora.github.io/sunnyside-agency-landing-page/",
    languages: [JavaScript],
  },
  {
    images: [travelEarthOne, travelEarthTwo, travelEarthThree],
    category: "Landing Page",
    description:
      "A triple themed travel agency landing page. Themes switch automatically after 5 minutes, Text mostly in Lorem. ",
    title: "Travel The Earth",
    github: "https://github.com/amosmachora/travelearth",
    live: "https://amosmachora.github.io/travelearth/",
    figma:
      "https://www.figma.com/file/RAG76w0n9MtMOhbDU8RXWT/Travel-Agency-Landing-Page-(Community)?node-id=0%3A1",
    languages: [React, Figma],
  },
  {
    images: [spaceTourism],
    category: "Landing Page",
    description: "A multi-page NASA themed landing page",
    title: "Space tourism website",
    github: "https://github.com/amosmachora/space-tourism",
    live: "https://amosmachora.github.io/space-tourism/",
    figma:
      "https://www.figma.com/file/ySQbyd9GdUtaQLwD4rWuvq/space-tourism-website?node-id=0%3A1529",
    languages: [React, Figma],
  },
  {
    images: [cafeInspire],
    category: "Landing Page",
    description: "A cafe landing page",
    title: "Modern UI/UX landing page",
    github: "https://github.com/amosmachora/Cafeinspire",
    live: "https://amosmachora.github.io/Cafeinspire/",
    figma:
      "https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2",
    languages: [React, Figma],
  },
];
