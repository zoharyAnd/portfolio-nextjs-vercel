import React from 'react';

export default function Timeline(props) {
  const timelineJsx = (props.data.jobs).map((item, index) => {
    const align = index % 2 === 0 ? '' : 'reverse';

    return (
      <div className={`timeline-item ${align}`} key={index}>
        <div className="timeline-content">
          <h2>{item.job}</h2>
          <p>{item.date}</p>
          <p>{item.place}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="work-section container">
      <h1>{props.data.title}</h1>
      {timelineJsx}
    </div>
  );
}
