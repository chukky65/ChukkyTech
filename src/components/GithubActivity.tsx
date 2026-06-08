import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GitBranch, GitCommit, Github, Activity, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const generateContributionData = () => {
  const weeks = 40;
  const daysPerWeek = 7;
  const data = [];

  for (let i = 0; i < weeks; i++) {
    const week = [];
    for (let j = 0; j < daysPerWeek; j++) {
      const rand = Math.random();
      let count = 0;
      if (rand > 0.8) count = 3;
      else if (rand > 0.6) count = 2;
      else if (rand > 0.4) count = 1;

      week.push({ count });
    }
    data.push(week);
  }
  return data;
};

const contributionData = generateContributionData();

export function GithubActivity() {
  const { isArabic } = useLanguage();
  const locale = isArabic ? 'ar-OM' : 'en-US';

  const copy = isArabic
    ? {
        loading: 'جارٍ تحميل النشاط الأخير...',
        updateRepo: 'تحديث المستودع',
        noCommits: 'لا توجد عمليات دفع عامة حديثة',
        failed: 'تعذر تحميل النشاط',
        recent: 'مؤخراً',
        eyebrow: 'لقطة هندسية',
        title: 'نشاط GitHub',
        panelTitle: 'موجز النشاط',
        panelBody: 'آخر عمليات الدفع العامة يتم تحديثها تلقائياً من GitHub.',
        activityMap: 'خريطة نشاط مرئية',
        viewGithub: 'عرض GitHub',
        less: 'أقل',
        more: 'أكثر',
        commits: 'أحدث العمليات',
      }
    : {
        loading: 'Loading recent activity...',
        updateRepo: 'Update repository',
        noCommits: 'No recent public commits',
        failed: 'Failed to load activity',
        recent: 'recently',
        eyebrow: 'Engineering Snapshot',
        title: 'GitHub Activity',
        panelTitle: 'Public activity feed',
        panelBody: 'Recent public push events update automatically from GitHub.',
        activityMap: 'Visual activity map',
        viewGithub: 'View GitHub',
        less: 'Less',
        more: 'More',
        commits: 'Latest Commits',
      };

  const [recentCommits, setRecentCommits] = useState<{ message: string; repo: string; time: string }[]>([
    { message: copy.loading, repo: '...', time: '...' },
  ]);

  useEffect(() => {
    setRecentCommits([{ message: copy.loading, repo: '...', time: '...' }]);

    fetch('https://api.github.com/users/chukky65/events/public')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const pushes = data.filter((e: any) => e.type === 'PushEvent').slice(0, 4);
          const mapped = pushes.map((p: any) => ({
            message: p.payload?.commits?.[0]?.message || copy.updateRepo,
            repo: p.repo.name.replace('chukky65/', ''),
            time: new Date(p.created_at).toLocaleDateString(locale),
          }));
          if (mapped.length > 0) {
            setRecentCommits(mapped);
          } else {
            setRecentCommits([{ message: copy.noCommits, repo: 'github', time: copy.recent }]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setRecentCommits([{ message: copy.failed, repo: 'github', time: '' }]);
      });
  }, [copy.failed, copy.loading, copy.noCommits, copy.recent, copy.updateRepo, locale]);

  const getColor = (count: number) => {
    switch (count) {
      case 0:
        return 'bg-neutral-800/40';
      case 1:
        return 'bg-blue-900/40';
      case 2:
        return 'bg-blue-600/60';
      case 3:
        return 'bg-blue-400';
      default:
        return 'bg-neutral-800/40';
    }
  };

  return (
    <section className="py-24 relative bg-neutral-950 text-white border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-sm font-mono text-blue-400 mb-2 uppercase tracking-wider flex items-center gap-2">
              <Activity size={16} />
              {copy.eyebrow}
            </h2>
            <h3 className="text-3xl font-display font-medium tracking-tight text-white flex items-center gap-3">
              <Github size={28} />
              {copy.title}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xs bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
          >
            <span className="block text-sm font-medium text-white mb-1">{copy.panelTitle}</span>
            <span className="block text-sm text-neutral-400">{copy.panelBody}</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6 gap-4">
              <span className="text-sm font-medium text-neutral-300">{copy.activityMap}</span>
              <a href="https://github.com/chukky65" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group">
                {copy.viewGithub} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide opacity-80 hover:opacity-100 transition-opacity">
              {contributionData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1 shrink-0">
                  {week.map((day, dIdx) => (
                    <div key={`${wIdx}-${dIdx}`} className={`w-3 h-3 rounded-sm ${getColor(day.count)} transition-colors hover:ring-1 hover:ring-white`} title={`${day.count} contributions`} />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs font-mono text-neutral-500 justify-end">
              <span>{copy.less}</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-neutral-800/40"></div>
                <div className="w-3 h-3 rounded-sm bg-blue-900/40"></div>
                <div className="w-3 h-3 rounded-sm bg-blue-600/60"></div>
                <div className="w-3 h-3 rounded-sm bg-blue-400"></div>
              </div>
              <span>{copy.more}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h4 className="text-sm font-medium text-neutral-300 mb-6 flex items-center gap-2">
              <GitCommit size={16} className="text-neutral-500" />
              {copy.commits}
            </h4>

            <div className="space-y-6">
              {recentCommits.map((commit, idx) => (
                <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-[3px] before:top-2 before:bottom-[-24px] last:before:hidden before:w-px before:bg-white/10">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-neutral-950" />
                  <p className="text-sm text-neutral-200 font-medium mb-1 line-clamp-2 leading-snug">{commit.message}</p>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                    <span className="flex items-center gap-1"><GitBranch size={12} /> {commit.repo}</span>
                    <span>{commit.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
