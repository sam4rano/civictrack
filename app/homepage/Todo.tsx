import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavData {
  id: number;
  name: string;
  url: string;
  description: string;
  content: string;
}

const navData: NavData[] = [
  {
    id: 1,
    name: "track now",
    url: "/track",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dignissimos animi perspiciatis itaque similique error reiciendis sunt qui id, totam quia voluptates modi, in illum voluptate laboriosam, obcaecati maxime magni.",
    description: "Want to follow your Representative?",
  },
  {
    id: 2,
    name: "search",
    url: "/search",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dignissimos animi perspiciatis itaque similique error reiciendis sunt qui id, totam quia voluptates modi, in illum voluptate laboriosam, obcaecati maxime magni.",
    description: "Want to follow your Representative?",
  },
  {
    id: 3,
    name: "add record",
    url: "/add_record",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dignissimos animi perspiciatis itaque similique error reiciendis sunt qui id, totam quia voluptates modi, in illum voluptate laboriosam, obcaecati maxime magni.",
    description: "Want to follow your Representative?",
  },
];

const Todo = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-100 to-slate-200 py-8">
      <div className="max-w-4xl w-full flex flex-col align-middle mx-auto justify-center items-center gap-4">
        <h1 className="font-bold text-3xl text-center">
          Want to follow your Representative?
        </h1>
        <div  className="flex flex-row gap-4 sm:flex-col px-4">
          {navData.map((data) => (
            <ul key={data.id} className="flex flex-col justify-center gap-4 items-center align-middle p-4 shadow-md bg-white rounded-md">
              <h1 className="text-center text-xl font-semibold">{data.description}</h1>
              <h4 className="text-center text-slate-700">{data.content}</h4>
              <Button asChild>
                <Link href={data.url} className="btn btn-primary">
                  {data.name}
                </Link>
              </Button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
