import Homepage from "./screens/Homepage";
import HelpCenter from "./screens/support/helpcenter";
import Events from "./screens/User/Events";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </>
  );
}

export default App;

