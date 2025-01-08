import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect, useState } from "react";
import { getData } from "./store/actions/action";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Aboutme } from "./Components/Aboutme";

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
      <div className="spinner-container">
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
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<Aboutme />} />
    </Routes>
  );
}

export default App;
