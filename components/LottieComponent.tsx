import dynamic from "next/dynamic";
import animationData from "../app/animation/Animation.json"

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
