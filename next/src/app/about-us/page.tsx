// GENERATED from src/pages/about-us.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import PageHeader from '@/components/sections/PageHeader';
import AboutVision from '@/components/sections/AboutVision';
import AboutYears from '@/components/sections/AboutYears';
import AboutBeliefs from '@/components/sections/AboutBeliefs';
import Faq from '@/components/sections/Faq';
import Team from '@/components/sections/Team';
import { site } from '@/lib/site';

export default async function AboutUs() {
  const about = await site('about');

  return (
    <>
      <Base route="/about-us/"
        title="About Nanak Fabricators — Our Story & Real Estate Expertise"
        description="Meet the Nanak Team — experienced fabrication and body work experts. Learn about our values and approach."
      >
        <PageHeader label={about.header.label} title={about.header.title} />
        <AboutVision />
        <AboutYears />
        <AboutBeliefs />
        <Faq />
        <Team />
      </Base>
    </>
  );
}
