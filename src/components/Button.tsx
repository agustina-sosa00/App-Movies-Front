import React from "react";

interface props {
  text: string;
  icon?: React.ElementType;
  width?: string;
  height?: string;
  positionIcon?: "left" | "right";
  type: "primary" | "secondary" | "tertiary";
}

const Button = (props: props) => {
  return (
    <div className="flex gap-10">
      {/* PRIMARY */}
      {/* PRIMARY */}

      {props.type === "primary" &&
        props.icon &&
        props.positionIcon === "left" && (
          <button
            className={`bg-indigo-900  justify-center items-center  text-white  text-bold py-2 px-3 flex gap-2 text-medium rounded text-center hover:bg-indigo-700 font-semibold ${props.width} ${props.height}`}
          >
            <props.icon /> {props.text}
          </button>
        )}

      {props.type === "primary" &&
        props.icon &&
        props.positionIcon === "right" && (
          <button
            className={`bg-indigo-900 text-white py-2 px-3  flex justify-center items-center gap-2 text-medium rounded text-center  hover:bg-indigo-700 font-semibold ${props.width} ${props.height}`}
          >
            {props.text} <props.icon />
          </button>
        )}

      {props.type === "primary" && !props.icon && (
        <button
          className={`bg-indigo-900 text-white py-2 px-3 rounded text-center flex justify-center items-center  hover:bg-indigo-700 font-semibold ${props.width} ${props.height}`}
        >
          {props.text}
        </button>
      )}

      {/* SECONDARY */}
      {/* SECONDARY */}

      {props.type === "secondary" &&
        props.icon &&
        props.positionIcon === "left" && (
          <button
            className={`bg-white border-indigo-900 border-1  py-2 px-3 rounded text-center  hover:bg-indigo-900/10 flex items-center justify-center gap-2 text-indigo-800 font-semibold ${props.width} ${props.height}`}
          >
            <props.icon /> {props.text}
          </button>
        )}
      {props.type === "secondary" &&
        props.icon &&
        props.positionIcon === "right" && (
          <button
            className={`bg-white border-indigo-900 border-1  py-2 px-3 rounded text-center hover:bg-indigo-900/10 flex items-center justify-center gap-2 text-indigo-800 font-semibold ${props.width} ${props.height}`}
          >
            {props.text} <props.icon />
          </button>
        )}

      {props.type === "secondary" && !props.icon && (
        <button
          className={`bg-white border-indigo-900 border-1 flex justify-center items-center py-2 px-3 rounded text-center hover:bg-indigo-900/10 text-indigo-800 font-semibold ${props.width} ${props.height}`}
        >
          {props.text}
        </button>
      )}
    </div>
  );
};

export default Button;
