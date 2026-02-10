import { getEssays, getFeaturedProjects } from "@/lib/content";
import Hero from "@/components/Hero";
import ApproachStrip from "@/components/ApproachStrip";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestEssayFeature from "@/components/LatestEssayFeature";
import EssayGrid from "@/components/EssayGrid";
import CollaborateCTA from "@/components/CollaborateCTA";
import AboutSnippet from "@/components/AboutSnippet";

export default function Home() {
  const essays = getEssays();
  const latestEssay = essays[0];
  const selectedEssays = essays.slice(1, 4);
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <Hero latestEssaySlug={latestEssay?.slug} />

      <ApproachStrip />

      {featuredProjects.length > 0 && (
        <FeaturedProjects projects={featuredProjects} />
      )}

      {latestEssay && <LatestEssayFeature essay={latestEssay} />}

      {selectedEssays.length > 0 && <EssayGrid essays={selectedEssays} />}

      <AboutSnippet />

      <CollaborateCTA />
    </div>
  );
}
