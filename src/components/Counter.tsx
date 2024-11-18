import { UseCounter } from "../hooks/UseCounter";

export const Counter = () => {
  const { count, increaseBy } = UseCounter();

  return (
    <>
      <h3>
        Contador in new brach v2: <small className="font-bold">{count}</small>
      </h3>

      <div>
        <button
          onClick={() => increaseBy(+1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
        >
          -1
        </button>
      </div>
    </>
  );
};
