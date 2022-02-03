import Typewriter from "typewriter-effect";
import CircleAnimation from "./CircleAnimation";
function HeroImage() {
  return (
    <div className="hero-image relative flex flex-col justify-center items-center container bg-cover mx-auto h-screen">
      <Typewriter
        options={{
          strings: ["Daniel Isaksen", "Front End Developer"],
          autoStart: true,
          loop: true,
        }}
      />
      <CircleAnimation />
    </div>
  );
}
export default HeroImage;
