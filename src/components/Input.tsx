import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

interface Props {
  type: "text" | "password" | "email" | "number" | "date" | "select";
  options?: string[];
  placeholder?: string;
  label?: string;
  width?: string;
  height?: string;
}

const Input = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* PASSWORD */}

      {props.type === "password" && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
            />
            {showPassword ? (
              <IoEyeOutline
                onClick={handlePassword}
                className="absolute top-[30%] right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOffOutline
                onClick={handlePassword}
                className="absolute top-[30%] right-3 cursor-pointer"
              />
            )}
          </div>
        </div>
      )}

      {/* DATE */}

      {props.type === "date" && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <input
            type="date"
            className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
          />
        </div>
      )}

      {/* EMAIL */}

      {props.type === "email" && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <input
            type="email"
            className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
          />
        </div>
      )}

      {/* NUMBER */}

      {props.type === "number" && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <input
            type="number"
            className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
          />
        </div>
      )}

      {/* SELECT */}

      {props.type === "select" && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <select
            className={`select select-accent min-w-52 ${props.width} ${props.height}`}
          >
            {props.options?.map((option, i) => (
              <option key={i} value={option} selected>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {props.type === "text" && props.label && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={props.label}
            className="text-secring-accent font-medium"
          >
            {props.label}
          </label>
          <input
            type="text"
            className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
          />
        </div>
      )}
      {props.type === "text" && !props.label && (
        <input
          type={props.type}
          className={`border-[1px] rounded border-accent  pl-2 py-1 min-w-52 focus:border-secring-accent focus:border-[1px] focus:outline-none
              focus:ring-[1px] focus:ring-accent ${props.width} ${props.height}`}
          placeholder={props.placeholder}
        />
      )}
    </>
  );
};

export default Input;
