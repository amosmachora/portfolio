import { assets } from "@/assets/assets";
import { StaticImageData } from "next/image";
import portfolio1 from "../public/portfolio(1).png";
import portfolio2 from "../public/portfolio(2).png";
import webtechafrica1 from "../public/webtechafrica(1).png";
import webtechafrica2 from "../public/webtechafrica(2).png";
import webtechafrica3 from "../public/webtechafrica(3).png";

export type Project = {
  images: string[] | StaticImageData[];
  category: string;
  description: string;
  title: string;
  live?: string;
  github?: string;
  languages: string[];
  openSourceLibraries?: string[];
  figma?: string;
  videoURL?: string;
  desktopOnly?: boolean;
  textParagraphs?: string[];
};

const booklerScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4mWOunKATiarSsayKyzcd4IlxcsNiYiBbbPIRNH9Tgdb9PsVnXxj6Be-vao81B8gLkZnlbroR9quilioF043KMI9IoWm3rXE1okUn8uYvHxyC_k3pUTRmrgDdqws-P9KRLCvcUqsmi83z-9YqOc4QEit5HICB3fWnIhGzwSA2w7hA_50WbHt2EFCZOpjP23A3b?width=1365&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mZbvqFupHZIrUhiTl-t_xc1BxWMeZBhVifSgh-icG1XoKdhuL18qBjQl6P_xt3aIVUK7-GO905sGGNIjIKSB4HoigTRGFL8t2KmrHIUhuFAu9X7DCqhwOrJyGInKxrN67YTur9DYpXzRbTHY07asik6NrEhMIvJ70prvbi71ICllBV4eeC-wwLaADl-Ux_J30?width=1359&height=656&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mq-vw0kQ1SI3wohtnOmf5LEBGX3ekAi9yu6bal30Dk7jBEbm20EpHqIk9wFksrmkJFnlvJzp0ao04Ac1v94hkXvJn0_tWq0V-jKABkc2mCU3AxD2XdCfOUTP3ArlNMf_R6nhdWpPkuQvvLvx3kvEU3LOFcU880dcfjvfSyS1LDzaQkEi_KSR27g4Y_mG_KLvX?width=1360&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mD7dwzMWyKYIRWcB04H7OUUTCpKv1AHwHIQw8mAF-8lVY1C_lmhQSlbe2gPMuz862H8GxTm1pSnA64qab3qEybvGzIvhnS0wkSRifOUbSPlwNN3JzbFmzM5Mixt3-mkm4YYZ_XvS4ZZL7psAMhSsvLkCOWnzXP3HzTYkvARWxbmKgHqkkQjWIE2YHI0O0erSn?width=1360&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mKKsiVusL6dp7aFas_koWNcofj8LT2eLmjRKoDmoC9a44S1tpDXxck943_KtkfS5nqkAendLCfEaRnloVVP7T8mp_AyCSvcIRSOpzmDpccSnODe8o-EOicVtN8W89A-Xzk21fkF5oJ_88MDnJfqQUH1LwmLlCtp3TZMj4GgrF2N0DcS6WJtZ8adWSZEFavK4Z?width=1365&height=655&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m_QeYrgpL_D7rOh8aMOtUtDDrRf3k3yVjvvx6qW3NL5pgOL6c0Y27osVOH-xYOHNQbnkh-RzrXIuponmIpu7LghCKh4EN6MdgObO6Owr-y0dHtaXNew0-UedQ-c_2csnJXJdKLpj1_ERKQM_73U0rtKIoIUxorlkqGEIxYmGUfbmqnpsd-wB4KnC6GFqucDGz?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m350YNKrG-bDASdYrJaLVGJCAXg04tJVQRUkx-yIPEl27xLkPyBYx9FVHx-7k8mgXs5js7IopxzdIvyawIFymuDej1iseMg-FpsWuiPzXNy_jH_FymffFiiRa9DVVl2EdaYlXdwX6UhlA6E7xMZal_5jAQRDuA7omlrel9Lye8b3BA_45dI5WZxb-Qb8W6vfK?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mETuEDldSjvEaOXgMXiDMgmKvSnXiECienfdQfGdyDwBkQgQNKaRyw69k14Vxxvv42B1x5_Z16ufbQjN1VIAOzcZj6ACxKlyfSuRiLu07vLTLGmXyfzTMCo3S1p0nGBWmODCjKQzwBMqfJC8wPoYQ0Iz-Zigm7Jg2evJwxVVADygdc3o-0M8HIlBoLY450QCq?width=1365&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m9-djDVU9dNuD_opqKp7rw2JrAXbb3EOsCrDe8SoI3peXL6LfFBlT3AbDu5mILb-Q9L-5tgAlW9BD1XIj8H9dkWal3Bw4xBczfHzHMf0Vxj1oBXYT5Khn3w5nMiUTcOtIzlB2DXhj1zJ8L-vyKSo4Qg1e2Kx9gmrucSDamayztQLFQVAbY8lP8G4UzRysNZoF?width=1366&height=665&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mSZvz1mEl9pgJvvhRXEwEaumi5lpP6ilp_umPF3wmVplmrbRF-5hnZYNZHaYabbfCh2aEfVJL2JRDARFLtA1POgcZh5VjPsGHahKXuHFpg-y7yYkUbcPDiF2kPSumVCh_OhCQ3UBHEebBhbUPwFW7j2Gu5cu632EvGaLb4nMowITsh9UwoJhf_xc-4-VcNoI8?width=1365&height=658&cropmode=none",
];

const magloScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4m3kJrKWGBo5y28Q1PhoIUwxDp6WEOcBaQ5PTpezDnuRKMCND3YcsM_KWNjghvE7yECciSSRcuFBp9yWQzHJd02-vmBLdBCNpld4E-pWH8EAONpd_I-S5-hRRcMd_z3qdlJm0fYwD-0CM-zrC4fhIj1aEfUzwkDNX7Gmb1ORRKMn-Sp18ba8REbMxwEw1XTKgZ?width=1365&height=661&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mWqJYCbir1xpySvsJGTxMJU3vwVj74buFdTHJQcxFndRubCjVjPbJUP8HVGSG-PofTS3hWtyvD_HDRL-5dFFBUfficAB4pezAjddTYD1ykPveioyR8rG0PkMUzDitLqDXMihs3hA9ToCIAcEnSysEW1-WHmCpX9KBF_z4GC_lAoUPl9p-0poEDh0fGhZKdgtw?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mXYXuj2AzF5KWVqEOTATpFHLQNJcouXCI_AKTNZbvRc-SwyUM0oFcCfowivcMqPgOfPIPI2SbOSImd5AdfPVrcT6YjzrBheBDcJtpSiMI_GDpsjVED9IeAKRPTzaERhXRdjELFyCpVweYINdAFNY5j530SyeS0uSmXfUmB8ma8Yj-zsv10kFEJASO-M2WMulT?width=1365&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4maTlJQVkpMBXEDIMA3EpmcsLeUnRp2GrVVHemgqoP0Iip3rizo2yfNpGLr8EeuQj5PJ5FWRyYZE0nSl-0iWwJj9VNdJf7AhFmiVeU4hmRMG-_GuFRWka4__G-e6n7BmIc9V05fMcwKMigFbAHhbpxckTfR3I0oueVXEEMkpszHvHHf0oBTCOAaDJYfZFhFgOL?width=1365&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mQUYRwW9DIq3tWVKLiYNO7hm8t5YoSoUlCGDLDayEYOOs41_dX6XvOIynBOYaIcFZ40duDVZhxvP06cUN-_TVNpp__ZshCu7q3yoWks8o_4MFwHu5LR8DByUzu-lpCeJMX3KZcts0mTGXxIxRd86ZJDsDGWAZdWHnG98mUenCxLjK_kO10T5ctdFdWgGNwBFg?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mChpB2UkgmYSGftmNJTR9q226RCi2dLg3Jd0QuQcOKoLLnjvxrJn3kLOtbHW2y_J_ZmLiqczAR0spnTbsuFt7Z2O-12hiTGIf0k2OFWwqmacWpE26lgN25SiFMc04O8BCUdzbPUYKxl81Oz5kQ-nwTi-MvQmX-dk-oMJqGlCfkXntJMLXtszAvB4v3xwSzLA0?width=1365&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mYngDPvgTrfPhPiYHG4CBHjIDNYsJoHp3-9AlaKjVFE9gZGnJ5ja4R2QGol-i_aiAbdNZa0Ci4LYQjCOacIAlJQPkyKWXtm7ekLF-a_4lgk1-BFiCRKXiwlOIRCc9_7TyGgM2CFUN-bFbiXVc04-wWvZr1vSBxjB0Qi3jlx7vX5jDNr8raJ9uJhTayzPJTohT?width=1365&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mo7PwUMVQdZqVdxGYyAPvckjE6F_qRmE9aK-w1S5MW54PmCoMHiGt5fMo34-z2Cg9pOSwLQfUI7pwnv_30bJEW6upoqQ9unzgr8VaEd-g82zUxfgUkLInrWqVbjM9WT6vBsv9XprUs6nwMBGtqf9tAB4YBWnP6Bj_oEK49UU-I0RgYd8dklUJhZeJZEiAwd9W?width=1365&height=662&cropmode=none",
];

