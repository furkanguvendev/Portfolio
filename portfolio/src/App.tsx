import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect, useState } from "react";
import { getData } from "./store/actions/action";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data);

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getData());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (isLoading || !data) {
    return (
      <div className="spinner-container w-full h-full flex items-center justify-center">
        <div className="spinner">
        <div className="spinner">
          <div className="spinner">
            <div className="spinner">
              <div className="spinner">
                  <div className="spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
