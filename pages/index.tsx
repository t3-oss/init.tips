import Head from "next/head";
import { useEffect, useState } from "react";

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
  return (
    <>
      <code
        className="bg-gray-700 transition hover:bg-gray-500 text-gray-200 px-4 py-2 rounded cursor-pointer"
        onClick={() => {
          window.navigator.clipboard.writeText(CURRENT_RECOMMENDED_COMMAND);
          update();
        }}
      >
        {CURRENT_RECOMMENDED_COMMAND}
      </code>
      <div
        className={`mt-2 opacity-1 ${
          !copied && "opacity-0 duration-500 transition-opacity"
        }`}
      >
        Copied Successfully!
      </div>
    </>
  );
};

const RecommendationPage = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in-down h-screen justify-center relative cursor-default">
      <div className="text-xl p-4">We Recommend Using</div>
      <CodeBlock />
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <a href="#why">...why?</a>
      </div>
    </div>
  );
};

const WhyPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center cursor-default relative bg-gray-400 text-gray-700">
      <div id="why" className="max-w-md md:max-w-2xl text-lg">
        <h2 className="text-xl font-bold mt-4">
          Why <a href="https://www.typescriptlang.org/">Typescript</a>?
        </h2>
        <p>Javascript is hard. Why add more rules?</p>
        <p>
          We firmly believe the experience Typescript provides will{" "}
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
          imagined before.
        </p>
        <p>It also can lead developers down some pretty rough paths.</p>
        <p>
          Next.JS offers a lightly opinionated, heavily optimized approach to
          creating a website using React. From routing to API definitions to
          image rendering, we trust Next to lead developers towards good
          decisions.
        </p>
      </div>
    </div>
  );
};

const SITE_DESCRIPTION =
  "init.tips - our current recommendation for initializing a new web development project";
const SITE_NAME = "init.tips";

const SiteHead: React.FC = () => {
  return (
    <Head>
      <title>{SITE_NAME}</title>
      <meta property="og:title" content={SITE_NAME} />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content="https://init.tips/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default function Home() {
  return (
    <div>
      <SiteHead />
      <RecommendationPage />
      <WhyPage />
    </div>
  );
}
