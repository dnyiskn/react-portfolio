import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CircleAnimation from "./CircleAnimation";
function HeroImage() {
  return (
    <div className="hero-image relative flex flex-col justify-center items-center container bg-cover mx-auto h-screen">
      <Typewriter
        options={{
          strings: ["Daniel Isaksen", "Frontend Developer"],
          autoStart: true,
          loop: true,
        }}
      />
      <CircleAnimation />
      <FontAwesomeIcon
        icon={faAngleDown}
        size="3x"
        className="absolute bottom-0 z-5 text-slate-200 animate-bounce"
      />
    </div>
  );
}
export default HeroImage;
