import {
  Facebook,
  Volleyball,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";
import ProfileImg from "../assets/profileImg.png";
import Card from "./Card";

const Hero = ({ name, YOE }) => {
  const userInfo = [
    {
      name: "Tunde Adebayo",
      occupation: "Student",
      age: 17,
      language: "Yoruba",
      address: "Ekiti State",
    },
    {
      name: "Chiamaka Okafor",
      occupation: "Teacher",
      age: 32,
      language: "Igbo",
      address: "Anambra State",
    },
    {
      name: "Abdulrahman Musa",
      occupation: "Engineer",
      age: 28,
      language: "Hausa",
      address: "Kaduna State",
    },
    {
      name: "Terna Iorfa",
      occupation: "Doctor",
      age: 40,
      language: "Tiv",
      address: "Benue State",
    },
    {
      name: "Iniobong Essien",
      occupation: "Trader",
      age: 25,
      language: "Ibibio",
      address: "Akwa Ibom State",
    },
    {
      name: "Fatima Ali",
      occupation: "Lawyer",
      age: 35,
      language: "Kanuri",
      address: "Borno State",
    },
    {
      name: "Emmanuel James",
      occupation: "Artist",
      age: 22,
      language: "Fulfulde",
      address: "Adamawa State",
    },
    {
      name: "Musa Etsu",
      occupation: "Farmer",
      age: 50,
      language: "Nupe",
      address: "Niger State",
    },
    {
      name: "Osas Ighodaro",
      occupation: "Banker",
      age: 30,
      language: "Edo",
      address: "Edo State",
    },
    {
      name: "Bola Johnson",
      occupation: "Software Developer",
      age: 27,
      language: "English",
      address: "Lagos State",
    },
  ];

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-tr from-slate-200 via-teal-100/20 to-primary/15 pb-10">
      <div className=" mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 min-h-[90vh]">
          {/* first section */}
          <div className="space- w-full">
            <div className="font-montserrat font-bold text-4xl">
              Hello, {name}
            </div>
            <p className="text-gray-600 text-sm mt-5 max-w-[80%] tracking-wide leading-6">
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <button className="bg-primary text-white text-sm py-2 px-4 rounded-md mt-5">
              Say Hello!
            </button>
            <div className="mt-20 flex items-center gap-0.5">
              <div className="flex justify-center items-center flex-col bg-primary/20 py-2 px-6 rounded-md">
                <h2 className="font-semibold text-lg">{YOE} Y.</h2>
                <h4 className="text-xs text-gray-700">Experience</h4>
              </div>
              <div className="flex justify-center items-center flex-col bg-primary/20 py-2 px-6 rounded-md">
                <h2 className="font-semibold text-lg">250+</h2>
                <h4 className="text-xs text-gray-700">Project Completed</h4>
              </div>
              <div className="flex justify-center items-center flex-col bg-primary/20 py-2 px-6 rounded-md">
                <h2 className="font-semibold text-lg">58</h2>
                <h4 className="text-xs text-gray-700">Happy Client</h4>
              </div>
            </div>
          </div>

          {/* second section (Profile image) */}
          <div className="h-80 w-full bg-white rounded-lg">
            <img
              src={ProfileImg}
              alt="profile image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="p-10 shadow-lg flex items-center gap-6 bg-white rounded-lg mt-5">
          <div className="relative bg-slate-200 rounded-lg">
            <img
              src={ProfileImg}
              alt=""
              className="w-full h-full object-contain"
            />
            <div className="shadow-lg p-3 bg-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex gap-2 text-primary">
              <Facebook className="hover:text-white hover:bg-primary hover:rounded-md " />
              <Volleyball className="hover:text-white hover:bg-primary hover:rounded-md " />
              <Instagram className="hover:text-white hover:bg-primary hover:rounded-md " />
              <Linkedin className="hover:text-white hover:bg-primary hover:rounded-md " />
            </div>
          </div>

          <div className="-mb-10">
            <h2 className="font-bold text-2xl">
              I am Professional Frontend Developer
            </h2>
            <p className="mt-5 tracking-wide leading-6 text-xs text-gray-600">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="mt-2 tracking-wide leading-6 text-xs text-gray-600">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>

            <div className="flex gap-2 items-center mt-5">
              <button className="py-2 px-6 text-white text-sm rounded bg-primary">
                My project
              </button>
              <button className="py-1.5 px-6 text-primary text-sm border border-primary rounded flex items-center gap-2">
                {" "}
                <Download /> Download CV
              </button>
            </div>
          </div>
        </div>
        {/* explicite return*/}
        {/* {userInfo.map((singeInfo, i) => {
          return (
            <Card
              key={i}
              name={singeInfo.name}
              age={singeInfo.age}
              occupation={singeInfo.occupation}
              location={singeInfo.address}
              language={singeInfo.language}
            />
          );
        })} */}
        {/* implicite return */}
        {userInfo.map((singleInfo, i) => (
          <Card
            key={i}
            name={singleInfo.name}
            age={singleInfo.age}
            occupation={singleInfo.occupation}
            location={singleInfo.address}
            language={singleInfo.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
