import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Stats from "./pages/Stats";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { WeatcherProvider } from "./contexts/weatherContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <WeatcherProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster></Toaster>
    </WeatcherProvider>
  );
}

export default App;
