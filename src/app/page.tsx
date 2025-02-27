"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { unstable_ViewTransition as ViewTransition } from "react";

const Card = ({ index }: { index: number }) => {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  return (
    <Link
      href={`/detail/${index}`}
      onClick={(e) => {
        e.preventDefault();

        setSelected("card");
        startTransition(() => {
          router.push(`/detail/${index}`);
        });
      }}
    >
      <ViewTransition name={selected}>
	  	<div className="relative overflow-hidden || aspect-square md:aspect-[5/7] || rounded-sm">
			<div className="absolute inset-0 || aspect-square md:aspect-video || size-full">
				<Image
					src={`https://loremflickr.com/1920/1080/cat?random=${index}`}
					width={1920}
					height={1080}
					alt={`Card ${index}`}
					className={`object-cover size-full || transition`}
				/>
			</div>
		</div>
      </ViewTransition>

      <div className="p-4 xl:p-5">
        <h3 className="font-semibold">Card Title {index}</h3>
        <p className="text-gray-600">Some description text here</p>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <div className="pt-10 xl:pt-32 || container mx-auto">
        <h1 className="text-4xl font-bold">View Transition</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 || gap-4 xl:gap-8 || py-10 xl:py-20 || container mx-auto">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} index={index} />
        ))}
      </div>
    </>
  );
}
