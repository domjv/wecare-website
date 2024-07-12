import AboutSection from '@/components/AboutSection';
// import CountSection from '@/components/CountSection';
import HeroPanel from '@/components/HeroPanel';

export default function Home() {
  return (
    <>
      <HeroPanel />
      <AboutSection
        title="Who We Are"
        description1="At We Care Support, we offer high-quality care through a diverse, multilingual team, ensuring all participants feel supported regardless of background. Our services include In-Home, Community, and Domestic Assistance, complemented by group activities and day programs that boost well-being, skills development, and confidence for our participants."
        description2="Our Services list is not limited to following ask us if you have any question regards to our services."
        image="/img/about.jpg"
        features={[
          'Support with Community Participation',
          'Support with Development-Life Skills',
          'Assistance With Personal Care Tasks',
        ]}
        readMoreText="Read More"
        readMoreLink="/services"
      />
      {/* <CountSection /> */}
    </>
  );
}
