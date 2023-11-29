import { FC } from "react"
import Layout from "./SectionLayout"
import SizedContainer from "./SizedContainer"
import { Github, Linkedin } from "lucide-react"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className="px-8 font-montserrat">
			<SizedContainer>
				<div className="flex items-center justify-between border-b border-white/80 py-2">
					<a className="flex items-center gap-2">
						<img
							className="w-8 h-8"
							src="/avatar.svg"
							alt="Avatar Icon"
						/>
						<p className="text-xl ">Agustín González</p>
					</a>
					<div className="flex gap-4 text-yellow">
						<a
							target="_blank"
							href="https://github.com/agusgonz"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/agustingonzend/"
						>
							<Linkedin className="w-6 h-6" />
						</a>
					</div>
				</div>
			</SizedContainer>
		</div>
	)
}
export default Navbar
