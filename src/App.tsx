import Button from "./components/Button";
// import { IoMdClose } from "react-icons/io";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <h1 className="text-red-500">Movies App</h1> */}
      <Button
        text="Button"
        type="primary"
        // height="h-[200px]"
        // width="w-[200px]"
        // icon={IoMdClose}
        // positionIcon="right"
      />
    </div>
  );
}

export default App;
