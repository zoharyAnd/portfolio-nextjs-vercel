import React from 'react';

import Images from '../assets/images/index';

export default function Banner(props) {
  // const banner = Images.bannerBg.default;

  return (
    <div className="banner container">
      <div className="img-wrapper profile">
        <img src={Images.profile.default} alt="" />
      </div>
      <h1 className="my-3">{props.data.jobTitle}</h1>
      <p dangerouslySetInnerHTML={{ __html: props.data.about }} />
    </div>
  );
}