const interiorDesignShopLinks = [
  "https://bnz05pap001files.storage.live.com/y4mNzwEeMBG9mWuvRYSeWVMRgVjtvzVP5ocN0PdNCfw86d4LGyAD6xkICYNQ8nHiOfnvo3JAUPAiGNWmEU25b48pMKv_izF9ovlRJ-8VTuVGVluEUx9TtKJo7tGgpIOE8oy7GHdub_hHJfTRNloHZxON7HbOwh1wq6mfQhFDmEnJH9ENdGck9B1cpGIqjJzSqVG?width=1360&height=661&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mr9wZ3L5sEy9ZQdoY0PKR3l89P9giYA0Tm8yM8xmGMyCKVbY_vqdCoPNkCQbryk9ZPgQV_gpGo1gWKCtwY5BA0rVHRf_f-e5CIDiZP6T400qb1WWEsy62iIrf4TNsRofQurrNOSgg71loZOabVRu0PpfTZ0vKOvrWc_zXqOQSaWKB0acSsdPjirsbOCq-9TO5?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mCEZRFiBrJTz1sZxYreMZN-m6qEQv9MapUSxvyvd9-R4u3XkxrwZzNmfcepiZeL5BGjbx-BQCyUCGFDuIiKZ4ctevBEltdBX6aeTYlx96ry4uZCWfSDMJ9UQtdpwXoosOkI4C053KCWogrd_mn6MadK_xOMBFnANQOFK3nJaAipv6qE5APCNePfuz30ajQLxw?width=1360&height=662&cropmode=none",
];

const spaceTourismLinks = [
  "https://bnz05pap001files.storage.live.com/y4m2zw1MBdaHnKUjJOEetg9OQanePC6vSBhkps70PG5eHAV89HXk0YoE-yWvUyRhSqYK9Ajtv_2TwrYb452tQqjma7xxa769-6k1H2aLLxJ9a1zsdPFI71FlMgXT-p-aTecnOcFTaJioPG89zqlGfLkgnbHAC9W8SuTPG-TdjI4Ykn8s44bc25NE_yn7XyV_fuU?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m2UmdRRTk8NR6nhDYHtex1TSpKZilyjM2vC_ahmfOjGrfc3DxOHZUebxjUra9Xl0rqkuCMWqZgKrp_j2e3eyC48ViVsoD8tQ3VB51LANkltHz50pBGZPfoc8WGEAwi28SZGjnF5AMR7dNLSmpzAZ3Jb0Uanp_eJGGBmA7juSj7iGVsX_Zk4KAMn1WiCJCDKPa?width=1365&height=655&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4moe99GPMMr3YqP-DS1BnbTifE2h1sFnOsSO2R7aZpXhepOMnG5ISmk47rTd6_h3eiorC1Etxm4jwwKi-spabSUu7_P_brBi1SN_i14AYkrrAcduc6fkmFK8OanjYH-ZV41RMTWpO2YQl7ORkBxqAgTeOHpsVliWmb8U_g9WE5pXLEz8RY2RAQ9FK9p6Cb5S2H?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mpuxyOoSSqXdtRFrZleo64o0XFmmoQLgmqn86oo5guRkEdcOCupmfao9cV3jhTNG4FnINP_yhgikFTCM1gJv7i9-jrkmGWXoiomBydPRX1QKIDK0SQk8zzgZXizRIuWDhFrgo49yxwstZxjzyL9AY9ZmcpqXXIygX7RCICGjnf81wPBaeb3rYjk1DlUOa1oVD?width=1360&height=657&cropmode=none",
];

