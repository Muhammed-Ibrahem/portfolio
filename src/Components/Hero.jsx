const Hero = () => {
  return (
    <section
      id="home"
      className=" container mx-auto flex h-[calc(100vh-80px)] items-center p-4 text-SolidHeading dark:text-HeroHeading"
    >
      <h1 className="text-[clamp(2em,6vw,6em)]  font-bold">
        Hi 👋 ,
        <br />
        My name is <br />
        <span className="block w-fit bg-gradient-to-r from-GradientStart to-GradientEnd bg-clip-text text-transparent">
          Muhammed Ibrahem
        </span>
        I'm a frontend developer
      </h1>
    </section>
  );
};

export default Hero;
