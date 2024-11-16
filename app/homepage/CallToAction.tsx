import React from "react";

interface TodoData {
  id: number;
  name: string;
  count: number;
}

const todoData: TodoData[] = [
  { id: 1, name: "states", count: 36 },
  { id: 2, name: "project verified", count: 50 },
  { id: 3, name: "Representative data", count: 90 },
  { id: 4, name: "LGA", count: 120 },
  { id: 5, name: "report", count: 32 },
];

const CallToAction = () => {
  return (
    <div className="py-20 ">
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl sm:text-xl sm:font-semibold">Our Comprehensive database</h1>
        <div className="flex flex-row sm:flex-col gap-10 justify-center align-middle items-center mx-auto ">
          {todoData.map((todo) => (
            <ul key={todo.id} className="flex flex-col justify-between items-center gap-2 w-full sm:bg-slate-400 p-2">
              <p className="text-2xl font-bold text-center">{todo.count}</p>
              <h1 className="text-xl text-center">{todo.name}</h1>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
