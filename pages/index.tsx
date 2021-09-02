import Head from "next/head";
import { useEffect, useState } from "react";

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
          window.navigator.clipboard.writeText("npx create-next-app --ts");
          update();
        }}
      >
        npx create-next-app --ts
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Init</title>
        <meta property="og:title" content="Init" />
        <meta
          name="description"
          content="init.tips - our current recommendation for initializing a new web development project"
        />
        <meta
          property="og:description"
          content="init.tips - our current recommendation for initializing a new web development project"
        />
        <meta property="og:url" content="https://init.tips/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="flex flex-col items-center animate-fade-in-down h-screen justify-center relative cursor-default">
        <div className="text-xl p-4">We Recommend Using</div>
        <CodeBlock />
        <div className="absolute bottom-0 w-full flex justify-center p-4">
          <a href="#why">...why?</a>
        </div>
      </div>
      <div className="flex flex-col items-center h-screen justify-center cursor-default relative bg-gray-400 text-gray-700">
        <h2 id="why" className="text-lg">
          Why Next.js and Typescript?
        </h2>
      </div>
    </div>
  );
}
