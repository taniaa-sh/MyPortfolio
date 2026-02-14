import React from "react";
import dynamic from "next/dynamic";
import animationData from "@/app/animation/Animation - 1747122962556 (8).json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // ← don’t render on server
  loading: () => null, // optional loader
});

const LottieComponent = () => {
  return (
    <Lottie
      className="w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px] aspect-square rounded-full"
      animationData={animationData}
      loop={true}
    />
  );
};

export default LottieComponent;
