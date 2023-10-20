import { Github, Linkedin } from "lucide-react"
import Card from "./components/Card"
import Layout from "./components/Layout"
import Title from "./components/Title"
import { PROJECTS_DATA } from "./utils/const"

function App() {
	return (
		<div className="font-roboto text-white scroll-smooth h-screen bg-dark-gray ">
			<Layout className="bg-dark-gray">
				{/* <nav className="flex justify-end ">
					<a
						href="#contact-me"
						className="text-yellow underline "
					>
						Contact me
					</a>
				</nav> */}
				<main>
					<div className="flex flex-col gap-10 max-w-[380px] md:max-w-[600px] mx-auto">
						<div className="flex flex-col justify-between items-center md:flex-row gap-5 md:gap-0">
							<img
								src="/avatar.svg"
								className="w-[200px]"
							/>
							<div className="flex flex-col gap-2 overflow-hidden">
								<h1 className="text-5xl text-center animate-slideLeftToRight1s ">
									Agustín González
								</h1>
								<p className="text-2xl text-center md:text-start text-white/80 animate-slideLeftToRight1.5s ">
									Frontend Developer
								</p>
							</div>
						</div>
						<div className=" text-center mx-auto">
							Passionate Web Developer with specialization
							in frontend modern technologies using{" "}
							<span className="italic"> React.js </span>
							and{" "}
							<span className="italic"> Typescript</span>.
						</div>
					</div>
				</main>
			</Layout>
			<Layout className="bg-gray">
				<Title text={"Projects"} />
				<div className="flex flex-col py-8 gap-8 justify-center items-center">
					{PROJECTS_DATA.map(project => {
						return (
							<Card
								key={project.title}
								title={project.title}
								description={project.description}
								imageSrc={project.imageSrc}
								tags={project.tags}
								pageLink={project.pageLink}
								githubLink={project.githubLink}
							/>
						)
					})}
				</div>
			</Layout>
			<Layout className="bg-dark-gray">
				<Title text={"Contact me"} />

				<div
					id="contact-me"
					className="py-8  mx-auto max-w-[380px] md:max-w-[600px] flex flex-col gap-8"
				>
					<p className="text-center">
						If you wanna get in touch, talk to me about a
						project collaboration or just say hi, don't
						hesitate to reach me on my social accounts.
					</p>
					<div className="w-min flex flex-col gap-4 mx-auto">
						<a
							target="_blank"
							href="https://github.com/agusgonz"
							className="text-yellow underline flex gap-2"
						>
							<Github className="w-6" />
							GitHub
						</a>

						<a
							target="_blank"
							href="https://github.com/agusgonz"
							className="text-yellow underline  flex justify-center gap-2"
						>
							<Linkedin className="w-6" />
							Linkedin
						</a>
					</div>
				</div>
			</Layout>
		</div>
	)
}

export default App
