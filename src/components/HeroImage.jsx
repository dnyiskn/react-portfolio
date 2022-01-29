import Typewriter from "typewriter-effect";

function HeroImage() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto h-screen">
      <Typewriter
        options={{
          strings: ["Daniel Isaksen", "Front End Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
export default HeroImage;
