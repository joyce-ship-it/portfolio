import fastreactpizaa from "../assets/fastreactpizza.png";
import weatherApp from "../assets/weatherApp.png";
import restaurant from "../assets/restaurant.png";
import library from "../assets/library.png";
import signUp from "../assets/sign-up.png";
import tictactoe from "../assets/tic-tac-toe.png";
import Item from "./Item";
export default function Projects() {
  const projectArr = [
    {
      id: 1,
      name: "fast react pizza",
      img: fastreactpizaa,
      type: "React",
      githubURL: "https://github.com/joyce-ship-it/fast-react-pizza",
      liveURL: "https://fast-react-pizza-rtk.netlify.app/",
    },
    {
      id: 2,
      name: "weather app",
      img: weatherApp,
      type: "JS",
      githubURL: "https://github.com/joyce-ship-it/weather-app",
      liveURL: "https://joyce-ship-it.github.io/weather-app/",
    },
    {
      id: 3,
      name: "restaurant",
      img: restaurant,
      type: "JS",
      githubURL: "https://github.com/joyce-ship-it/restaurant",
      liveURL: "https://joyce-ship-it.github.io/restaurant/",
    },
    {
      id: 4,
      name: "library",
      img: library,
      type: "JS",
      githubURL: "https://github.com/joyce-ship-it/Library",
      liveURL: "https://joyce-ship-it.github.io/Library/",
    },
    {
      id: 5,
      name: "sign-up-form",
      img: signUp,
      type: "JS",
      githubURL: "https://github.com/joyce-ship-it/sign-up-form",
      liveURL: "https://joyce-ship-it.github.io/sign-up-form/",
    },
    {
      id: 6,
      name: "tic-tac-toe",
      img: tictactoe,
      type: "JS",
      githubURL: "https://github.com/joyce-ship-it/tic-tac-toe",
      liveURL: "https://joyce-ship-it.github.io/tic-tac-toe/",
    },
  ];
  return (
    <>
      <main className="flex flex-wrap sm:w-full md: w-full lg:w-full sm:gap-4 md:gap-6 gap-2 justify-center mt-8 p-4 sm:p-6 ">
        {projectArr.map((item) => {
          return <Item key={item.id} data={item}></Item>;
        })}
      </main>
      <footer className="bg-black text-green-500 p-2 sm:p-4 w-screen">
        contact: joycethomas2244@gmail.com
      </footer>
    </>
  );
}
