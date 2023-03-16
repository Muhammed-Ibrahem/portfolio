import Icons from "../assets/DarkModeHeaderIcon";
const Contacts = () => {
  return (
    <section
      id="contact"
      className="container mx-auto flex flex-col items-center justify-between py-20 px-4 font-Poppins text-SolidHeading dark:text-LightContent md:flex-row"
    >
      <span className="text-2xl font-bold text-SolidHeading dark:text-white">
        SuKaar
      </span>
      <div className="w-3/2 flex w-full flex-col items-center gap-8 md:w-auto md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="w-full text-center sm:w-auto">+20 15 5800 2847</p>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center sm:w-auto sm:whitespace-normal">
            Muhammedibrahem001@gmail.com
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Muhammed-Ibrahem/" target="_blank">
            <img
              src={Icons.DarkGithub}
              alt="Github icon that sends to my github account"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-ibrahem-5a02ba253/"
            target="_blank"
          >
            <img
              src={Icons.DarkLinkedIn}
              alt="Linkedin icon that send to my linkedin account"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
