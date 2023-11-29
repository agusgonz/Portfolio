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
			<div className="py-8  flex flex-col gap-8">
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Iure fuga aliquid, debitis
					impedit similique facere. Optio ex, nostrum,
					aperiam nulla sequi quia alias dolore aut cumque
					exercitationem, numquam odit praesentium?
				</p>
			</div>
		</SectionLayout>
	)
}
export default Aboutme
