export default function TechnologyCard({ technology, handleAdd }) {
  return (
    <div className="card border border-gray-200 p-3 rounded-2xl">
      <div className="flex items-center justify-between gap-2">
        <img
          src={technology.icon}
          width={40}
          height={40}
          alt={technology.name}
          className="mb-2"
        />
        <p className="bg-gray-200 text-xs px-5 py-1 rounded-full text-pink-400">
          {" "}
          {technology.badge}{" "}
        </p>
      </div>
      <h2 className="font-bold text-xl mb-2"> {technology.name} </h2>
      <p className="text-sm text-gray-600 mb-5"> {technology.description} </p>
      <div className="flex justify-between gap-2 text-gray-500 text-sm mb-3">
        <p className="bg-gray-200 text-xs px-5 py-1 rounded-xl">
          {" "}
          {technology.category}{" "}
        </p>
        <p> {technology.difficulty} </p>
        <p> {technology.rating} </p>
      </div>
      <button className="btn-gradient" onClick={() => handleAdd(technology.id)}>
        Add to Stack
      </button>
    </div>
  );
}
