import { useEffect, useState } from "react";
import TechnologyCard from "./technology/TechnologyCard";
import Stack from "./technology/Stack";
import { toast } from "react-toastify";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  useEffect(() => {
    fetch("technology.json")
      .then((res) => res.json())
      .then((res) => setTechnologies(res));
  }, []);

  const handleAdd = (id) => {
    const technology = technologies.find((item) => item.id === id);
    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(` is Added`);
  };

  const handleRemove = (id) => {
    const remove = technologies.find((item) => item.id != id);
    setSelectedTechnologies([...selectedTechnologies, remove]);
  };
  console.log(handleAdd);
  return (
    <>
      <div className="mb-2">
        <h2 className="text-2xl font-bold">
          Expore the <span className="gradient-text">Technology</span>{" "}
        </h2>
        <span className="text-gray-500 text-xs">
          Pick technologies to build your ideal developoment stack
        </span>
      </div>

      <div className="flex">
        <div className="md:w-8/12">
          <div className="grid md:grid-cols-3 gap-5">
            {technologies.map((technology) => (
              <TechnologyCard
                technology={technology}
                handleAdd={handleAdd}
                key={technology.id}
              />
            ))}
          </div>
        </div>
        <div className="w-4/12">
          <Stack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </>
  );
}
