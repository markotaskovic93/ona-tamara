import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import IntroLayout from '../components/layout/IntroLayout';
import ProjectsLayout from '../components/layout/ProjectsLayout';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Tab } from '../components/Tab';
import { Email } from '../components/Email';
import { translations } from '../translations';

function Home() {
  return (
    <MainLayout>
      <IntroLayout>
        <div className='tab-section'>
          <Tab 
            onClick={() => {
            console.log('radi click na tab') }} />
        </div>
        <div className='intro-section'>
          <Logo />
          <Text 
            content={translations.en.intro} />
        </div>
        <div className='email-section'>
          <Email 
            email={'ona.tamara@gmail.com'} />
        </div>
      </IntroLayout>
      <ProjectsLayout>
        <p>Projects Layout</p>
      </ProjectsLayout>
    </MainLayout>
  );
}

export default Home;
