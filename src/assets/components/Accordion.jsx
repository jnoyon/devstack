export default function Accordion({ title, desc }) {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">{title}</div>
        <div className="collapse-content text-sm">{desc}</div>
      </div>
    </div>
  );
}