const sunnySideLinks = [
  "https://bnz05pap001files.storage.live.com/y4mZ8qB1yYgS1FBac5YLGU9jZc4AS3EYRqu_Vjtr8UEl2KdrOTn4xx5WhnASzRWTvEH27fMaDlgDmKgfPZRg-MeFP0fC979vWneUrHtsyLpqQyHyFQIb3Zkw6kZVld44Ijo1I5FJXekRxhWPkJ8AZON3aIpIxdJ9SL2J6t0WW_mWclr6GcJiIxtVZPaKnbGbDin?width=1440&height=1056&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mRC4TJa3F3_FnuGr2YAlKylsrOpBuAIylLV7tkwEvpnU-ZAilYzsXYTvAot4NLKb2T5becYWE6PmlnxlGZxVxOGpFE95qkZXdTuwYbMZZUF69XsnmRo0R66CEckIhKqH9FFyB1OqldwScgdjxuyFx2OWEqLIivMKmkdw4jz0-8tNsGnnmlyCPsi-pZN5x5Rno?width=1363&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mcsqfgSdHwGd832SjifEkfAcUKZBLBlt8iAfEErzBDIX-ToqiK1cPIJWgMLU6Ni67Gg5TRwYxA_j7vTS2CWidlbevFKV2H6ZiW_tnPi3tJO0FyQu8bqWiF1gwryVV_SonWeZe0Y1hOvt6VBtyf5DEtdg3D2z231bp9_TtS7JUQVbGvixl7ft-0HQ7AknOZIcQ?width=1365&height=662&cropmode=none",
];

const easyBank = [
  "https://bnz05pap001files.storage.live.com/y4mI9uRFd90NlcmxU2jH3YatDPLqdw9E2guVSJa6tsbTUsDRZwBE9b2luTe7DbswEnG9QwnIl3xCeiHZLRdjS6g9DPxzaYELNLeryWOgU_Fsrv_EBFL6NP3yc6iGwAEWLb1ZyX8ktFUNMD78mF_YCXO3PrZjBofPhR-XttFEjf5pWk7gA1miiKVfKmeef_Kkn9n?width=1366&height=768&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m8NLh4-krUgaKJlVJhC1L3haGEYsyKOCPJ9oPlbSP-cji4nYvG7YzObCjKFIrjP5WcPSK2VhhTVk7TKwhMVKyhu860Leiqqn5EcAnNeX2adOErBKqK2u87eKqd754HYTr7gjkK6Ha0G1bO1d8W8wgOWCB1XQKtUtQ0sY5rd6DDWXgnCGitmP69rg2682aevYj?width=1366&height=768&cropmode=none",
];

const {
  next,
  react,
  typescript,
  tailwindcss,
  clerk,
  convex,
  firebase,
  springBoot,
  firestore,
  java,
  javascriptLarge,
  css,
  mysql,
  pharmaOne,
  pharmaOneTwo,
  pharmaOneThree,
} = assets;

export const previousClientProject: Project[] = [];

