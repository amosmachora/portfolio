import { default as darajaKit } from "public/images/daraja-kit.png";

export const products = [
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
];
