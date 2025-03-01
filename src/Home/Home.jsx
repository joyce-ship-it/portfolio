import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <h1 className="text-fuchsia-600 font-lobster text-3xl sm:text-4xl md:text-6xl font-semibold transition-colors  hover:text-fuchsia-900  ">
        Joyce - Front-End Engineer
      </h1>
      <Link to={"projects"}>
        <button className="p-2 mt-6 bg-black text-fuchsia-400 rounded-xl sm:rounded-2xl text-base sm:text-2xl cursor-pointer hover:shadow-fuchsia-500/50 transition-shadow shadow-lg animate-wiggle sm:mt-6 md:mt-8 hover:animate-none sm:p-4 md:p-6 md-text-3xl focus:text-green-600">
          Hey, check out my portfolio!
        </button>
      </Link>
    </div>
  );
}
