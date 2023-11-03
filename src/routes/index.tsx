import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/Home";

const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route 
        >
        <Route index path="/" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
