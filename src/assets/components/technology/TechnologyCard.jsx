import { MdOutlineStarPurple500 } from "react-icons/md";

export default function TechnologyCard({ technology, handleAdd, isAdded }) {
  return (
    <div
      className={`card p-3 rounded-2xl transition-all duration-200 ${
        isAdded
          ? "border-2 border-pink-500 shadow-md"
          : "border border-gray-200 hover:border-gray-400"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <img
          src={technology.icon}
          width={40}
          height={40}
          alt={technology.name}
          className="mb-2"
        />

        <p className="bg-gray-200 text-xs px-5 py-1 rounded-full text-pink-400">
          {technology.badge}
        </p>
      </div>

      <h2 className="font-bold text-xl mb-2">{technology.name}</h2>

      <p className="text-sm text-gray-600 mb-5">{technology.description}</p>

      <div className="flex justify-between gap-2 text-gray-500 text-sm mb-3">
        <p className="bg-gray-200 text-xs px-5 py-1 rounded-xl">
          {technology.category}
        </p>

        <p className="text-xs">{technology.difficulty}</p>

        <p className="flex items-center gap-1">
          {" "}
          <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
          <span> {technology.rating} </span>{" "}
        </p>
      </div>

      <button
        className={`btn-gradient w-full ${
          isAdded ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={() => handleAdd(technology.id)}
        disabled={isAdded}
      >
        {isAdded ? "Already Added" : "Add to Stack"}
      </button>
    </div>
  );
}
