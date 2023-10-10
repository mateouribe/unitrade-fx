import graph_bg from "../../../../assets/graph_bg.svg";

const Lines = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: `url(${graph_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden w-full h-full lg:block">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 1279 472"
          fill="none"
        >
          <path
            className="pathUp"
            d="M-62 564.5L527 383.5L649 476L1524 -52"
            stroke="#00FFD1"
            strokeWidth="5"
            // path-length={0}
          />
        </svg>
      </div>
    </div>
  );
};

export default Lines;
