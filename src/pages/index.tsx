import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Link from "next/link";
import { useRouter } from "next/router";

import { usePlausible } from "next-plausible";
import { CustomSiteHead } from "../components/head";
import { ClipboardIcon } from "../components/clipboard";

const CURRENT_RECOMMENDED_COMMAND = "npx create-next-app --ts";

const useTemp = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  return [copied, () => setCopied(true)] as [boolean, () => void];
};

const CodeBlock: React.FC = () => {
  const [copied, update] = useTemp();
  const plausible = usePlausible();

  return (
    <>
      <div
        className="relative group ml-8 pr-8 cursor-pointer"
        onClick={() => {
          window.navigator.clipboard.writeText(CURRENT_RECOMMENDED_COMMAND);
          update();
          plausible("clipboard-copy");
        }}>
        <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center h-full">
          <ClipboardIcon />
        </div>
        <code className="bg-gray-700 transition group-hover:bg-gray-500 text-gray-200 px-4 py-2 rounded relative flex">
          {CURRENT_RECOMMENDED_COMMAND}
        </code>
      </div>
      <div
        className={`mt-2 opacity-1 ${
          !copied && "opacity-0 duration-500 transition-opacity"
        }`}>
        Copied Successfully!
      </div>
    </>
  );
};

const VisibilityWrapper: React.FC<{ hash: string }> = props => {
  const router = useRouter();
  return (
    <VisibilitySensor
      onChange={isVisible => {
        if (isVisible && window.location.hash !== props.hash) {
          router.replace(props.hash);
        }
      }}
      partialVisibility>
      {props.children}
    </VisibilitySensor>
  );
};

const RecommendationPage = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in-down h-screen justify-center relative cursor-default">
      <h1 className="text-2xl">Starting a new dev project?</h1>
      <div className="py-4" />
      <h2 className="text-xl font-light">We Recommend Using</h2>
      <div className="pt-2" />
      <CodeBlock />
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <VisibilityWrapper hash="">
          <a href="#why">...why?</a>
        </VisibilityWrapper>
      </div>
    </div>
  );
};

const WhyPage = () => {
  return (
    <div
      id="why"
      className="flex flex-col items-center min-h-screen justify-center cursor-default relative bg-gray-300 text-gray-700">
      <div className="max-w-md md:max-w-2xl text-lg px-4 pt-10 pb-20 lg:pb-10">
        <h2 className="text-xl font-bold mt-4">
          Why <a href="https://www.typescriptlang.org/">Typescript</a>?
        </h2>
        <p>Javascript is hard. Why add more rules?</p>
        <p>
          We firmly believe the experience{" "}
          <a href="https://www.typescriptlang.org/" className="link-light">
            Typescript
          </a>{" "}
          provides will{" "}
          <span className="italic">help you be a better developer,</span>{" "}
          regardless of where you are in your career as an engineer. Whether
          you're new to web development or a seasoned pro, the "strictness" of
          Typescript will provide a less frustrating, more consistent experience
          than vanilla JS
        </p>

        <div className="p-4" />

        <h2 className="text-xl font-bold">
          Why <a href="https://nextjs.org/">Next.js</a>?
        </h2>
        <p>
          We love React. It has made UI development accessible in ways we never
          imagined before. It also can lead developers down some rough paths.
        </p>
        <p>
          <a href="https://nextjs.org/" className="link-light">
            Next.js
          </a>{" "}
          offers a lightly opinionated, heavily optimized approach to creating a
          website using React. From routing to API definitions to image
          rendering, we trust Next.js to lead developers towards good decisions.
        </p>

        <div className="p-4" />

        <h2 className="text-xl font-bold">Why nothing else?</h2>
        <p>
          We believe in keeping things as simple as possible. These
          recommendations can get you pretty far, but we recognize there are
          problems these tools don't solve well by themselves.
        </p>
        <br />
        <p className="underline text-xl text-center">
          <Link href="/other">
            <a className="link-light font-bold">
              Here are some recommendations for when things get more complex
            </a>
          </Link>
        </p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <a href="#about">About</a>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center min-h-screen justify-center cursor-default relative">
      <div className="max-w-md md:max-w-2xl text-lg p-4">
        <h2 className="text-xl font-bold mt-4">Credits</h2>
        <p>
          Built by{" "}
          <a href="https://t3.gg" className="link-dark">
            Theo
          </a>{" "}
          and{" "}
          <a href="https://mark.florkow.ski" className="link-dark">
            Mark
          </a>
        </p>
        <p>
          Hosted on{" "}
          <a href="https://vercel.com" className="link-dark">
            Vercel
          </a>
        </p>
        <p>
          Source available on{" "}
          <a href="https://github.com/TheoBr/init.tips" className="link-dark">
            Github
          </a>
        </p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <a href="#">^</a>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <CustomSiteHead />
      <RecommendationPage />
      <WhyPage />
      <AboutPage />
    </div>
  );
}
