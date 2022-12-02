import "./App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

function App() {
  const projects = [
    {
      year: 2022,
      title: "Colab at Pitt",
      tags: ["Design"],
      link: "https://www.figma.com/file/R4QlOWJieaAns7aEqYJhOB/2022-%C2%B7-Colab?t=KUnbaPq4R7km6EcD-1"
    },
    {
      year: 2022,
      title: "OpenAI with Spotify",
      tags: ["Design", "Engineering"],
      link: "https://www.figma.com/file/spSPLPkPpgse7bZzOhqkgG/2022-%C2%B7-OpenAI-with-Spotify?node-id=0%3A1&t=MUeiGUv7JISosUh7-1"
    },
    {
      year: 2022,
      title: "Gamified Tamagotchi",
      tags: ["Design", "Engineering"],
      link: "https://www.figma.com/file/mVTrOIYLUJholeNkg98P7g/2022-%C2%B7-Gamified-Tamagotchi?node-id=0%3A1&t=3lj7pit0PaPjeasQ-1"
    },
    {
      year: 2020,
      title: "People's App",
      tags: ["Design", "Engineering"],
      link: "https://www.figma.com/file/kNcGCrzxVpQ9VQxW5RyKVR/2022-%C2%B7-People's-App?node-id=0%3A1&t=sCOrQSqwjKQ9vVk1-1"
    },
  ];

  return (
    <div className="App">
      <a className="btn">
        <a href="https://www.linkedin.com/in/leonatajeff/" className="border-solid border bg-opacity-10 border-gray-300 bg-neutral-50 rounded-full outline-4 px-4 py-2 inline-flex items-center">
          <span className="text-slate-50 font-semibold mr-3">
            Now · Looking for a new grad role in design or engineering
          </span>
          <ArrowRightIcon className="h-5 w-5 text-slate-50" />
        </a>
      </a>
      <h1 className="font-bold m-6">Jefferson Leonata</h1>
      <div>
        {projects.map((value, index) => {
          return (
            <a className="flex gap-x-2 items-center mb-3" href={value.link}>
              <span className="font-bold text-3xl" key={index}>
                {" "}
                {value.year} · {value.title}{" "}
              </span>
              {value.tags.map((tag) => {
                return (
                  <div className="bg-opacity-50 border rounded-full px-4">
                    {tag}
                  </div>
                );
              })}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
