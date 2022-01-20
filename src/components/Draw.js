import react, { useState } from "react";

import Point from "./Point";
import "./Draw.css";
import Link from "./Link";
import Lines from "./Line";

const Draw = ({ number, numPlayer, setNumPlayer }) => {
  const [line, setLine] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const refresher = () => {
    setRefresh(!refresh);
  };
  return (
    <div className="main2">
      <svg width={600} height={600}>
        <Lines
          line={line}
          setLine={setLine}
          numPlayer={numPlayer}
          setNumPlayer={setNumPlayer}
          refresher={refresher}
        />
        <Point setLine={setLine} number={number} />
      </svg>

      <Link href={"./"}>
        <button type="button" className="btn btn-outline-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            ></path>
          </svg>
          Back
        </button>
      </Link>
    </div>
  );
};

export default Draw;
