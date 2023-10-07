import React from 'react'
import { Progress } from "@/components/ui/progress";

const SkillProgressItem = ({title, value} : {
  title: string;
  value: number;
}) => {
  return (
    <li>
      {title} <span>{value}</span>%
      <Progress value={value} className="mt-1"/>
    </li>
  );
}

export default SkillProgressItem