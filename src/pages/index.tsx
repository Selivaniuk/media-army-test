import { Header } from "components";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
