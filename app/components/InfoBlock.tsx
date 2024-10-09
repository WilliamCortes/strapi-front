import React, { FC } from "react";
import { InfoRight } from "./infoRight";
import { InfoLeft } from "./infoLeft";

type Props = {
  prop?: unknown;
};

export const InfoBlock: FC<Props> = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Row --> */}
        <InfoLeft />
        {/* <!-- Row --> */}
        <InfoRight />
      </div>
    </section>
  );
};
