import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  const subtractBy = () => {
    dispatch(actions.subtractBy(10));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-6xl font-bold mb-8">Counter App</h1>
        <h2 className="text-4xl font-bold text-center mb-8">{counter}</h2>
        <div className="flex flex-col justify-center gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={subtractBy}
          >
            Subtract by 10
          </button>
          <div className="flex justify-center gap-4">
            <button
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={decrement}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={increment}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addBy}
          >
            Add by 10
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
