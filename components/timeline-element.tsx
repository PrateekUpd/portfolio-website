import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type TimelineElementProps = (typeof experiencesData)[number];

export default function TimelineElement({
  title,
  location,
  description,
  icon,
  date,
}: TimelineElementProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <div 
    ref={ref} 
    className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === 'light' ? "#f4f4f6" : "rgba(255, 255,255, 0.05",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : 
          "0.4rem solid rgba(255, 255, 255, 0.05)",
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: theme === 'light' ? "white" : 
          "rgba(255, 255, 255, 0.05)",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize">{title}</h3>
        <p className="font-normal !mt-0">{location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">{description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
