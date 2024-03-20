import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { AboutmePage } from "./Pages/AboutmePage/AboutmePage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { ExperiencePage } from "./Pages/ExperiencePage/ExperiencePage";
import { IntroPage } from "./Pages/IntroPage/IntroPage";
import { ProjectsPage } from "./Pages/ProjectsPage/ProjectsPage";
import { ServicesPage } from "./Pages/ServicesPage/ServicesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />
      <AboutmePage />
      <ServicesPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
