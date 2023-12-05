import { FC } from "react"
import SectionLayout from "../SectionLayout"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<SectionLayout
			animate
			className="bg-dark-gray"
		>
			<div className="flex flex-col gap-12 ">
				<h1 className="text-5xl">Front-end Developer</h1>
				<p className="text-white/70">
					Passionate web developer with a specialization in
					front-end using{" "}
					<span className="italic text-white/90">
						React.js
					</span>{" "}
					and{" "}
					<span className="italic text-white/90">
						Typescript
					</span>
					. I bring a deep understanding of modern web
					technologies to create high-performing,
					user-friendly websites and applications.
				</p>
			</div>
		</SectionLayout>
	)
}
export default HeroSection
