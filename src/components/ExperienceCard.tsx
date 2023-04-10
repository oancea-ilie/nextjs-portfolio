import Image from "next/image"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
Image
interface Props {
  experience: {
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: string[]
  }
}
const ExperienceCard = ({
  experience: { title, company_name, icon, iconBg, date, points },
}: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={icon}
            width={24}
            height={24}
            alt="icon"
            className="object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-[0px!important]">
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={point}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
