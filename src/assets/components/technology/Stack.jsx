import { FaTimes } from "react-icons/fa";

export default function Stack({
  selectedTechnologies,
  handleRemove,
  removeAll,
}) {
  return (
    <div className="border border-gray-300 rounded-2xl p-5">
      <h2 className="font-bold"> Your Stack </h2>
      <p className="text-xs text-gray-500 mb-3">
        {" "}
        {selectedTechnologies.length} Technologies selected{" "}
      </p>
      {selectedTechnologies.length > 0 ? (
        <div>
          {selectedTechnologies.map((selectedItem) => (
            <div
              key={selectedItem.id}
              className="border border-gray-300 p-3 rounded-md mb-3"
            >
              <div className="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    width={30}
                    height={30}
                    src={selectedItem.icon}
                    alt={selectedItem.name}
                  />
                  <div>
                    <h2 className="font-bold text-sm"> {selectedItem.name} </h2>
                    <p className="text-gray-600 text-xs">
                      {" "}
                      {selectedItem.category}{" "}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleRemove(selectedItem.id)}>
                  {" "}
                  <FaTimes className="text-gray-700" />{" "}
                </button>
              </div>
            </div>
          ))}

          <button
            className="btn w-full btn-outline border-red-500 text-red-500"
            onClick={removeAll}
          >
            Remove All
          </button>
        </div>
      ) : (
        <div className="border border-dashed border-gray-300 text-gray-700 p-5">
          Your stack is empty.
        </div>
      )}
    </div>
  );
}
