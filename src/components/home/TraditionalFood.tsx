export default function TraditionalFood() {
  return (
    <div className=" gap-10 py-10">
      <h1 className="font-bold text-5xl mx-auto justify-center text-center pb-4">
        Some Traditional Food
      </h1>
      <h1 className="font-bold text-5xl mx-auto justify-center text-center ">
        Based on Location
      </h1>

      <ul className="flex gap-4 mx-auto justify-center my-10 py-2 font-bold items-center text-lg border-2 rounded-xl border-red-400 w-[750px]">
        <li className="text-white bg-red-500 px-3 py-2 rounded-lg">
          All Category
        </li>
        <li className="px-3 py-2 rounded-lg">Thai Cuision</li>
        <li className="px-3 py-2 rounded-lg">Mexican</li>
        <li className="px-3 py-2 rounded-lg">Italian</li>
        <li className="px-3 py-2 rounded-lg">Vegitarian</li>
        <li className="px-3 py-2 rounded-lg">JunkFood</li>
      </ul>
    </div>
  );
}
