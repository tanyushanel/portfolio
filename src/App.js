import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { AboutmePage } from "./Pages/AboutmePage/AboutmePage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { ExperiencePage } from "./Pages/ExperiencePage/ExperiencePage";
import { IntroPage } from "./Pages/IntroPage/IntroPage";
import { ProjectsPage } from "./Pages/ProjectsPage/ProjectsPage";
import { lazy, Suspense, useEffect } from "react";
import { ServicesPage } from "./Pages/ServicesPage/ServicesPage";
import { Spinner } from "./components/Spinner/Spinner";
const ParticlesBackground = lazy(() =>
  import("./components/Particles/ParticlesBackground")
);

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <ParticlesBackground />
        <Header />
        <IntroPage />
        <AboutmePage />
        <ServicesPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
