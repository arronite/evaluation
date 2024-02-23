import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import StyleSheet from "./StyleSheet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WorksSection } from "./pages/WorksSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Section />,
  },
  {
    path: "/Works",
    element: <WorksSection />,
  },
]);

//دلیل ایجاد روتر در app ایجاد layout

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
