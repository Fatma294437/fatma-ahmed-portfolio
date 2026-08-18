import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              A few things <span className="text-gradient-red">I&apos;ve designed.</span>
            </>
          }
          description="A selection of projects where design, usability and technology come together."
          className="mb-16"
        />

        {/* Featured project */}
        <div className="mb-8">
          <ProjectCard project={featured} index={0} featured />
        </div>

        {/* Grid of remaining */}
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 1} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-xs uppercase tracking-widest text-bone-500"
        >
          Placeholder mockups — replace each with the matching project screenshot
        </motion.p>
      </div>
    </section>
  );
}
