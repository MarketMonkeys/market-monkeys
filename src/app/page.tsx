import ParallaxWrapper from '@/components/ParallaxWrapper/ParallaxWrapper';
import AdvatagesSection from '@/pages/Home/AdvantagesSection/AdvantagesSection';
import DigitalMarketingSection from '@/pages/Home/DigitalMarketingSection/DigitalMarketingSection';
import ProjectPortfolioSection from '@/pages/Home/ProjectPortfolioSection/ProjectPortfolioSection';
import ServiceSpectrumSection from '@/pages/Home/ServiceSpectrumSection/ServiceSpectrumSection';
import TeamSection from '@/pages/Home/TeamSection/TeamSection';

export default function Home() {
  return (
    <main>
      <DigitalMarketingSection />
      {/* <BlueSectionWrapper> */}
      <ParallaxWrapper counter={1}>
        <div
          style={{
            position: 'relative',
            background: 'var(--blue)',
            borderRadius: '50px',
            padding: '150px 120px 120px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ServiceSpectrumSection />
            <AdvatagesSection />
          </div>
        </div>
      </ParallaxWrapper>
      {/* </BlueSectionWrapper> */}
      <ProjectPortfolioSection />
      <TeamSection />
    </main>
  );
}
