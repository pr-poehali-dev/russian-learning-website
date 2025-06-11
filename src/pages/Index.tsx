import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ProgressSection from "@/components/ProgressSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureCards />
      <ProgressSection />
    </Layout>
  );
};

export default Index;
