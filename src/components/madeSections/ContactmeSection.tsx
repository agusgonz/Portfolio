import { FC } from "react"
import Title from "../Title"
import { Github, Linkedin } from "lucide-react"
import SectionLayout from "../SectionLayout"
import AdaptativeContainer from "../SizedContainer"

interface ContactmeSectionProps {}

const ContactmeSection: FC<
	ContactmeSectionProps
> = ({}) => {
	return (
		<SectionLayout
			animate
			className="bg-gray"
			id="contact-me"
		>
			<Title text={"Contact me"} />
			<div className="py-8  flex flex-col gap-8">
				<p className="">
					If you wanna get in touch, talk to me about a
					project collaboration or just say hi, don't
					hesitate to reach me on my social accounts.
				</p>
				<div className="flex gap-8 ">
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
						href="https://www.linkedin.com/in/agustingonzend/"
						className="text-yellow underline  flex justify-center gap-2"
					>
						<Linkedin className="w-6" />
						Linkedin
					</a>
				</div>
			</div>
		</SectionLayout>
	)
}
export default ContactmeSection
