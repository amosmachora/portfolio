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

export const portFolioItems = [
  {
    image: [interiorDesignOne, interiorDesignTwo, interiorDesignThree],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Interior Design Shop",
    live: "https://amohprince.github.io/room-homepage/",
    github: "https://github.com/AmohPrince/room-homepage",
    languages: [JavaScript, Figma],
  },
  {
    api: true,
    image: [pharmaOneMain, pharmaOneTwo, pharmaOneThree],
    category: "Application",
    description:
      "A pharmacy management application providing capabilities to sort, search , organize medicine into groups, delete medicines and visualize sales in graphs. All the data is pulled from a Java Api on AWS",
    title: "Pharmacy management application",
    live: "https://pharmaone.vercel.app/",
    github: "https://github.com/AmohPrince/pharmaone-frontend",
    figma:
      "https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A549",
    languages: [JavaScript, Figma, React],
  },
  {
    image: [productPageOne, productPageTwo, productPageThree],
    category: "Dynamic Landing Page",
    description:
      "A small product page that mimics adding item to cart and lightbox image viewing capabilities",
    title: "Product Page",
    live: "https://amohprince.github.io/ecommerce-product-page/",
    github: "https://github.com/AmohPrince/ecommerce-product-page",
    languages: [React],
  },
  {
    image: [tipCalculatorOne, tipCalculatorTwo],
    category: "Mini Project",
    description: "A tip calculator application. Obviously very useful",
    title: "Tip Calculator",
    live: "https://amohprince.github.io/tipcalculatorapp/",
    github: "https://github.com/AmohPrince/tipcalculatorapp",
    languages: [JavaScript],
  },
  {
    image: [sunnySide],
    category: "Landing Page",
    description: "A responsive , brightly coloured landing page",
    title: "SunnySide landing page",
    github: "https://github.com/AmohPrince/sunnyside-agency-landing-page",
    live: "https://amohprince.github.io/sunnyside-agency-landing-page/",
    languages: [JavaScript],
  },
  {
    image: [travelEarthOne, travelEarthTwo, travelEarthThree],
    category: "Landing Page",
    description:
      "A triple themed travel agency landing page. Themes switch automatically after 5 minutes, Text mostly in Lorem. ",
    title: "Travel The Earth",
    github: "https://github.com/AmohPrince/travelearth",
    live: "https://amohprince.github.io/travelearth/",
    figma:
      "https://www.figma.com/file/RAG76w0n9MtMOhbDU8RXWT/Travel-Agency-Landing-Page-(Community)?node-id=0%3A1",
    languages: [React, Figma],
  },
  {
    image: [spaceTourism],
    category: "Landing Page",
    description: "A multi-page NASA themed landing page",
    title: "Space tourism website",
    github: "https://github.com/AmohPrince/space-tourism",
    live: "https://amohprince.github.io/space-tourism/",
    figma:
      "https://www.figma.com/file/ySQbyd9GdUtaQLwD4rWuvq/space-tourism-website?node-id=0%3A1529",
    languages: [React, Figma],
  },
  {
    image: [cafeInspire],
    category: "Landing Page",
    description: "A cafe landing page",
    title: "Modern UI/UX landing page",
    github: "https://github.com/AmohPrince/Cafeinspire",
    live: "https://amohprince.github.io/Cafeinspire/",
    figma:
      "https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2",
    languages: [React, Figma],
  },
];
