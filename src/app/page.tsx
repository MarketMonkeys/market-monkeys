import AdvatagesSection from "@/pages/Home/AdvantagesSection/AdvantagesSection";
import DigitalMarketingSection from "@/pages/Home/DigitalMarketingSection/DigitalMarketingSection";
import ProjectPortfolioSection from "@/pages/Home/ProjectPortfolioSection/ProjectPortfolioSection";
import ServiceSpectrumSection from "@/pages/Home/ServiceSpectrumSection/ServiceSpectrumSection";

export default function Home() {
  return (
    <main>
      <DigitalMarketingSection />
      <div
        style={{
          background: "var(--blue)",
          borderRadius: "50px",
          padding: "120px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ServiceSpectrumSection />
          <AdvatagesSection />
        </div>
      </div>
      <ProjectPortfolioSection />
    </main>
  );
}
