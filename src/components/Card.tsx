import { FC } from "react"
import Button from "./Button"

interface CardProps {
	title: string
	description: string
	imageSrc: string
	tags: string[]
	pageLink: string
	githubLink: string
}

const Card: FC<CardProps> = ({
	title,
	description,
	imageSrc,
	tags,
	pageLink,
	githubLink,
}) => {
	return (
		<div className=" flex flex-col gap-4 ">
			<div className="flex flex-col gap-4 md:grid md:grid-cols-2 ">
				<a
					className=" h-[190px] md:h-full md:order-1 overflow-hidden relative group"
					href={pageLink}
					target="_blank"
				>
					<img
						src={imageSrc}
						className="w-full h-full object-cover snap-center group-hover:scale-105 group-hover:brightness-50 transition-all"
						alt={"see more about " + title}
					/>
					<div className="text-transparent group-hover:text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
						See more
					</div>
				</a>
				<div className="flex flex-col gap-2">
					<h3 className="text-3xl">{title}</h3>
					<p className=" text-sm text-white/80">
						{description}
					</p>
					<ul className="flex flex-wrap gap-x-2 text-sm text-yellow flex-grow items-end">
						{tags.map(tag => {
							return <li key={tag}>{tag}</li>
						})}
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-1 md:flex-row md:gap-0">
				<Button href={pageLink}>See more</Button>
				<Button
					href={githubLink}
					isSecondary
					isOutsidePage
				>
					Go to GitHub
				</Button>
			</div>
		</div>
	)
}
export default Card
