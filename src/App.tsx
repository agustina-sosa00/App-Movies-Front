// import Button from "./components/Button";
// import { IoMdClose } from "react-icons/io";

import Input from "./components/Input";

function App() {
  const array = ["a", "b", "c"];
  return (
    <div className="flex justify-center items-start pt-20 h-screen gap-5 flex-wrap">
      {/* <h1 className="text-red-500">Movies App</h1> */}
      {/* <Button
        text="Button"
        type="secondary"
        // height="h-[200px]"
        // width="w-[200px]"
        // icon={IoMdClose}
        // positionIcon="left"
      /> */}

      <Input label="texto" type="select" options={array} />
      <Input label="texto" type="date" />
      <Input label="texto" type="text" />
      <Input label="texto" type="email" />
      <Input label="texto" type="password" />
      <Input label="texto" type="number" />
    </div>
  );
}

export default App;
