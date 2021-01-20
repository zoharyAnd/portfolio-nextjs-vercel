import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { topSkills, skillsList } from '../utils/data';

export default function Skills(props) {
  const topSkillsJsx = topSkills.map((item, index) => (
    <div className="skills-item-circular" key={index}>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percent = isVisible ? item.percentage : 0;
          return (
            <>
              <CircularProgressbarWithChildren
                value={percent}
                circleRatio={0.75}
                styles={{
                  trail: {
                    strokeLinecap: 'round',
                    transform: 'rotate(-135deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    strokeLinecap: 'round',
                    transform: 'rotate(-135deg)',
                    transformOrigin: 'center center',
                  },
                }}
              >
                <div className="progress-children">
                  <p>{`${percent}%`}</p>
                </div>
              </CircularProgressbarWithChildren>
              <p className="skill-name">{item.name}</p>
            </>
          );
        }}
      </VisibilitySensor>
    </div>
  ));

  const skillsJsx = skillsList.map((skillItem, idx) => (
    <div className="skills-item-rectangular" key={idx}>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percent = isVisible ? skillItem.percentage : 0;
          return (
            <>
              <p className="skill-name">{skillItem.name}</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: `${percent}%` }} />
              </div>
            </>
          );
        }}
      </VisibilitySensor>
    </div>
  ));

  return (
    <div className="skills-section">
      <h1>{props.data.topSkills}</h1>
      <div className="skills-wrapper container mb-4">
        {topSkillsJsx}
      </div>
      <h1 className="mt-5">{props.data.otherSkills}</h1>
      <div className="skills-wrapper container">
        {skillsJsx}
      </div>
    </div>
  );
}
