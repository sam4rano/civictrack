import { client, urlFor } from "@/app/api/sanity";
import Image from "next/image";
import React from "react";
import Navbar from "../utils/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "../homepage/Footer";

export const revalidate = 30;
async function getData() {
  const query = `*[_type == 'politician'] {
  name,
    titleImage,
    "currentSlug": slug.current,
    title,
    position,
    stateFrom,
    regionRepresented
	  }`;
  const data = await client.fetch(query);
  return data;
}

// Define the type for simpleBlogCard
type politicianCard = {
  name: string;
  title: string;
  currentSlug: string;
  titleImage: string;
  stateFrom: string;
  regionRepresented: string;
}[];

export default async function page() {
  const data: politicianCard = await getData();

  console.log("data", data);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center items-center align-middle gap-4 py-8 bg-slate-200 sm:flex-col sm:gap-4">
        {data.map((item) => (
          <Card key={item.currentSlug}>
            <div className="w-80 h-80">
              <Image
                src={urlFor(item.titleImage).url()}
                alt={item.title}
                width={300}
                height={300}
              />
            </div>
            <CardContent className="p-4">
              <div className="flex flex-row gap-2 justify-center align-middle items-center">
                <h1>{item.title}</h1>
                <h1>{item.name}</h1>
              </div>
              <div className="flex flex-col justify-center align-middle items-center gap-4">
                <h1>{item.stateFrom}</h1>
                <h1>{item.regionRepresented}</h1>
              </div>
              <Button asChild className="w-full mt-4 px-4">
                <Link href={`politician/${item.currentSlug}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
