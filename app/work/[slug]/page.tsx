import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { works } from "@/lib/works";
import Reveal from "@/components/reveal";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const work = works.find((w) => w.slug === resolvedParams.slug);
  if (!work) return { title: "Not Found" };
  return {
    title: `${work.name} | Pyxarr`,
    description: work.about.headline,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="text-xs uppercase tracking-widest text-white/40">
      {children}
    </Reveal>
  );
}

function TwoColumnSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#1A213E] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-24 py-16 px-6 md:px-[6.5vw] border-t border-white/10">
      <SectionLabel>{label}</SectionLabel>
      <Reveal>{children}</Reveal>
    </section>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-white/55">
      <span className="text-[#FB532C] mt-1.5 shrink-0">•</span>
      <span>{children}</span>
    </li>
  );
}

function LoadingWorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#1A213E] text-white">
      <Navbar />
      <section className="bg-[#1A213E] px-6 md:px-[6.5vw] pt-36 pb-12 md:pb-20 flex flex-col gap-8">
        <Skeleton className="h-16 w-3/4 max-w-3xl" />
        <Skeleton className="aspect-16/6 w-full" />
      </section>
      <Footer />
    </main>
  );
}

async function WorkPageContent({ params }: PageProps) {
  const resolvedParams = await params;
  const work = works.find((w) => w.slug === resolvedParams.slug);

  if (!work) notFound();

  return (
    <main className="min-h-screen flex flex-col bg-[#1A213E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1A213E] px-6 md:px-[6.5vw] pt-28 pb-12 md:pb-20">

        {/* Back link */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200 mb-8"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Works
        </Link>

        <Reveal>
          <h1 className="text-[clamp(52px,10vw,140px)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white mb-10 md:mb-16">
            {work.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <Skeleton className="aspect-16/6 w-full" />
        </Reveal>
      </section>

      {/* Project Overview */}
      <TwoColumnSection label="Project Overview">
        <Table>
          <TableBody>
            {[
              { label: "Client", value: work.overview.client },
              { label: "Services", value: work.overview.services },
              { label: "Industry", value: work.overview.industry },
              { label: "Role", value: work.overview.role },
            ].map((row) => (
              <TableRow
                key={row.label}
                className="border-white/10 hover:bg-transparent"
              >
                <TableCell className="text-xs uppercase tracking-widest text-white/40 pl-0">
                  {row.label}
                </TableCell>
                <TableCell className="text-xs text-white text-right pr-0">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TwoColumnSection>

      {/* About the Project */}
      <TwoColumnSection label="About the Project">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-white mb-4">
            {work.about.headline}
          </h2>
          <p className="text-sm text-white/55 leading-relaxed">
            {work.about.body}
          </p>
        </div>
      </TwoColumnSection>

      {/* Full width image placeholder */}
      <div className="bg-[#1A213E] px-6 md:px-[6.5vw] py-8">
        <Reveal>
          <Skeleton className="aspect-16/7 w-full" />
        </Reveal>
      </div>

      {/* The Challenge */}
      <TwoColumnSection label="The Challenge">
        <div>
          <h2 className="font-bold text-xl text-white mb-4">
            {work.challenge.heading}
          </h2>
          <p className="text-sm text-white/55 leading-relaxed mb-6">
            {work.challenge.body}
          </p>
          <ul className="flex flex-col gap-4">
            {work.challenge.bullets.map((bullet, index) => (
              <BulletPoint key={index}>{bullet}</BulletPoint>
            ))}
          </ul>
        </div>
      </TwoColumnSection>

      {/* Our Approach */}
      <TwoColumnSection label="Our Approach">
        <div>
          <h2 className="font-bold text-xl text-white mb-4">
            {work.approach.heading}
          </h2>
          <p className="text-sm text-white/55 leading-relaxed">
            {work.approach.body}
          </p>
        </div>
      </TwoColumnSection>

      {/* 2x2 image grid */}
      <section className="bg-[#1A213E] px-6 md:px-[6.5vw] py-16 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Reveal key={i} delay={(i - 1) * 0.08}>
              <Skeleton className="aspect-square w-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final Solution */}
      <TwoColumnSection label="Final Solution">
        <div>
          <h2 className="font-bold text-xl text-white mb-4">
            {work.solution.heading}
          </h2>
          <p className="text-sm text-white/55 leading-relaxed">
            {work.solution.body}
          </p>
        </div>
      </TwoColumnSection>

      <Footer />
    </main>
  );
}

export default function WorkPage({ params }: PageProps) {
  return (
    <Suspense fallback={<LoadingWorkPage />}>
      <WorkPageContent params={params} />
    </Suspense>
  );
}