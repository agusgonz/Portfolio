import { Github, Linkedin } from "lucide-react"
import Card from "./components/Card"
import Layout from "./components/Layout"
import Title from "./components/Title"

function App() {
	return (
		<div className="font-roboto text-white scroll-smooth h-screen bg-dark-gray ">
			<Layout className="bg-dark-gray">
				<nav className="flex justify-end ">
					<a
						href="#contact-me"
						className="text-yellow underline "
					>
						Contact me
					</a>
				</nav>
				<main>
					<div className="flex flex-col gap-10 max-w-[380px] md:max-w-[600px] mx-auto">
						<div className="flex flex-col justify-between items-center md:flex-row gap-5 md:gap-0">
							<img
								src="/avatar.svg"
								className="w-[200px]"
							/>
							<div className="flex flex-col gap-2">
								<h1 className="text-5xl text-center">
									Agustín González
								</h1>
								<p className="text-2xl text-center md:text-start text-white/80">
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
					<Card
						title={"Game Ghost"}
						subtitle={"E-commerce shop for gaming products"}
						description={
							<div>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Rem voluptatibus fugit
								cumque vel eveniet illo vero dolor aliquam
								fuga nihil.
							</div>
						}
						imageSrc={"/images/1.png"}
					/>
					<Card
						title={"Game Ghost"}
						subtitle={"E-commerce shop for gaming products"}
						description={
							<div>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Rem voluptatibus fugit
								cumque vel eveniet illo vero dolor aliquam
								fuga nihil.
							</div>
						}
						imageSrc={"/images/1.png"}
					/>
				</div>
			</Layout>
			<Layout className="bg-dark-gray">
				<Title text={"Contact me"} />

				<div
					id="contact-me"
					className="py-8  mx-auto max-w-[380px] md:max-w-[600px] flex flex-col gap-8"
				>
					<p className="text-center">
						Lorem ipsum dolor sit amet consectetur. Feugiat
						egestas donec tellus tincidunt. Nulla nec morbi
						nisl purus nunc. Commodo et adipiscing sed
						sagittis mi non quam
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
