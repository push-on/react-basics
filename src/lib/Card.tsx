import { useState } from "react";
export const Card = () => {
  const [first, setfirst] = useState(5);
  return (
    <>
      <div className="bg-slate-300 py-10 text-center rounded-3xl m-5 relative">
        <div className="translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 origin-center w-10 h-10 bg-blue-500 rounded-full border-4 border-blue-400 text-fuchsia-50 text-3xl font-mono font-black flex justify-center items-center">
          {first}
        </div>
        <p className="text-slate-900 text-xl font-medium">
          This is an example of a feedback item
        </p>
      </div>
    </>
  );
};