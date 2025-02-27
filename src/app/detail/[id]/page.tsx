"use client";

import Image from "next/image";

import { unstable_ViewTransition as ViewTransition } from "react";

import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return (
    <>
      <ViewTransition name="card">
        <div className="max-h-screen relative overflow-hidden">
          <div className="relative || aspect-square md:aspect-video || w-full">
            <div className="absolute inset-0 || size-full">
              <Image
                priority
                src={`https://loremflickr.com/1920/1080/cat?random=${id}`}
                width={1920}
                height={1080}
                alt="Card 1"
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </ViewTransition>

      <div className="py-10 xl:py-32 || container mx-auto || space-y-4">
        <h1 className="text-4xl font-bold">Detail page</h1>
        <p className="text-gray-600">Some description text here</p>
      </div>
    </>
  );
}
