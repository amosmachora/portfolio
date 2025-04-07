import { default as bidsyncone } from "public/images/bidsyncone.png";
import { default as bidsynctwo } from "public/images/bidsynctwo.png";
import { default as darajaKit } from "public/images/daraja-kit.png";
import { default as kenyaemrone } from "public/images/kenyaemr-one.png";
import { default as kenyaemrtwo } from "public/images/kenyaemr-two.png";
import { default as oots } from "public/images/oots.png";
import { default as openmrsone } from "public/images/openmrs-one.png";
import { default as openmrstwo } from "public/images/openmrs-two.png";
import { default as ukuzione } from "public/images/ukuzistudioone.png";
import { default as ukuzitwo } from "public/images/ukuzistudiotwo.png";

export const products = [
  {
    href: "https://dev.kenyahmis.org",
    title: "KenyaEMR",
    description:
      "KenyaEMR is a open source EMR system used in Kenya. It is based on Openmrs 3 and is majorly maintained by Palladium Kenya.",
    thumbnail: kenyaemrone,
    images: [kenyaemrone, kenyaemrtwo],
    stack: ["Typescript", "React", "pnpm", "OpenMRS"],
    slug: "openmrs",
    content: (
      <div>
        <p>
          As of September 2024, KenyaEMR has been deployed in over 2,300 health
          facilities across Kenya The system is now implemented in 44 out of 47
          counties, supported by 33 service delivery partners, and manages data
          for over 80% of ART patients in the country
        </p>
        <p>
          I have spent a lot of time contributing to this project, I made the
          EMRs Mpesa integration for example alongside fixing other issues
          across majorly the billing module. You can view my contributions by
          clicking{" "}
          <a
            href="https://github.com/palladiumkenya/kenyaemr-esm-3.x/pulls?q=is%3Apr+is%3Aclosed+author%3Aamosmachora"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <p>
          You can use the below link to visit the development test instance and
          learn more. You can use the credentials Admin / Admin123 to
          authenticate yourself.
        </p>
      </div>
    ),
  },
  {
    href: "https://dev3.openmrs.org/",
    title: "Openmrs",
    description:
      "I am a seasoned contributor to the open source OpenMRS project. I have contributed to the project by fixing tons bugs and adding new features.",
    thumbnail: openmrsone,
    images: [openmrsone, openmrstwo],
    stack: ["Typescript", "React", "pnpm", "OpenMRS"],
    slug: "openmrs",
    content: (
      <div>
        <p>
          I have contributed to Openmrs 3 for a long time. You can view my
          contributions across the{" "}
          <a
            href="https://github.com/openmrs/openmrs-esm-patient-chart/pulls?q=is%3Apr+author%3Aamosmachora+is%3Aclosed"
            target="_blank"
            rel="noopener noreferrer"
          >
            patient chart
          </a>
          ,{" "}
          <a
            href="https://github.com/openmrs/openmrs-esm-patient-management/pulls?q=is%3Apr+author%3Aamosmachora+is%3Aclosed"
            target="_blank"
            rel="noopener noreferrer"
          >
            patient management
          </a>
          ,{" "}
          <a
            href="https://github.com/openmrs/openmrs-esm-laboratory-app/pulls?q=is%3Apr+author%3Aamosmachora+is%3Aclosed"
            target="_blank"
            rel="noopener noreferrer"
          >
            laboratory esm
          </a>{" "}
          and other repos.
        </p>
        <p>
          I am a member of the openmrs community and work together with others
          world wide daily to discuss issues, fix bugs, open and close tickets
          etc etc.
        </p>
        <p>
          I also won best upcoming contributor of the year 2024 at the annual
          implementors conference by my contributions to KenyaEMR (a openmrs
          distro) and OpenMRS 3.
        </p>
        <p>
          You can use the below link to visit the openmrs reference application
          and learn more. You can use the credentials Admin / Admin123 to
          authenticate yourself.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/amosmachora/daraja-kit",
    title: "Daraja Kit",
    description:
      "A typescript library designed to simplify interactions with the Safaricom Daraja API.",
    thumbnail: darajaKit,
    images: [darajaKit],
    stack: ["Typescript", "Changesets", "Nextra", "pnpm"],
    slug: "daraja-kit",
    content: (
      <div>
        <p>
          It is a collection of types and utility functions that significantly
          improve the developer expereience when integrating Safaricom`s daraja
          api.
        </p>
        <h2>Benefits</h2>
        <p>
          If you are a developer here are the advantages of using the library in
          your own apps.
        </p>
        <ul>
          <li>Way simpler API over using daraja on your own. Open source!</li>
          <li>Open source!</li>
          <li>
            Slow integration. You don`t have to hot swap this library. You can
            easily integrate it to your app.
          </li>
          <li>
            More Util Functions. If you need to generate passwords if you have
            decided to slowly integrate the app offers helper functions to help
            you move along nicely. e.g generateTimestamp and generatePassword.
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://www.outofthestreet.org/",
    title: "Out of the street website",
    description:
      "Out of the Street is a non-profit organization in Nairobi Kenya whose mission is to improve the lives of as many street children as possible.",
    thumbnail: oots,
    images: [oots],
    stack: ["Typescript", "NextJS", "Sanity", "Tailwind CSS", "React"],
    slug: "out-of-the-street",
    content: (
      <div>
        <p>
          I decided to donate my skills to create a visually appealing website
          from which they would collect donations to help with their course.
        </p>
        <p>
          Built with NextJS, Tailwind CSS, and React the website is great.
          Potential donors can donate with Mpesa and or Paypal.
        </p>
        <p>
          The site also has a gallery where users can view photos of previous
          events.
        </p>
        <p>
          The site is integrated with Sanity CMS to ensure adding new events and
          news articles is as smooth as possible.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.ukuzistudio.com/",
    title: "Ukuzi Studio & Construction",
    description:
      "Ukuzi Studio and Construction is a website I created for an architectural design startup. Complete e-commerce store for selling architectural designs.",
    thumbnail: ukuzione,
    images: [ukuzione, ukuzitwo],
    stack: [
      "Typescript",
      "NextJS",
      "Sanity",
      "Tailwind CSS",
      "React",
      "Paypal",
      "M-pesa",
    ],
    slug: "ukuzi-studio",
    content: (
      <div>
        <p>
          I&apos;ve developed a comprehensive e-commerce platform for our
          client, featuring seamless payment integration through popular methods
          such as PayPal and Mpesa. The website boasts a user-friendly landing
          page where visitors can explore information about Ukuzi Studio and
          conveniently book consultations directly. The site is equipped with a
          notification system, ensuring that the site administrator stays
          informed via email.
        </p>
        <p>
          Additionally, the application includes an authenticated admin panel,
          facilitating effortless CRUD operations for managing the site&apos;s
          projects.
        </p>
      </div>
    ),
  },
  {
    href: "https://bidsync.vercel.app/",
    title: "Bidsync",
    description:
      "Bidsync is a hackathon submission. The hackathon was held by youtuber WebDevCody. While i did not win the hackathon i came fourth and won a price.",
    thumbnail: bidsyncone,
    images: [bidsyncone, bidsynctwo],
    stack: [
      "Typescript",
      "NextJS",
      "Tailwind CSS",
      "React",
      "Convex",
      "Clerk",
      "Figma",
    ],
    slug: "bid-sync",
    content: (
      <div>
        <p>
          Bidsync is a collaborative highly interactive bidding platform where
          people should be able to bid on items and have their items bid on.
        </p>
        <p>
          Built with convex as the backend as a service platform and clerk for
          authentication the project was a massive success.
        </p>
        <p>
          Has a private chat room, notification systems,bid item histories, and
          much much more.
        </p>
        <p>
          I learned a lot about web sockets, database schemas, and clerk auth. I
          also won a prize which makes me happy to this day.
        </p>
      </div>
    ),
  },
];
