import PlausibleProvider from "next-plausible";
import Head from "next/head";

const OtherPage = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center min-h-screen justify-center cursor-default relative"
    >
      <div className="max-w-md md:max-w-2xl text-lg p-4 my-12">
        <h2 className="text-2xl font-bold mt-4 mb-2">Other Recommendations</h2>
        <p>
          We recognize that Next.js and Typescript don't solve every problem.
          While we encourage you to use the primitives they provide as often as
          you can, there are other tools that will help simplify and improve
          your developer experience.
        </p>

        <h1 className="text-2xl mb-4 mt-8 font-semibold">UI Essentials</h1>

        <h2 className="text-xl mt-4">
          <a href="http://tailwindcss.com/" className="link-dark">
            Tailwind CSS
          </a>
        </h2>
        <p>I hated the idea of Tailwind. Then I tried it.</p>
        <p>
          <span className="italic">It seems like Bootstrap.</span> I promise it
          is not Bootstrap. It enables a "flow state" in UI dev I didn't know
          was achievable. (and yes we used it here)
        </p>

        <h1 className="text-2xl mb-4 mt-8 font-semibold">Data Management</h1>

        <h2 className="text-xl mt-4">
          <a href="https://react-query.tanstack.com/" className="link-dark">
            React Query
          </a>
        </h2>
        <p>
          This little library handles all your async React needs from data
          fetching to IO management. Hard to imagine doing React dev without it
          now. Might be able to replace your state management library too.
        </p>

        <h2 className="text-xl mt-4">
          <a href="https://www.prisma.io/" className="link-dark">
            Prisma.io
          </a>
        </h2>
        <p>
          Prisma is to SQL what Typescript is to JS. Never thought I'd love an
          ORM, but man, trust me on this one.
        </p>

        <h1 className="text-2xl mb-4 mt-8 font-semibold">Deployments and CI</h1>

        <h2 className="text-xl mt-4">
          <a href="https://vercel.com/" className="link-dark">
            Vercel
          </a>
        </h2>
        <p>
          Vercel took the hell of web deployments and made it a set-and-forget
          GitHub integration. We've scaled to hundreds of thousands of users
          without issue. AWS-powered, just a way better interface :)
        </p>

        <h2 className="text-xl mt-4">
          <a href="https://railway.app/" className="link-dark">
            Railway
          </a>
        </h2>
        <p>
          "Modern Heroku". Easiest way to get a real server up and running.
          Point it at a GitHub repo and go.
        </p>
        <p>(Likely the easiest place to host a database right now)</p>

        <h1 className="text-2xl mb-2 mt-8 font-semibold">State Management</h1>
        <p>
          <span className="font-semibold italic">Editor's Note:</span> State
          management libraries can be great, but often aren't necessary. Start
          with{" "}
          <a href="https://react-query.tanstack.com/" className="link-dark">
            React Query
          </a>{" "}
          and built-in React state, reach for these when you need more
        </p>

        <h2 className="text-xl mt-4">
          <a href="https://github.com/pmndrs/zustand" className="link-dark">
            Zustand
          </a>
        </h2>
        <p>
          The "modern, simple Redux" you didn't know you needed.{" "}
          <a href="https://github.com/pmndrs" className="link-dark">
            Poimandres
          </a>{" "}
          can always be trusted. I have built everything from video call apps to
          games to servers with this little library
        </p>

        <h2 className="text-xl mt-4">
          <a href="https://jotai.pmnd.rs/" className="link-dark">
            Jotai
          </a>
        </h2>
        <p>
          For a more atomic approach, Jotai is hard to beat. Also by
          <a href="https://github.com/pmndrs" className="link-dark">
            Poimandres
          </a>
          , Jotai lets you define singletons that feel like global{" "}
          <code>useState</code>. Great option for stateful behaviors that don't
          need a state machine just yet
        </p>
      </div>
    </div>
  );
};

const SITE_DESCRIPTION =
  "init.tips - our current recommendation for initializing a new web development project";
const SITE_NAME = "Other Recommendations - init.tips";

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
    <PlausibleProvider domain="init.tips">
      <div>
        <SiteHead />
        <OtherPage />
      </div>
    </PlausibleProvider>
  );
}
