import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-700 transition-all duration-500 hover:border-accent/30 hover:-translate-y-1.5 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Visual mockup area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-600">
        <ProjectMockup project={project} featured={featured} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-700 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 z-10 font-display text-sm font-medium text-bone-300/70 transition-colors duration-300 group-hover:text-accent">
          {project.number}
        </span>
        <span className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-ink-900/50 px-3 py-1 text-[10px] uppercase tracking-widest text-bone-400 backdrop-blur-sm">
          {project.tags[0]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-bone-500">
          <span className="h-1 w-1 rounded-full bg-accent" />
          {project.category}
        </div>

        <h3
          className={`font-display font-semibold leading-tight tracking-tight text-bone-100 transition-colors duration-300 group-hover:text-white ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        <p className="max-w-xl text-sm leading-relaxed text-bone-400 sm:text-base">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-2 inline-flex items-center gap-2 text-sm font-medium text-bone-200 transition-colors hover:text-accent"
        >
          {project.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>

      {/* hover accent line */}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-accent-800 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

function ProjectMockup({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <div className="relative h-full w-full">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} — project preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <PlaceholderMockup project={project} featured={featured} />
      )}
    </div>
  );
}

function PlaceholderMockup({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
        <div
          className={`relative w-full overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] ${
            featured ? 'max-w-3xl' : 'max-w-xl'
          }`}
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="ml-3 truncate rounded bg-white/5 px-2 py-0.5 text-[10px] text-bone-500">
              {project.id}.preview
            </span>
          </div>
          <div className="aspect-[16/9] p-4">
            <div className="flex h-full gap-3">
              <div className="flex w-1/3 flex-col gap-2">
                <div className="h-3 w-full rounded bg-white/5" />
                <div className="h-3 w-2/3 rounded bg-accent/20" />
                <div className="mt-auto h-16 rounded-lg bg-white/[0.04]" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-4 w-1/2 rounded bg-white/[0.07]" />
                <div className="h-3 w-3/4 rounded bg-white/5" />
                <div className="h-3 w-2/3 rounded bg-white/5" />
                <div className="mt-auto grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-lg bg-white/[0.04]" />
                  <div className="h-12 rounded-lg bg-accent/10" />
                  <div className="h-12 rounded-lg bg-white/[0.04]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-bone-500/60">
        Replace with {project.title.split('—')[0].trim()} screenshot
      </span>
    </>
  );
}
