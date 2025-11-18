import { Sparkles, ArrowUpRight, Layers, Globe2, Paintbrush2 } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "ブランド体験設計",
    description:
      "顧客の記憶に残るトータルなブランドジャーニーをデザインし、価値を最大化します。"
  },
  {
    icon: Layers,
    title: "プロダクトデザイン",
    description:
      "UI/UX から実装まで、プロダクトの成長を見据えた使いやすさと美しさを追求します。"
  },
  {
    icon: Paintbrush2,
    title: "ビジュアルシステム",
    description:
      "洗練されたビジュアルコンポーネントとモーションで、ブランドの個性を際立たせます。"
  },
  {
    icon: Globe2,
    title: "デジタルマーケティング",
    description:
      "データとクリエイティビティの融合で、成果につながるオンライン体験を構築します。"
  }
];

const works = [
  {
    title: "次世代フィンテック・プラットフォーム",
    description:
      "信頼性と躍動感を両立するビジュアル設計で、リリース初月でコンバージョン 168% 増を達成。"
  },
  {
    title: "AI スタートアップのブランド刷新",
    description:
      "認知向上と採用強化を狙ったリブランディングで、月間リード獲得数が 2.3 倍に。"
  },
  {
    title: "グローバルラグジュアリー EC",
    description:
      "多言語対応と没入感あるショッピング体験を実現し、平均購入額が 35% 向上。"
  }
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-80" />
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-32 pt-24">
        <nav className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-accent" />
            MIRAI STUDIO
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-200">
            <a href="#services" className="transition hover:text-white">
              サービス
            </a>
            <a href="#works" className="transition hover:text-white">
              実績
            </a>
            <a href="#about" className="transition hover:text-white">
              私たちについて
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              プロジェクト相談
            </a>
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="space-y-10">
            <p className="inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent" />
              未来を描くクリエイティブスタジオ
            </p>
            <h1 className="text-4xl font-medium text-white sm:text-5xl md:text-6xl">
              あなたのビジョンを、<br className="hidden sm:block" />
              世界に響く体験へ。
            </h1>
            <p className="max-w-xl text-lg text-slate-200/90">
              データに裏付けされた戦略と精緻なデザインで、プロダクトとブランドのエコシステムを構築します。
              モダンで美しいユーザー体験が、ビジネスの成長を加速させます。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-dark shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
              >
                無料コンサルティングを予約
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                サービスを見る
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  直近 12 ヶ月の成果
                </p>
                <p className="text-3xl font-semibold text-white">+248% 成長</p>
              </div>
              <div className="space-y-2 text-sm text-slate-200/90">
                <p>・事業成長と市場拡大を支援したプロジェクト 26 件</p>
                <p>・顧客満足度 4.9 / 5 を継続</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex max-w-md flex-col items-center justify-center">
            <div className="absolute -inset-6 -z-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/15 via-accent/20 to-primary/30 opacity-90 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
              <div className="rounded-3xl bg-white/5 p-6">
                <div className="h-64 w-full rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 via-white/20 to-accent/40" />
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-200/90">
                <p className="flex items-center justify-between">
                  <span className="font-semibold text-white">プロジェクト成功率</span>
                  <span>97%</span>
                </p>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-full w-[97%] rounded-full bg-accent" />
                </div>
                <p>
                  ハイパフォーマンスな UI コンポーネントとデータドリブンな分析で、迅速に価値を提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 text-slate-200"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Services</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              ビジョンと成果を両立するサービス群
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            初期戦略からプロダクト改善、グロース施策まで、幅広いフェーズを支援します。柔軟なチーム編成で、スピード感ある開発と検証が可能です。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-accent/70 hover:bg-white/10 hover:shadow-glass"
            >
              <service.icon className="mb-6 h-10 w-10 text-accent transition group-hover:scale-110" />
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:translate-x-1">
                詳しく見る
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-primary/0 opacity-0 transition group-hover:opacity-20" />
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Works</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              成果にフォーカスしたクリエイティブ事例
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            プロジェクトの相談をする
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-accent/70 hover:bg-white/10 hover:shadow-glass"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-primary/30 to-accent/20" />
              <h3 className="text-xl font-semibold text-white">{work.title}</h3>
              <p className="text-sm text-slate-300">{work.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-primary/10 px-6 py-24 shadow-lg md:px-16"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">About</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              データと感性のバランスが、未来を切り開く。
            </h2>
            <p className="text-sm leading-relaxed text-slate-200/90">
              私たちは、デザイナー・エンジニア・ストラテジストで構成されるクリエイティブチームです。
              ビジネス課題の深い理解とユーザー中心の思考を融合し、ブランドの世界観を視覚的・体験的に形にします。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-semibold text-white">15+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                  専門家チーム
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-semibold text-white">120%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                  平均 ROI
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-aurora opacity-30 blur-3xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/15 via-primary/25 to-accent/20" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto my-24 max-w-4xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-primary/30 via-white/5 to-accent/20 px-6 py-16 shadow-xl backdrop-blur md:px-12"
      >
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-dark">Contact</p>
            <h2 className="text-3xl font-semibold text-dark md:text-4xl">
              次の 90 日で、どんな未来を描きますか？
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-dark/80">
              プロジェクトのアイデアや現状の課題をお聞かせください。48 時間以内に最適なチームがご連絡します。
            </p>
          </div>
          <form className="grid gap-6 md:grid-cols-2">
            <label className="col-span-1 flex flex-col gap-2 text-sm font-medium text-dark/90">
              お名前
              <input
                type="text"
                placeholder="山田 太郎"
                className="rounded-full border border-dark/10 bg-white/70 px-5 py-3 text-sm outline-none transition focus:border-dark focus:ring-2 focus:ring-dark/10"
                required
              />
            </label>
            <label className="col-span-1 flex flex-col gap-2 text-sm font-medium text-dark/90">
              メールアドレス
              <input
                type="email"
                placeholder="hello@example.com"
                className="rounded-full border border-dark/10 bg-white/70 px-5 py-3 text-sm outline-none transition focus:border-dark focus:ring-2 focus:ring-dark/10"
                required
              />
            </label>
            <label className="col-span-1 flex flex-col gap-2 text-sm font-medium text-dark/90">
              会社・組織名
              <input
                type="text"
                placeholder="Mirai Tech Inc."
                className="rounded-full border border-dark/10 bg-white/70 px-5 py-3 text-sm outline-none transition focus:border-dark focus:ring-2 focus:ring-dark/10"
              />
            </label>
            <label className="col-span-1 flex flex-col gap-2 text-sm font-medium text-dark/90">
              プロジェクト期間
              <select
                className="rounded-full border border-dark/10 bg-white/70 px-5 py-3 text-sm outline-none transition focus:border-dark focus:ring-2 focus:ring-dark/10"
              >
                <option>3 ヶ月以内</option>
                <option>6 ヶ月以内</option>
                <option>12 ヶ月以内</option>
                <option>未定・相談したい</option>
              </select>
            </label>
            <label className="md:col-span-2 flex flex-col gap-2 text-sm font-medium text-dark/90">
              ご相談内容
              <textarea
                rows={5}
                placeholder="プロジェクトのゴール・課題・希望する成果などをご記入ください。"
                className="rounded-3xl border border-dark/10 bg-white/70 px-5 py-4 text-sm outline-none transition focus:border-dark focus:ring-2 focus:ring-dark/10"
                required
              />
            </label>
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-dark/70">
                送信いただいた情報は、ご相談内容に対するご連絡にのみ使用いたします。
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-dark/90"
              >
                相談を送信する
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-16 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Mirai Studio. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="transition hover:text-white">
            プライバシーポリシー
          </a>
          <a href="#" className="transition hover:text-white">
            利用規約
          </a>
          <a href="#" className="transition hover:text-white">
            採用情報
          </a>
        </div>
      </footer>
    </main>
  );
}
