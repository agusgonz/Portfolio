import { FC } from "react"
import Title from "../Title"
import { PROJECTS_DATA } from "../../utils/const"
import Card from "../Card"
import SectionLayout from "../SectionLayout"

interface ProjectsSectionProps {}

const ProjectsSection: FC<ProjectsSectionProps> = ({}) => {
	return (
		<SectionLayout
			animate
			delay={0.5}
			className="bg-gray"
		>
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
		</SectionLayout>
	)
}
export default ProjectsSection
