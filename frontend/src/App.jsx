import Homepage from "./screens/Homepage";
import HelpCenter from "./screens/support/helpcenter";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </>
  );
}

export default App;

