import React from 'react';
import BannerSection from '../../network/components/About';
import Network from '../../network/components/CoverageArea'
import { aboutPageData } from './data';

export default function BannerAboutPage() {
  return (
    <div>
    <BannerSection 
      bannerData={aboutPageData.banner}
      breadcrumbData={aboutPageData.breadcrumb}
      introductionData={aboutPageData.introduction}
    />
    <Network />
    </div>
  );
}