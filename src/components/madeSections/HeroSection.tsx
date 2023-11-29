import { FC } from "react"
import SectionLayout from "../SectionLayout"
import AdaptativeContainer from "../SizedContainer"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<SectionLayout
			animate
			className="bg-dark-gray"
		>
			<div className="flex flex-col gap-10 ">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-2 overflow-hidden">
						<h1 className="text-5xl  ">
							Full Stack Developer
						</h1>
						<p className="text-2xl md:text-start text-white/90  ">
							React.js, Typescript
						</p>
					</div>
				</div>
				<div className=" mx-auto text-white/70">
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Nostrum quae distinctio enim rem
					molestiae, tempore pariatur ullam suscipit quos
					explicabo dolore quibusdam assumenda natus dolor
					omnis, tempora dignissimos odit accusantium!
				</div>
			</div>
		</SectionLayout>
	)
}
export default HeroSection
