import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Amos</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack engineer that loves{" "}
        <Highlight>building real products</Highlight> that impact millions of
        lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I am a freelancer too!, I build{" "}
        <Link href={"/projects"} className="underline">
          my own products
        </Link>{" "}
        all the time and have acquired a certain balance of project management
        and coding that is hard to find. From requirement gathering , design
        through development and finally a real product that{" "}
        <Highlight>actually works</Highlight>, I can help build MVPs turn ideas
        into real apps. If you are interested in that kind of thing just email
        me at{" "}
        <Link href="mailto:amosmachora13@gmail.com" className="underline">
          amosmachora13@gmail.com
        </Link>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
