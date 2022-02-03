export default function CircleAnimation() {
  return (
    <>
      <div className=" absolute mx-auto testing-circle z-1  ring-2 ring-blue-500 ring-offset-2 bg-gradient-to-r via-transparent from-blue-500 to-transparent animate-spin-slow"></div>
      <div className=" absolute mx-auto testing-circle z-2  ring-2 ring-blue-500 ring-offset-2 bg-gradient-to-r via-transparent from-green-400 to-transparent animate-spin-med"></div>
      <div className=" absolute mx-auto testing-circle z-3  ring-2 ring-blue-500 ring-offset-2 bg-gradient-to-r via-transparent from-transparent to-red-400 animate-spin-fast"></div>
      <div className=" absolute mx-auto testing-circle-block z-4"></div>
    </>
  );
}
