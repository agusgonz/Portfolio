import HeroSection from "./components/madeSections/HeroSection"
import ProjectsSection from "./components/madeSections/ProjectsSection"
import ContactmeSection from "./components/madeSections/ContactmeSection"
import Aboutme from "./components/madeSections/Aboutme"
import Navbar from "./components/Navbar"

function App() {
	return (
		<main className="font-montserrat text-white scroll-smooth h-screen bg-dark-gray ">
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<Aboutme />
			<ContactmeSection />
		</main>
	)
}

export default App
