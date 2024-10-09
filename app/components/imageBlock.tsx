import React, { FC } from "react";
import Image from "next/image";
import water from "~/app/assets/water_bgc.jpg";

type Props = {
  prop?: unknown;
};

export const ImageBlock: FC<Props> = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="relative w-full h-48">
          {/* <div className="relative w-full"> */}
          <Image
            className="ib-img"
            layout="fill"
            src={water}
            alt="image"
            priority
          />
        </div>
      </div>
    </section>
  );
};
