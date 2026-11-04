import heroimage from "../banner-stack.png";
export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between md:py-20 py-10">
      <div className="text flex flex-col gap-5 md:w-1/2">
        <h1 className="text-4xl font-bold leading-13">
          {" "}
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>{" "}
        </h1>
        <p className="text-gray-700">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and build the perfect technology stack for your next
          project.
        </p>
        <div className="flex gap-3">
          <a href="#technologies" className="btn-gradient">
            Export Technologies
          </a>
          <a href="#" className="btn border border-gray-400">
            Learn More
          </a>
        </div>
      </div>
      <div>
        <img src={heroimage} />
      </div>
    </div>
  );
}
