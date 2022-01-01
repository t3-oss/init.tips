import Head from "next/head";

const OtherPage = () => {
  return (
    <>
      <Head key="Other">
        <title>init.tips - Other Recommendations</title>
        <meta property="og:title" content="init.tips - Other Recommendations" />
      </Head>
      <div
        id="about"
        className="flex flex-col items-center min-h-screen justify-center cursor-default relative"
      >
        <div className="max-w-md md:max-w-2xl text-lg p-4 my-12">
          <h2 className="text-2xl font-bold mt-4 mb-2">
            Other Recommendations
          </h2>
          <p>
            We recognize that Next.js and TypeScript don't solve every problem.
            While we encourage you to use the primitives they provide as often
            as you can, there are other tools that will help simplify and
            improve your developer experience.
          </p>

          <h1 className="text-2xl mb-4 mt-8 font-semibold">UI Essentials</h1>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://tailwindcss.com/"
              className="link-dark"
            >
              Tailwind CSS - for your styles
            </a>
          </h2>
          <p>I hated the idea of Tailwind. Then I tried it.</p>
          <p>
            <span className="italic">It seems like Bootstrap.</span> I promise
            it is not Bootstrap. It enables a "flow state" in UI dev I didn't
            know was achievable. (and yes we used it here)
          </p>

          <h1 className="text-2xl mb-4 mt-8 font-semibold">Data Management</h1>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-query.tanstack.com/"
              className="link-dark"
            >
              React Query - for your client
            </a>
          </h2>
          <p>
            This little library handles all your async React needs from data
            fetching to IO management. Hard to imagine doing React dev without
            it now. Might be able to replace your state management library too.
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.prisma.io/"
              className="link-dark"
            >
              Prisma.io - for your DB
            </a>
          </h2>
          <p>
            Prisma is to SQL what TypeScript is to JS. Never thought I'd love an
            ORM, but man, trust me on this one.
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.trpc.io/"
              className="link-dark"
            >
              tRPC - for defining and consuming APIs
            </a>
          </h2>
          <p>
            tRPC delivers on GraphQL's promise of seamless client development
            against a typesafe server without all of the boilerplate. It's a
            clever abuse of TypeScript that provides an incredible dev
            experience.
          </p>

          <h1 className="text-2xl mb-4 mt-8 font-semibold">Analytics</h1>
          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://plausible.io/"
              className="link-dark"
            >
              Plausible - for user data
            </a>
          </h2>
          <p>
            Need analytics? Plausible is one of the quickest ways to get them.
            Super minimal. It even has a{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://plausible.io/docs/proxy/guides/nextjs"
              className="link-dark"
            >
              simple plugin for Next.js.
            </a>
          </p>

          <h1 className="text-2xl mb-4 mt-8 font-semibold">Authentication</h1>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://next-auth.js.org/"
              className="link-dark"
            >
              NextAuth.js - for authentication
            </a>
          </h2>
          <p>
            Man this library makes auth easy. No ownership compromise, hooks up
            to your DB directly. So good that I ported two projects to Next to
            use it.
          </p>
          <p>
            Note:{" "}
            <span className="italic">
              Does not support React Native directly. Yet.
            </span>{" "}
            😉
          </p>

          <h1 className="text-2xl mb-4 mt-8 font-semibold">
            Deployments, Infrasctructure, Databases and CI
          </h1>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://vercel.com/"
              className="link-dark"
            >
              Vercel - for hosting your website
            </a>
          </h2>
          <p>
            Vercel took the hell of web deployments and made it a set-and-forget
            GitHub integration. We've scaled to hundreds of thousands of users
            without issue. AWS-powered, just a way better interface :)
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://planetscale.com/"
              className="link-dark"
            >
              PlanetScale - for databases without the worry
            </a>
          </h2>
          <p>
            PlanetScale is the best "serverless database platform" I've used by
            far. Insane scale, great developer experience, fantastic pricing. If
            you're using sql (and hopefully Prisma), this is hard to beat.
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://railway.app?referralCode=Ms4Rg-"
              className="link-dark"
            >
              Railway - for hosting your infra
            </a>
          </h2>
          <p>
            "Modern Heroku". Easiest way to get a real server up and running. If
            Vercel and PlanetScale aren't enough, Railway probably is. Point it
            at a GitHub repo and go.
          </p>

          <h1 className="text-2xl mb-2 mt-8 font-semibold">State Management</h1>
          <p>
            <span className="font-semibold italic">Editor's Note:</span> State
            management libraries can be great, but often aren't necessary. Start
            with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-query.tanstack.com/"
              className="link-dark"
            >
              React Query
            </a>{" "}
            and built-in React state, reach for these when you need more
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pmndrs/zustand"
              className="link-dark"
            >
              Zustand - for never using Redux again
            </a>
          </h2>
          <p>
            The "modern, simple Redux" you didn't know you needed.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pmndrs"
              className="link-dark"
            >
              Poimandres
            </a>{" "}
            can always be trusted. I have built everything from video call apps
            to games to servers with this little library
          </p>

          <h2 className="text-xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://jotai.pmnd.rs/"
              className="link-dark"
            >
              Jotai - for never using Context again
            </a>
          </h2>
          <p>
            For a more atomic approach, Jotai is hard to beat. Also by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pmndrs"
              className="link-dark"
            >
              Poimandres
            </a>
            , Jotai lets you define singletons that feel like global{" "}
            <code>useState</code>. Great option for stateful behaviors that
            don't need a state machine just yet
          </p>
        </div>
      </div>
    </>
  );
};

export default OtherPage;
