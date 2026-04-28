import caseStudiesData from "@/public/data/case-studies.json";

export const CASE_STUDIES_REVALIDATE = 60;

export type CaseStudyItem = {
  id: string;
  slug: string;
  title: string;
  teaser: string;
  url?: string;
  preview?: string;
  cardTags?: string[];
  cardIcon?: string | null;
  cardIconText?: string | null;
  cardLogo?: string | null;
  cardLogoText?: string | null;
  highlights?: string[];
  HeroSummary?: string;
  Problem?: string;
  Process?: string;
  Outcome?: string;
  TechStack?: string[];
  Metrics?: Record<string, string | number>;
};

type CaseStudyJson = {
  items: CaseStudyItem[];
};

const parsedCaseStudies = (caseStudiesData as CaseStudyJson).items ?? [];

export async function fetchCaseStudies(): Promise<CaseStudyItem[]> {
  return parsedCaseStudies;
}

export async function getCaseStudyBySlug(slug: string) {
  return parsedCaseStudies.find((study) => study.slug === slug);
}
