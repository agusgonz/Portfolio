import { FC } from "react"
import SectionLayout from "../SectionLayout"
import LinkOutsidePage from "../LinkOutsidePage"

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
					<LinkOutsidePage
						className="italic underline text-white/90 hover:text-white/80"
						href={"https://react.dev/"}
					>
						React.js
					</LinkOutsidePage>{" "}
					and{" "}
					<LinkOutsidePage
						className="italic underline text-white/90 hover:text-white/80"
						href={"https://www.typescriptlang.org/"}
					>
						Typescript
					</LinkOutsidePage>
					. I bring a deep understanding of modern web
					technologies to create high-performing,
					user-friendly websites and applications.
				</p>
			</div>
		</SectionLayout>
	)
}
export default HeroSection
