import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [isHover, setIsHover] = useState(false);
  const handleHoverOn = () => {
    setIsHover(true);
  };
  const handleHoverOff = () => {
    setIsHover(false);
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://api.adviceslip.com/advice");
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const updateAdvice = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <div className="flex flex-col justify-center items-center w-full font-manrope font-extrabold md:text-9xl leading-4 text-center tracking-wider text-neon bg-transparent text-2xl">
      Loading...
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center w-[343px] bg-[#374151] shadow-lg rounded-[10px] m-auto px-[24px] pt-10 xl:w-2/6">
      <div className="flex flex-col justify-center items-center gap-y-6 bg-transparent mb-6">
        <div className="font-manrope font-extrabold text-xs leading-4 text-center tracking-wider text-neon bg-transparent">
          Advice
          <span className="bg-transparent">"#{data?.slip?.id}"</span>
        </div>
        <div className="font-manrope font-bold text-2xl text-center tracking-wide text-light bg-transparent">
          "{data?.slip?.advice}"
        </div>
      </div>
      <img
        className="bg-transparent md:hidden"
        src="./images/pattern-divider-mobile.svg"
        alt="patter divider"
      />
      <img
        className="bg-transparent max-md:hidden  "
        src="./images/pattern-divider-desktop.svg"
        alt="patter divider"
      />
      <button className=" translate-y-8 cursor-pointer">
        <div
          className="w-16 h-16 rounded-full relative bg-neon"
          onClick={updateAdvice}
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{
            boxShadow: isHover ? "0px 0px 40px #53FFAA" : "none",
          }}
        >
          <img
            className="absolute top-0 translate-x-5 translate-y-5 bg-transparent"
            src="./images/icon-dice.svg"
            alt="dice"
          />
        </div>
      </button>
    </div>
  );
}

export default App;
