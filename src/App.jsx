import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
const routerLocation = useLocation();
const currentLocation = routerLocation.pathname.split("/")[1] || "syracuse";

return (
<>

<Navbar location={currentLocation} />
<main className="min-h-screen">
 <Routes>

{/* Default */}
<Route
 path="/"
 element={
 <Navigate to="/syracuse" replace />
}
/>

{/* Location Contact */}
<Route
path="/:location/contact"
element={<Contact />}/>

{/* Location Privacy */}
<Route
 path="/:location/privacy"
 element={<Privacy />} />

{/* Location Terms */}
<Route
 path="/:location/terms"
element={<Terms />} />

{/* Location Home */}
 <Route
  path="/:location"
element={<Home />}
 />

 {/* Old Terms URL */}
 <Route
 path="/terms"
 element={
 <Navigate to="/syracuse/terms" replace /> }
 />

{/* Old Privacy URL */}
<Route
 path="/privacy"
 element={
 <Navigate to="/syracuse/privacy" replace /> }
 />

{/* Error */}
 <Route
 path="*"
 element={
 <Navigate to="/syracuse" replace /> }
 />
 </Routes>
</main>

 <Footer location={currentLocation} />
</>

  );

}

export default App;