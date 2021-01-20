import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Banner, Skills, Timeline } from '../components/index';
import {
  bannerEn, bannerFr, skillsEn, skillsFr, timelineEn, timelineFr,
} from '../utils/data';

export default function Home(props) {
  const [bannerData, setBannerData] = useState(bannerEn);
  const [skillsData, setSkillsData] = useState(skillsEn);
  const [workData, setworkData] = useState(timelineEn);

  useEffect(() => {
    if (props.lang === 'fr') {
      setBannerData(bannerFr);
      setSkillsData(skillsFr);
      setworkData(timelineFr);
    } else {
      setBannerData(bannerEn);
      setSkillsData(skillsEn);
      setworkData(timelineEn);
    }
  }, [props.lang]);

  return (
    <>
      <Head>
        <title>Zohary Andrianome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ backgroundImage: 'url(./bg.jpg)' }}>
        <div id="about" className="anchor" />
        <Banner data={bannerData} />
        <div id="skills" className="anchor" />
        <Skills data={skillsData} />
        <div id="work" className="anchor" />
        <Timeline data={workData} />
      </main>

    </>
  );
}
