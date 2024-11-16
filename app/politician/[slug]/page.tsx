import { client, urlFor } from "@/app/api/sanity";
import Footer from "@/app/homepage/Footer";
import Navbar from "@/app/utils/Navbar";
import { Any, PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == 'politician' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    titleImage,
    title,
    name,
    position,
    regionRepresented,
    stateFrom,
    currentPosition,
    responsibilities,
    contactInformation,
    projects,
    termDurationTracking,
    educationalBackground
  }[0]`;
  const data = await client.fetch(query);
  return data;
}

interface PoliticianData {
  title: string;
  currentSlug: string;
  titleImage: string;
  name: string;
  position: string;
  regionRepresented: string;
  stateFrom: string;
  currentPosition: string;
  responsibilities: Any;
  contactInformation: string;
  projects: Any;
  termDurationTracking: string;
  educationalBackground: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data: PoliticianData = await getData((await params).slug);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-8 gap-4 bg-slate-300">
        <Image
          src={urlFor(data.titleImage).url()}
          alt={data.title}
          width={300}
          height={300}
          priority
          className="rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 prose prose-blue prose-xl">
        <div className="flex flex-row gap-2 justify-center align-middle items-center">
          <h1 className="text-2xl font-bold text-center">{data.title}</h1>

          <h1 className="font-bold text-2xl">{data.name}</h1>
        </div>
        <p>
          <strong>Position:</strong> {data.position}
        </p>
        <p>
          <strong>Region Represented:</strong> {data.regionRepresented}
        </p>
        <p>
          <strong>State From:</strong> {data.stateFrom}
        </p>
        <p>
          <strong>Current Position:</strong> {data.currentPosition}
        </p>
        <p>
          <strong>Term Duration Tracking:</strong> {data.termDurationTracking}
        </p>

        <h3>Responsibilities</h3>
        <PortableText value={data.responsibilities} />

        <h3>Contact Information</h3>
        <p>{data.contactInformation}</p>

        <h3>Projects</h3>
        <PortableText value={data.projects} />

        <h3>Educational Background {data.educationalBackground}</h3>
      </div>
      <Footer />
    </>
  );
}
