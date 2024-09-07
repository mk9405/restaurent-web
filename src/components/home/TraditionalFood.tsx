import { useState } from "react";
import traditionalFood from "../../services/offline/traditionalFood.json";

export default function TraditionalFood() {
  const [accordian, setAccordian] = useState(1);

  const toggleAccordian = (i: number) => {
    if (accordian === i) {
      setAccordian(1);
    } else {
      setAccordian(i);
    }
  };

  return (
    <div className=" gap-10 py-10">
      <h1 className="font-bold text-5xl mx-auto justify-center text-center pb-4">
        Some Traditional Food
      </h1>
      <h1 className="font-bold text-5xl mx-auto justify-center text-center ">
        Based on Location
      </h1>
      <ul className="flex gap-4 mx-auto justify-center my-10 py-2 font-bold items-center text-lg border-2 rounded-xl border-red-400 w-[750px] cursor-pointer">
        {traditionalFood.map((d) => (
          <li
            key={d.id}
            onClick={() => toggleAccordian(d.id)}
            className={
              accordian === d.id
                ? "text-white bg-red-500 px-3 py-2 rounded-lg"
                : "px-3 py-2 rounded-lg"
            }
          >
            {d.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
