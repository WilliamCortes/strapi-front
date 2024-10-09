// import { BrandsBlock } from "./components/brandsBlock";

import { StartBlock } from "./components/startBlock";
import tap from "~/app/assets/tap.png";
import { TrustedData } from "./components/trustedData";
import { InfoBlock } from "./components/InfoBlock";
import { Blockquote } from "./components/blockquote";
import { SalesBlock } from "./components/salesBlock";
import { FAQs } from "./components/FAQs";
import { CallToAction } from "./components/callToAction";
import { Footer } from "./components/ui/footer";
import { ImageBlock } from "./components/imageBlock";

const startBlockProps = {
  title: "Fundación Acueducto Inter-veredal Mesitas de Santa Inés y San Mateo.",
  description:
    "This free and open-source landing page template was built using the utility classes from Tailwind CSS.",
  githubUrl: "https://github.com/themesberg/landwind",
  figmaUrl: "https://www.figma.com/community/file/1125744163617429490",
  imageUrl: tap,
  tailwindUrl: "https://tailwindcss.com",
  flowbiteUrl: "https://flowbite.com/docs/getting-started/introduction/",
  blocksUrl: "https://flowbite.com/blocks/",
};

export default function Home() {
  // <div classNameName="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  // <main classNameName="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
  // </div>
  return (
    <div>
      <StartBlock {...startBlockProps} />
      {/* <BrandsBlock /> */}
      <ImageBlock />
      <InfoBlock />
      <TrustedData />
      <Blockquote />
      <SalesBlock />
      <FAQs />
      <CallToAction />
      <Footer />
    </div>
  );
}
