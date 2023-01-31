type fb = {
  fb: {
    id: number;
    rating: number;
    text: string;
  }[];
};

export const Card = ({ fb }: fb) => {

  return (
    <>
      {fb.map((user) => (
        <div className="bg-slate-300 py-10 text-center rounded-3xl m-10 relative">
          <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 absolute top-0 origin-center  bg-blue-500 rounded-full border-2 text-fuchsia-50 text-xl font-mono flex justify-center items-center">
            {user.id}
          </div>
          <p className="text-slate-900 text-xl font-medium">
           Review: "{user.text}"
          </p>
          <p className="text-slate-900 text-xl font-medium">rating: {user.rating}</p>
        </div>
      ))}
    </>
  );
};