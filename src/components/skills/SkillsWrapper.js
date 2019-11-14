import React from "react";
import SkillsItem from "./SkillsItem";

const SkillsWrapper = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillsItem title={skill.title} rating={skill.rating} key={index} />
      ))}
    </div>
  );
};

export default SkillsWrapper;
