import { FC } from "react"
import Title from "../Title"
import SectionLayout from "../SectionLayout"

interface AboutmeProps {}

const Aboutme: FC<AboutmeProps> = ({}) => {
	return (
		<SectionLayout
			animate
			className="bg-dark-gray"
			id="about-me"
		>
			<Title text={"About me"} />
			<div className="py-8 flex flex-col gap-8 md:grid md:grid-cols-3 ">
				<div className="flex flex-col gap-8 col-span-2">
					<p>
						I am a Front-end Developer specialized in React
						with Typescript and I create websites that are
						fast, easy to maintain and build with best
						practices.
					</p>
					<p>
						Since I finished school I been learning a
						plentiful kit of abilities and tools, including
						coding, debugging, and project management, in
						order to develop web applications in the most
						efficient, secure and accessible way.
					</p>
					<p>
						My strength is front-end but I also have a
						passion for design, which leads me to create
						aesthetically-pleasing interfaces. I believe
						that a good combination between the programming
						process and design results in the most optimal
						user experience.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<span className="text-yellow">Skills:</span>
					<ul className="gap-2  ">
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							HTML
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							{"CSS(Tailwind)"}
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							Javascript
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							React
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							Typecript
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							Accessibility & Best Practices
						</li>
						<li className="before:content-['\2022'] before:text-yellow before:font-bold before:mr-1">
							SEO
						</li>
					</ul>
				</div>
			</div>
		</SectionLayout>
	)
}
export default Aboutme
