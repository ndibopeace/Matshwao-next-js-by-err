import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@components/home/hero";
import FrequentlyAskedQuestions from "@components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FrequentlyAskedQuestions />
    </>
  );
}
