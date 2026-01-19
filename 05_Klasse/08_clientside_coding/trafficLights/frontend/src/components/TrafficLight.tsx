interface TrafficLightProps {
  color: "red" | "orange" | "green";
  onClick?: () => void;
}

function TrafficLight({ color, onClick }: TrafficLightProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col gap-4 bg-[#333] border-4 border-[#222] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
        onClick
          ? "cursor-pointer hover:scale-105 transition-transform duration-200"
          : ""
      }`}
    >
      <div
        className={`w-24 h-24 rounded-full border-2 border-[#444] transition-all duration-300 ${
          color === "red"
            ? "bg-red-600 shadow-[0_0_30px_#ff0000,0_0_60px_#ff0000]"
            : "bg-[#4a0000]"
        }`}
      ></div>
      <div
        className={`w-24 h-24 rounded-full border-2 border-[#444] transition-all duration-300 ${
          color === "orange"
            ? "bg-orange-500 shadow-[0_0_30px_#ffa500,0_0_60px_#ffa500]"
            : "bg-[#4a3000]"
        }`}
      ></div>
      <div
        className={`w-24 h-24 rounded-full border-2 border-[#444] transition-all duration-300 ${
          color === "green"
            ? "bg-green-500 shadow-[0_0_30px_#00ff00,0_0_60px_#00ff00]"
            : "bg-[#004a00]"
        }`}
      ></div>
    </div>
  );
}

export default TrafficLight;