export const personalProjects: Project[] = [
  {
    title: "Bidsync",
    category: "Full Stack",
    languages: [next, react, typescript, tailwindcss, clerk, convex],
    github: "https://github.com/amosmachora/bidsync",
    videoURL: "https://www.youtube.com/watch?v=xowpu0plGBM",
    description:
      "Bidsync is a hackathon submission. The hackathon was held by youtuber @WebDevCody. Whils`t i did not win the hackathon i came fourth and won a 100 USD price.",
    textParagraphs: [
      "Bidsync is a collaborative highly interactive bidding platform where people should be able to bid on items and have their items bid on.",
      "Built with convex as the backend as a service platform and clerk for authentication the project was a massive success.",
      "Has a private chat room, notification systems , item histories and much much more.",
      "I learnt alot about web sockets, database schemas and clerk. I also won a prize which makes me happy to this day.",
      "So how about you visit the site for yourself. Be sure to open a bunch of tabs especially from different browsers to get to see the action. Or better yet watch the submission video by clicking the play video button on this page.",
    ],
    images: [
      "/bidsync-screenshot-one.png",
      "/bidsync-screenshot-two.png",
      "/bidsync-screenshot-three.png",
      "/bidsync-screenshot-four.png",
    ],
    desktopOnly: true,
    live: "https://bidsync.vercel.app/",
  },
  {
    images: [webtechafrica1, webtechafrica2, webtechafrica3],
    category: "Fullstack",
    description:
      "Want to have a little laugh and maybe learn a little about a failed tech startup? Well grab some popcorn for this one.",
    title: "WebTech Africa",
    live: "https://webtechafrica.com",
    languages: [
      next,
      firebase,
      react,
      typescript,
      tailwindcss,
      firestore,
      java,
      springBoot,
    ],
    textParagraphs: [
      "Well, let me start off by telling you a story. I grew up always hearing stories of how uneployment is common in Kenya. Wen`t to campus heard the same thing throughout my four years. We'll me being me i wasn`t going to sit around and watch yself go broke. So i hatched a plan 🤧",
      "I was going to build my own company! Yes! Finally a solution to the impending doom. If i was not going to get work i could make myself work! Brilliant idea. Or so  i thought",
      "At that time the only thing i knew was frontend web developent so naturally my billion dollar startup idea was going to be centered around that. So i started cooking 👩‍🍳",
      "Jumped right in. What was i gonna need. One a website, and a way for people to pay me. So i was determined a young soul to make it work. I started writing out the client side with React (CRA react). Took me like a month (i was still in school so i was kind of juggling working on my company with classes and exam preps",
      "After finishing the website i started thinking of how i could integrate payments, so paypal and stripe! Right? Lets go my man. Off i went into the docs",
      "Blow one. Stripe is not supported in my country (Kenya). Dang! When i found this out i almost cried. So how was i going to be paid?",
      "Well not all hope is lost i can still use paypal, right? Oh young naive me was in for a rude shock",
      "To host paypal you cant just call their apis from the frontend. My app was just a frontend react app, so i had to thing about creating a backend. Just for payments. I didn`t know how to use Node but i had a little learning experience with Java and Spring-boot. So off i wen`t reading through the Paypal docs trying to implement their service in my app",
      "Blow Two! Paypal hosted fields are not supported in my country? OMG I almost lost my mind. Ths meant that i couldnt have a direct field in my frontend app for people to input their Visa CVCs etc!",
      "Dang , well i never stay down after being punched in the throat so i woke up brushed the dust of my clothes and continued hacking. Still paypal will work i just can`t use hosted fields",
      "Anyway off i went. Finished implementing the backend and know i had to think about hosting the backend app. The frontend was hosted on vercel which was relatively free. The backend however i had to use Heroku. Why i chose heroku i can`t remember. So  i integrated CI/CD into my github repo to automatically deploy changes on main branch commit. All looked well",
      "Bought a domain from Hostinger and soon my website was live. Time to cash in right? WRONG!",
      "Well i was dumb and naive i had not even analysed my business plan i jsut wanted to code my way to a billion dollars. So after months of only one sign up on my app (who i later found out was just a stalking friend) i decided to think about marketting. Atleast i was learning right?",
      "Created a LinkedIn Company page for my billion dollar idea. Hired myself 😂 jeezus. But soon i realized something i needed to create engaging posts for me toadvertise my company work (creating websites)",
      "So that was a bummer! I don`t know sh*t about graphic design but nooo God always comes through. Enter CANVA! This people have a ery generous one month free plan. So iwas like why not. So i logged on entered my paypal account and whoosh, off i went creating designs",
      "Created a couple of designs , they looked gorgeous i was swimming in dopamine. I started posting them everywhere on my linkedIN. My posts always had two consistent likes. Mine and my company`s 😂 sad sad. Anyways i kept pushing",
      "Soon i realized Linked In wasn`t doing me that well. I wanted a way for people to find me on gooogle! Right?",
      "Dang! I know had a new problem. My frontend was a react app bootstrapped using create-react-app which sucks at SEO (Search Engine Optimization). So i had to rethink my website.",
      "I had heard of this knew meta framework called NextJS. Me being me i always loved learning knew stuff. This would solve all my seo prblems because NEXTJS server side renders your react apps. I would also be learning the brand new toy which developers like me were know transitioning to. NextJS also is a meta framework so i can create a backend coupled with my frontend so i would get rid of my spring backend and thus avoid the HEROKU costs. So everything looked nice. I embarked on the journey of studyng NEXTJS from Vercel",
      "So off i went. Learning has never been a problem for me, especially programming. So i did youtube kind of grasping the basics and trying out what i had learn`t in small test projects.",
      "I was not going to jump straight into migrating my company app from CRA(create-react-app) to NextJS. I had to build something first with Next to make sure i had learn`t enough to get me off the ground",
      "So enter Mixine. Mixine was one of many ideas my naive ass had thought off for a while. It was basically a youtube and spotify merge. Like a way for me to watch my spotify playlists instead of listening to them. I won`t go to much details you can learn more about mixine later. It was perfect. I would create the app and test my NextJS skills in the process so off i went",
      "Took like two weeks reading the spotify and youtube api documentation. Got a grip off it and created the app. I was so proud of it btw. It looked good it worked well i posted it on my socials and all looked well but turns out i couldnt get people to use my app because what i was doing was prohibited by spotify so that project tanked. It is still live though but i need to add your email as a tester on my dashboard for you to be able to use it",
      "Anywayz it was a test project . So it did not hurt that much. I had learn`t how to use NextJS which was the aim right?",
      "So i started migrating my company website from CRA and Spring to NEXTJS. It was no easy task i can tell you that. I had to rewrite most of my backent to next js api routes which was a hell but all in all i figure things out finally. Took me like another week or two but i finally completed everything and my project was live.",
      "Now what. My app was live, payment was fine, SEO was fine. What now? Why was i not a billionaire? Well i spent some time thinking about this question. Well i think the more i worked on my company part of me always felt like this wasn`t going to cut it. I always felt something non-techinical was not right so i decided to pause on my company for a while.",
      "Dove into youtube learnt a little about startup success stories from Y-Combinator and Havard Business School youtube chanells. Learn`t a tone. It was now clear i was beating a dead horse.",
      "Well did i loose anything really? I don`t think so. The whole process was so much fun to code through. I pushed myself to the limit in learning new technologies some of which i had never used before. I got to understand the ins and outs of business markets and while i cannot say i am an expert at any of them i can confidently say i am not where i was.",
      "My website is live you can go check it out for a laugh maybe. I don`t know if i will ever really go back to it but it seems dead as at now",
    ],
  },
  {
    images: [
      "/mixine(1).jpeg",
      "/mixine(2).jpeg",
      "/mixine(3).png",
      "/mixine(4).png",
    ],
    category: "Fullstack",
    description:
      "Mixine is a failed platform where users were to be able to view their spotify playlists in video. I eembarked on this project however without reading the spotify developer policy and it comes to no surprise that spotify refused to upgrade my app from development mode. However the app still can be used  but it requires me to manually add you to the user list otherwise you will run into a bunch of 403 errors so be sure to message me your email first. The app by now has 11 users which im really proud of.",
    title: "Mixine",
    live: "https://mixine.vercel.app/",
    github: "https://github.com/amosmachora/mixine",
    languages: [
      "/react.svg",
      "/javascript-large.svg",
      "/typescript.svg",
      "/icons8-css.svg",
      "/tailwindcss.svg",
      "/nextjs.svg",
    ],
  },
  {
    images: booklerScreenshotsLinks,
    category: "Frontend",
    description:
      "Bookler is a simulated booking platform that provides a visually appealing user interface for viewing real-time flight, car rental, and hotel information. Although only accessible on desktop, it is highly recommended to give it a try. Authentication is managed through Firebase, and Google Maps React Library is used to provide interactive maps. Additionally, Bookler makes use of multiple APIs to handle real-time data flows for flights, car rentals, and hotels. This allows for seamless integration of information from various sources to provide up-to-date and accurate information for users.",
    title: "Bookler",
    live: "https://bookler-six.vercel.app/",
    github: "https://github.com/amosmachora/bookler",
    languages: [firebase, react, typescript, tailwindcss],
    figma:
      "https://www.figma.com/file/UnC1I2rEMII5sGNZgPHakj/UH3tyvpilexm1LB?node-id=0-1",
    videoURL: "https://www.youtube.com/watch?v=SPdNNw0E5XU",
    desktopOnly: true,
  },
  {
    images: [portfolio1, portfolio2],
    category: "Frontend",
    description:
      "My portfolio website on which you are right now. Built with tailwind, vanilla CSS and React its my personal website where clients , recruiters and visitors can view my project and get in touch with me.",
    title: "Portfolio",
    github: "https://github.com/amosmachora/portfolio",
    languages: [react, typescript, tailwindcss, javascriptLarge, css],
  },
  {
    images: magloScreenshotsLinks,
    category: "Frontend",
    description: "A payment method website called maglo. Supports dark mode.",
    title: "Maglo",

    live: "https://maglo.vercel.app",
    github: "https://github.com/amosmachora/maglo",
    languages: ["/tailwindcss.svg", "/react.svg", "/typescript.svg"],
    figma:
      "https://www.figma.com/file/Dmjkoyr5Mzg3QPJm6u66w6/Financial-Management-Web-App-Design?type=design&node-id=148-5561&t=rTwnI3G9SBsr8FdZ-0",
    desktopOnly: true,
  },
  {
    images: [pharmaOne, pharmaOneTwo, pharmaOneThree],
    category: "Fullstack",
    description:
      "A pharmacy management application providing capabilities to sort, search , organize medicine into groups, delete medicines and visualize sales in graphs. All the data is pulled from a Java Api on AWS",
    title: "Pharmaone",
    live: "http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/",
    github: "https://github.com/amosmachora/pharmaone-frontend",
    figma:
      "https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A549",
    languages: [react, java, springBoot, javascriptLarge, mysql, css],
  },
  {
    images: interiorDesignShopLinks,
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Interior Design Shop",
    live: "https://amosmachora.github.io/room-homepage/",
    github: "https://github.com/amosmachora/room-homepage",
    languages: [react, javascriptLarge, css],
  },
  {
    images: sunnySideLinks,
    category: "Landing Page",
    description: "A responsive , brightly coloured landing page",
    title: "SunnySide landing page",
    github: "https://github.com/amosmachora/sunnyside-agency-landing-page",
    live: "https://amosmachora.github.io/sunnyside-agency-landing-page/",
    languages: [react, javascriptLarge, css],
  },
  {
    images: spaceTourismLinks,
    category: "Landing Page",
    description: "A multi-page NASA themed landing page",
    title: "Space tourism website",
    github: "https://github.com/amosmachora/space-tourism",
    live: "https://amosmachora.github.io/space-tourism/",
    figma:
      "https://www.figma.com/file/ySQbyd9GdUtaQLwD4rWuvq/space-tourism-website?node-id=0%3A1529",
    languages: [react, javascriptLarge, css],
  },
  {
    images: easyBank,
    category: "Landing Page",
    description: "A simple bank landing page",
    title: "Easy bank",
    github: "https://github.com/amosmachora/easybank-landing-page",
    live: "https://amosmachora.github.io/easybank-landing-page/",
    languages: [react, javascriptLarge, css],
  },
];
