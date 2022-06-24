import { Routes, Route, Navigate } from "react-router-dom";
import StepOne from "../pages/StepOne";
import StepTwo from "../pages/StepTwo";
import StepThree from "../pages/StepThree";
import Confirme from "../pages/Confirme";

export const Router = () => {
  return (
    <Routes>
      <Route path="/step-one" element={<StepOne />} />
      <Route path="/step-two" element={<StepTwo />} />
      <Route path="/step-three" element={<StepThree />} />
      <Route path="/confirm" element={<Confirme />} />
      <Route path="*" element={<Navigate to="/step-one" replace />} />
    </Routes>
  );
};
