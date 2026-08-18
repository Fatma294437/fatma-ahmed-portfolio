import { motion } from 'framer-motion';
import { PenTool, Wrench, Code2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';
import { designSkills, tools, development } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills & Tools"
          title={
            <>
              Tools I use to <span className="text-gradient-red">bring ideas to life.</span>
            </>
          }
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-3">
          <SkillGroup
            icon={PenTool}
            title="Design"
            items={designSkills}
            accent
          />
          <SkillGroup icon={Wrench} title="Tools" items={tools} />
          <SkillGroup icon={Code2} title="Development" items={development} />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  icon: Icon,
  title,
  items,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700">
          <Icon className="h-5 w-5 text-accent" />
        </span>
        <h3 className="font-display text-xl font-semibold text-bone-100">{title}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {items.map((label, i) => (
          <SkillCard key={label} label={label} index={i} variant={accent ? 'accent' : 'default'} />
        ))}
      </div>
    </motion.div>
  );
}
