import { useEffect, useState } from "react";
import TechnologyCard from "./technology/TechnologyCard";
import Stack from "./technology/Stack";
import { toast } from "react-toastify";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  useEffect(() => {
    fetch("/technology.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }
        return res.json();
      })
      .then((res) => setTechnologies(res))
      .catch(() => toast.error("Failed to load technologies"));
  }, []);

  const handleAdd = (id) => {
    const technology = technologies.find((item) => item.id === id);

    if (!technology) return;

    const alreadyAdded = selectedTechnologies.some((item) => item.id === id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added successfully`);
  };

  const handleRemove = (id) => {
    setSelectedTechnologies((prev) => prev.filter((item) => item.id !== id));

    toast.success("Technology removed successfully");
  };

  const removeAll = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);

    toast.success("All technologies removed successfully");
  };

  return (
    <>
      <div className="mb-2" id="technologies">
        <h2 className="text-2xl font-bold">
          Explore the <span className="gradient-text">Technology</span>
        </h2>

        <span className="text-gray-500 text-xs">
          Pick technologies to build your ideal development stack
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="md:w-8/12 w-full">
          <div className="grid md:grid-cols-3 gap-5">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id,
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  handleAdd={handleAdd}
                  isAdded={isAdded}
                />
              );
            })}
          </div>
        </div>

        <div className="md:w-4/12">
          <Stack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
            removeAll={removeAll}
          />
        </div>
      </div>
    </>
  );
}
