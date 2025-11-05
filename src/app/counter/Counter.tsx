"use client";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col gap-3 p-3 border rounded-md border-gray-600 ">
      <div className="mt-20 w-full text-center space-y-5">
        Клиентская часть компонента counter
      </div>

      <p className="text-3xl">Count: {counter}</p>

      <button
        onClick={() => setCounter(counter + 1)}
        className="w-100 text-center px-8 py-2 text-2xl rounded bg-blue-900 hover:bg-blue-700 transition-all"
      >
        Увеличить
      </button>
    </div>
  );
}

export default Counter;
