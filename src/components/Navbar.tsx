import { FC } from "react"
import SizedContainer from "./SizedContainer"
import { Github, Linkedin } from "lucide-react"
import LinkOutsidePage from "./LinkOutsidePage"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => (
	<nav className="px-8 font-montserrat">
		<SizedContainer>
			<div className="flex items-center justify-between border-b border-white/80 py-2 flex-wrap gap-2">
				<a className="flex items-center gap-2">
					<img
						className="w-8 h-8"
						src="/avatar.svg"
						alt="Avatar Icon"
					/>
					<p className="text-xl ">Agustín González</p>
				</a>
				<div className="flex gap-4 text-yellow">
					<LinkOutsidePage
						href="https://github.com/agusgonz"
						className="flex items-center  hover:text-yellow/90 transition"
						ariaLabel="Go to Agustín Gonzalez account on github"
					>
						<Github className="w-6 h-6" />
					</LinkOutsidePage>
					<LinkOutsidePage
						href="https://www.linkedin.com/in/agustingonzend/"
						className="flex items-center  hover:text-yellow/90 transition"
						ariaLabel="Go to Agustín Gonzalez account on linked in"
					>
						<Linkedin className="w-6 h-6" />
					</LinkOutsidePage>
				</div>
			</div>
			<div className="py-2 flex flex-wrap gap-x-4 text-yellow ">
				<a
					href="#projects"
					className="hover:text-yellow/90 transition "
				>
					Projects
				</a>
				<a
					href="#about-me"
					className="hover:text-yellow/90 transition"
				>
					About me
				</a>
				<a
					href="#contact-me"
					className="hover:text-yellow/90 transition"
				>
					Contact me
				</a>
			</div>
		</SizedContainer>
	</nav>
)
export default Navbar
