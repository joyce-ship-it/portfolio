export default function Item({ data }) {
  return (
    <article
      className="min-h-50 min-w-50 sm: max-h-70 sm: max-w-70 md: max-h-100 md: max-w-100 bg-gray-700
    p-2 sm:p-4 md:p-6 flex flex-col gap-2 rounded-md shadow-md transition-shadow hover:shadow-fuchsia-400 duration-300 mb-4"
    >
      <img
        src={data.img}
        className="w-full h-[60%] object-cover rounded-md"
        alt="project image"
      ></img>
      <h4 className="text-base sm:text-2xl md:text-3xl uppercase font-mono text-green-500 italic">
        {data.name}
      </h4>
      <div className="flex justify-around">
        <a
          href={data.githubURL}
          className="text-green-400 p-2 bg-black rounded-md text-base w-[6rem] sm:w-[8rem] 
         font-semibold hover:text-green-700 transition-colors duration-300 ease-in"
        >
          Github
        </a>
        <a
          href={data.liveURL}
          className="text-green-400 p-2 bg-black rounded-md text-base w-[6rem] sm:w-[8rem] hover:font-semibold
          hover:text-green-700 transition-colors duration-300 ease-in font-semibold"
        >
          Live
        </a>
      </div>
    </article>
  );
}
