import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Stats from "./pages/Stats";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { WeatcherProvider } from "./contexts/weatherContext";
import { Toaster } from "react-hot-toast";
import Authorization from "./pages/Authorization";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <AuthorizationProvider>
      <WeatcherProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="auth" element={<Authorization />} />
              <Route
                path="stats"
                element={
                  <ProtectedRoute>
                    <Stats />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster></Toaster>
      </WeatcherProvider>
    </AuthorizationProvider>
  );
}

export default App;
