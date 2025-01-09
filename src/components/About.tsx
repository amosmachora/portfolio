"use client";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";
import Image from "next/image";
import grad from "../../public/grad.jpg";
import me from "../../public/me.jpg";
import omrs from "../../public/omrs.jpg";
import omrs2 from "../../public/omrs2.jpg";
import { OutboundLink } from "./OutboundLink";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 3,
          }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <Image
            src={omrs}
            alt="about"
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: -3,
          }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Image
            src={grad}
            alt="about"
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 3,
          }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Image
            src={me}
            alt="about"
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: -3,
          }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Image
            src={omrs2}
            alt="about"
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Amos Machora - a software developer from Nairobi,
          Kenya. Welcome to my corner of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          I was born, raised and currently live in Nairobi, since my early days
          I fell in love with computers majorly by playing{" "}
          <OutboundLink href="https://www.google.com/search?q=gta+vice+city">
            GTA Vice City
          </OutboundLink>{" "}
          on my uncle&apos;s old Dell computer. Since then I went on to study
          Computer Studies in high school and Computer Science in campus, weird
          how a shooting game can have such an impact on a young soul. Funny
          story, for like 5 years I didn&apos;t know there was a save feature so
          each time I played the game I restarted it. So much fun.
        </Paragraph>
        <Paragraph className=" mt-4">
          I am a christian, a member of the Seventh Day Adventist church and
          have been all my life. I was born literally in the church, (
          <i>my mum&apos;s labour pains began in the church, nothing crazy</i>)
          . I am a beleiver in God or atleast act as if he exists as{" "}
          <OutboundLink href="https://www.google.com/search?q=jordan+b+peterson">
            Jordan Peterson
          </OutboundLink>{" "}
          would say. I enjoy christian music a lot, something about them is so
          calming and has been a constant resting place in times of trouble in
          my personal life.
        </Paragraph>
        <Paragraph className=" mt-4">
          In 2023, I graduated from{" "}
          <OutboundLink href="https://www.google.com/search?q=chuka-university">
            Chuka University
          </OutboundLink>{" "}
          with a second-class upper division in Computer Science, boasting a GPA
          of 3.7. Throughout my academic journey, I excelled in subjects crucial
          for a career in software engineering, in high school for example I
          attained an A plain <i>(GPA 4.0)</i> in Computer Studies and
          Mathematics. I also had an A- <i>(GPA 3.7)</i> in physics!
          achievements I am very proud of to this day. I truly enjoy
          programming, the process of turning ideas into solutions that work is
          one I find insanely gratifying. I am planning to go back to school in
          the near future for my masters degree probably in Computer Science and
          Mathematics. Fingers crossed everything goes according to plan.
        </Paragraph>
        <Paragraph className=" mt-4">
          As per the time of writing <i>(December 2024)</i> I am currently not
          employed. I spend most of my time contibuting to open source majorly
          working on{" "}
          <OutboundLink href="https://github.com/palladiumkenya/kenyaemr-esm-3.x/pulls?q=is%3Apr+author%3Aamosmachora">
            KenyaEMR
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink href="https://github.com/openmrs">OpenMRS</OutboundLink>{" "}
          from which KenyaEMR is a distribution of. I also have my own open
          source project{" "}
          <OutboundLink href="https://github.com/amosmachora/daraja-kit">
            Daraja Kit
          </OutboundLink>{" "}
          which I built to make it easy to plug in{" "}
          <OutboundLink href="https://www.google.com/search?q=safaricom+daraja+api">
            Safaricom&apos;s
          </OutboundLink>{" "}
          daraja API to my projects.
        </Paragraph>
        <Paragraph className="mt-4">
          I spent roughly 10 months working on a failed startup project called
          Musterroll. The owners of the project so it best to waste everyones
          time with a half baked idea, zero business plan and negligible project
          management skills. Hilarious bit. 8 months in I find out that of our
          two backend guys, one is an EX-DJ and the other has no clue what git
          is. Perfect. Anyway after beating that dead horse for 10 months I quit
          late October 2024 in the middle of the night after I was woken up by
          something troubling my head so much I couldn&apos;t let it wait till
          the next day.
        </Paragraph>
        <Paragraph className="mt-4">
          I have spent some of my time off school freelancing building small
          websites like{" "}
          <OutboundLink href="https://www.ukuzistudio.com/">
            ukuzistudio.com
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.randompest.co.ke/">
            randompest.co.ke
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink href="https://www.outofthestreet.org/">
            outofthestreet.org
          </OutboundLink>{" "}
          to name just a few. Using technologies like NextJS, Tailwind CSS and{" "}
          <OutboundLink href="https://www.sanity.io/">Sanity</OutboundLink> I
          built this websites to serve practical needs for clients I have no
          clue how they even found me.
        </Paragraph>
        <Paragraph className="mt-4">
          I also spend some time doing a bit of{" "}
          <OutboundLink href="https://leetcode.com/u/amosmachora/">
            leetcode
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink href="https://www.codewars.com/users/amosmachora">
            codewars
          </OutboundLink>
          . To be frank I did stop doing this after the AI burst when I was
          feeling a bit dejected that a machine could solve leetcode questions
          with a snap of a finger. After working with AI for like a year now
          guess what, I am starting to do them again because fortunately or
          unfortunately I have come to learn that AI can&apos;t replace your
          brain.
        </Paragraph>
        <Paragraph className="mt-4">
          In the tech world I started out doing a bit of Java and Spring-boot. I
          miss that world so much. I remember learning about Spring Batch,
          Spring Data, Spring Security and Docker, simpler time that was. I
          transitioned to the frontend world because it seemed the easiest way
          to make some money building websites. I have since learnt React,
          NextJS, Framer Motion, Axios, React Server Components, Tailwind,
          Convex, Sanity <i>(i do hope I am still sane)</i>, Firebase,
          Firestore, Vercel, Netlify, etc etc. So much fun. I do not know if
          this came across but I do not shy way from learning things. I love
          learning things and besides at some point you start to even know about
          things before you even have to learn about them. Beauty of
          programming.
        </Paragraph>
        <Paragraph className="mt-4">
          As I continue my crazy software engineering career I am starting to
          learn how to build my own SAAS products. In fact I am currently{" "}
          <i>(dec 2024)</i> building two products , they are still in the oven
          so can&apos;t really say so much about them.
        </Paragraph>
        <Paragraph className="mt-4">
          During my leisure time I do play a lot of football, or soccer if you
          are american. I live next to the airport so there is a massive buffer
          zone on which a bit too adventurous people like me go to play. I love
          listening to{" "}
          <OutboundLink href="https://www.youtube.com/@JordanBPeterson">
            Dr. Jordan B Peterson
          </OutboundLink>{" "}
          on Youtube and his book{" "}
          <OutboundLink href="https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021">
            12 rules for life
          </OutboundLink>{" "}
          has been instrumental in shaping my perceptions towards philosphy,
          truth and life in general. His views on the bible, stories, philosophy
          and psychology can truly not be replicated. I also spend a lot of time
          listening to
          <OutboundLink href="https://www.youtube.com/@t3dotgg">
            Theo
          </OutboundLink>{" "}
          from whom I have learnt to approach the balance of technical expertise
          and product development in a quite unique way. When I am up to listen
          to hot takes and alternate views on programming my go to channel is{" "}
          <OutboundLink href="https://www.youtube.com/@ThePrimeTimeagen">
            The Primeagen
          </OutboundLink>{" "}
          , if you want someone who mixes programming passion with fun and
          vibes, thats the one.{" "}
          <OutboundLink href="https://x.com/cmuratori">
            Casey Muratori
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink href="https://www.youtube.com/@ContinuousDelivery">
            Dave Farley
          </OutboundLink>{" "}
          are big inspirations.
        </Paragraph>
        <Paragraph className="mt-4">
          I am also a big Manchester United fan my favourite player is probably{" "}
          <OutboundLink href="https://www.google.com/search?q=marcus-rashford">
            Marcus Rashford
          </OutboundLink>{" "}
          but I am starting to be a{" "}
          <OutboundLink href="https://www.google.com/search?q=bruno+fernandes">
            Bruno Fernandes
          </OutboundLink>{" "}
          fan boy. I have spent over a thousand hours listening to{" "}
          <OutboundLink href="https://www.youtube.com/@UnitedStand">
            Mark Goldbridge
          </OutboundLink>{" "}
          rant, ask for referees to have their bank accounts checked whenever
          they make decisions he is not in agreement with and make insanely
          creative jokes during Manchester United watchalongs or playing EAFC.
          Some of the best I have heard are{" "}
          <i>&apos;as useless as t*ts on a nun&apos;</i>,{" "}
          <i>
            &apos;its like watching a field with a swarm of cows on laxitives,
            it is full of sh*t&apos;{" "}
          </i>
          , <i>&apos;more holes than a hedgehogs pillow&apos;</i> ,{" "}
          <i>&apos;a hedgehog at a balloon party&apos;</i>,{" "}
          <i>
            &apos;Panicking like a cat trying to bury its sh*t on a marble
            floor&apos;
          </i>{" "}
          etc etc. Some guy on youtube has made a hilarious compilation you can
          watch it{" "}
          <OutboundLink href="https://www.youtube.com/watch?v=kUpqM0w1jKY">
            here
          </OutboundLink>
          .
        </Paragraph>
        <Paragraph className="mt-4">
          My favourite movie ever is{" "}
          <OutboundLink href="https://www.google.com/search?q=friends">
            Friends
          </OutboundLink>{" "}
          and my favourite character is Chandler Bing, actually scratch that,
          that is one movie where it is actually impossible to have a favourite
          as they are all so good. I have also rewatched{" "}
          <OutboundLink href="https://www.google.com/search?q=the+big+bang+theory+sitcom">
            The big bang theory
          </OutboundLink>{" "}
          probably three times from Season 1 to 12 - crazy i know. I also enjoy{" "}
          <OutboundLink href="https://www.google.com/search?q=brooklyn+nine+nine">
            Brooklyn nine nine
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.google.com/search?q=modern+family">
            Modern family
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.google.com/search?q=the+office">
            The office
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink href="https://www.google.com/search?q=how+i+met+your+mother">
            How I met your mother
          </OutboundLink>
          . As you might have noticed I am more of a sitcom fan I can&apos;t
          manage 2 hours in front of a screen its a bit much.
        </Paragraph>
        <Paragraph className="mt-4">
          Join me on this journey of bytes and narratives, logic, fun and
          creativity, code and prose. Together, we can explore the boundless
          possibilities of technology and storytelling, all while reveling in
          the sheer beauty of thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
