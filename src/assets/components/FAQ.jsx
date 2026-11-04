import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="py-5">
      <div className="mb-2 text-center">
        <h2 className="text-2xl font-bold">
          Common <span className="gradient-text">FAQ</span>{" "}
        </h2>
        <span className="text-gray-500 text-xs">
          Frequently asked questions about Dev Stack.
        </span>
      </div>
      <div className="faq">
        <Accordion
          title="Where can we deploy the site?"
          desc="You can deploy the site anywhere you like, such as Netlify, Vercel, Cloudflare Pages, or any other hosting platform."
        />
        <Accordion
          title="Do we have to use TypeScript?"
          desc="No. You can use either TypeScript or JavaScript. This project is built using TypeScript."
        />
        <Accordion
          title="Can we change the title, logo, and colors?"
          desc="Yes. You can change the project title, logo, and color scheme as long as they remain relevant to the project."
        />
        <Accordion
          title="Where do we get the technology logos and icons?"
          desc="You can use technology icon URLs from different sources. TechIcons is one useful source for clean technology logos."
        />
      </div>
    </div>
  );
}
