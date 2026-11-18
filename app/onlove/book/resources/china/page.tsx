import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Love in China — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/resources/china/" },
};

const linkClass =
  "text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

const TALKS = {
  wang: { id: "Xvuo6BdUJB8", who: "Pan Wang", title: "Love in China: Politics, Economics and Social Change", where: "University of New South Wales", year: "2024" },
  xie: { id: "ERe4MhWFQsE", who: "Kailing Xie", title: "Love and Nation in China", where: "University of Birmingham", year: "2024" },
  pettier: { id: "NxX3pG8WtUk", who: "Jean-Baptiste Pettier", title: "What’s New with Love in East Asia?", where: "Friedrich-Alexander-Universität Erlangen-Nürnberg", year: "" },
  zhou: { id: "7C4qtjwQr-U", who: "Qianyu Zhou", title: "Buying Love: Why Chinese Women Embrace Male-Coded Game Characters", where: "Hiroshima University", year: "2026" },
} as const;

type Talk = keyof typeof TALKS;

/** A link into a talk at the moment being described. */
function At({ talk, t }: { talk: Talk; t: string }) {
  const [m, s] = t.split(":").map(Number);
  return (
    <a
      href={`https://www.youtube.com/watch?v=${TALKS[talk].id}&t=${m * 60 + s}s`}
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap text-sm"
    >
      watch {t}
      <span className="sr-only"> in {TALKS[talk].who}’s talk (YouTube, opens in a new tab)</span>
    </a>
  );
}

function Quote({ children, who }: { children: React.ReactNode; who: string }) {
  return (
    <blockquote>
      <span className="block font-[family-name:var(--font-source-serif)] text-lg leading-relaxed text-foreground">{children}</span>
      <span className="mt-2 block text-sm not-italic">{who}</span>
    </blockquote>
  );
}

function H2({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-source-serif)]">
      <span className="mr-3 text-base font-normal text-muted-foreground">{n}</span>
      {children}
    </h2>
  );
}

export default function LoveInChinaPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <p className="text-sm">
          <Link href="/onlove/book/resources/" className={linkClass}>
            ← Love research
          </Link>
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Love in <span className="text-gradient">China</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          What researchers at the Institute on Love Studies are saying, starting from four talks
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <article className="prose mt-10 max-w-2xl">
          <p>
            The oldest love poem in <em>Eight Billion Ways to Love</em> is Chinese. In <em>The Quiet Maiden</em>, from the
            Shijing or Book of Songs, a girl hides at the corner of the city wall while her admirer paces up and down,
            scratching his head. She gives him a red writing brush. He says the gift is lovely, but only because she
            gave it.
          </p>
          <p>
            Nearly three thousand years later, four researchers set out to explain what love means in China now.
            Their talks agree on one thing: in China, love has never been only a private matter between two people.
            The state, the market, parents and new technology all have a say in it. Each section below links to the
            moment in the talk where the point is made.
          </p>

          <H2 n={1}>A borrowed word</H2>
          <p>
            The everyday Chinese word for being in love, <span lang="zh">恋爱</span> (<em>liàn’ài</em>), is quite new.
            Jean-Baptiste Pettier, an anthropologist of East Asia, traces it to Japan in the late nineteenth century.
            Translators of the Bible struggled to find a word for the English “love” and coined <em>ren’ai</em>, which
            later passed into Chinese. <At talk="pettier" t="18:05" />
          </p>
          <p>
            Pettier is clear that love was not foreign to East Asia before this. There are classic stories of lovers,
            and our poem is one. What was new was the argument around it. In the decades after 1900, debates about
            whether people should choose their own partners swept from Japan to Korea, China and Vietnam. In China,
            after the humiliation of the 1919 Treaty of Versailles, reformers blamed arranged marriage for stifling
            young people’s initiative and keeping the nation weak. Choosing for love became a patriotic cause.{" "}
            <At talk="pettier" t="23:00" />
          </p>

          <H2 n={2}>Love by law, love for the commune</H2>
          <p>
            Pan Wang, who studies love and marriage in modern China, takes up the story in 1950. That year a new
            Marriage Law abolished arranged marriage and promised free choice, monogamy and equality between husband
            and wife. In the cities, many women used it to leave forced marriages. In the countryside, she argues,
            parents, in-laws and local officials kept their grip, and the law did not create a culture in which people
            could love, marry and divorce freely. <At talk="wang" t="2:40" />
          </p>
          <p>
            Feelings only entered the law later. From 1980, a divorce could be granted because mutual affection had
            broken down, which Wang calls an “emotional turn”. <At talk="wang" t="5:40" /> Meanwhile, politics shaped
            who could love whom. After land reform, families were labelled by class, and people with a “bad” class
            background found it hard to marry at all. <At talk="wang" t="7:40" />
          </p>
          <p>
            Even love songs worked for the revolution. Wang reads a folk song from a 1958 collection, <em>Songs of the
            Red Flag</em>. A young woman complains that her sweetheart, a singer, no longer sings about her. He
            answers:
          </p>
          <Quote who="Folk song, read in Pan Wang’s translation">
            It’s not that I no longer sing about you, or have forgotten you… it is because I could not say more about the
            happiness of our commune, and you are in the commune with me.
          </Quote>
          <p>
            During the Cultural Revolution, romance was attacked as a bourgeois habit. Dating could damage a career,
            and couples who held hands in public risked gossip. People were expected to marry someone with the right
            background, and Wang notes that love letters often began with the word “comrade”.{" "}
            <At talk="wang" t="16:50" />
          </p>

          <H2 n={3}>Love for the nation</H2>
          <p>
            Kailing Xie studies how the state still tells love stories. She read three years of headline stories sent
            by <em>People’s Daily</em>, the Communist Party’s newspaper, to readers’ phones through WeChat, from 2020 to
            2022. Around twenty were headed, simply, “Congratulations, they are married”. The couple are usually
            police officers or public servants, devoted to their work, who find love by supporting each other in it.{" "}
            <At talk="xie" t="5:00" />
          </p>
          <p>Another story was a letter said to be from a frontier soldier to his wife:</p>
          <Quote who="Letter published by People’s Daily, read in Kailing Xie’s translation">
            If I die in battle, I will leave you my pension. If I am disabled, I will leave you our divorce certificate,
            because I don’t want to become your burden. If I come back, I will give the rest of my love to you.
          </Quote>
          <p>
            Xie notes that no one knows whether the letter is real. The pattern is what matters: a waiting wife, a
            husband ready to die for the country, and marriage as the reward for a good citizen. Stories end with
            couples buried in one grave. <At talk="xie" t="10:00" /> She argues that self-sacrifice is being held up as
            the highest form of love just as divorce is rising and the birth rate is falling, at a time when the state
            is anxious about the nation’s future. <At talk="xie" t="10:50" />
          </p>
          <p>
            Love with outsiders can be a warning instead. Wang shows a cartoon poster from China’s first national
            security education day in 2016, called <em>Dangerous Love</em>. A red-haired foreign “scholar” seduces a
            young Chinese civil servant to get at government documents, and the last panel shows her in handcuffs.{" "}
            <At talk="wang" t="22:30" />
          </p>

          <H2 n={4}>Parents in the room</H2>
          <p>
            Pettier opens with a scene from a Chinese class in Beijing in 2007. The teacher explained that parents
            play a big part in choosing a partner, and that a family’s low status could rule someone out. Then she
            asked the class what they thought. The Western students said the person mattered more than their
            background. Most of the Korean and Japanese students said the opposite.{" "}
            <At talk="pettier" t="1:20" />
          </p>
          <p>
            He later studied the marriage markets that grew up in Beijing in the early 2000s, where parents
            gather to find partners for their adult children. A father told him the markets proved how responsible
            Chinese parents were, unlike Western ones, who did not seem to mind that their children were single.{" "}
            <At talk="pettier" t="31:10" /> Pettier calls the result a “new moral economy of love”: lots of talk about
            romance, with parents keeping a share of the decision as a safeguard against love’s blindness. He argues it
            also works to keep the better-off from marrying down. <At talk="pettier" t="5:40" />
          </p>
          <p>
            Wang and Pettier both describe pressure on people who do not marry. Wang describes a “double marriage
            squeeze”: in the countryside, many men cannot find a wife, while in the cities many educated women cannot
            find a partner they see as an equal. China calls them “leftover men” and “leftover women” (
            <span lang="zh">剩女</span>, <em>shèngnǚ</em>). Pettier finds similar insults elsewhere in East Asia,
            including “loser dogs” in Japan and “old maidens” in Vietnam. <At talk="pettier" t="35:00" />
          </p>

          <H2 n={5}>New ways to love</H2>
          <p>
            The newest research shows people inventing their own arrangements. Same-sex marriage is not legal in
            China, but since the late 2010s a guardianship agreement first designed for older people has let same-sex
            couples give each other legal powers, such as consenting to surgery. Wang shows couples posing for wedding
            photographs in central Beijing on Valentine’s Day. <At talk="wang" t="24:40" /> Some young women now
            photograph their divorces, holding up banners that say divorce is something to celebrate.{" "}
            <At talk="wang" t="33:00" /> And during the Covid lockdowns, Wang says, some lonely people formed real
            attachments to companion dolls and robots. <At talk="wang" t="35:00" />
          </p>
          <p>
            Qianyu Zhou’s talk opens in Shanghai in 2025. A woman she calls Na spends the day with her boyfriend. He
            carries her bag, kneels to help with her shoes and surprises her with roses at dinner. He is a female
            cosplayer Na has hired to play her favourite character from an otome game, a romance game made for women.{" "}
            <At talk="zhou" t="0:30" /> Zhou’s participants say these games give them respect, control and a meeting
            of minds, while real relationships give touch and stability. Many grew up watching their mothers give up
            work and friends for absent fathers, and several described being shamed or harassed by men. <At talk="zhou" t="11:00" /> The
            strongest bonds, Zhou found, were between the women who play the games together. She also notes that even
            this utopia repeats old scripts: the hired “boyfriend” still pays the bill.{" "}
            <At talk="zhou" t="13:20" />
          </p>
          <p>
            Two shorter studies in the catalogue add more. One follows Chinese migrants in Kingston and describes love
            felt in everyday atmosphere, gestures and silences more than in declarations. Another is studying the
            relationship advice given by influencers on BiliBili, a Chinese video platform; its findings are not yet
            published.
          </p>

          <H2 n={6}>What it adds up to</H2>
          <p>
            Asked what the future holds, Wang says love in China is now a personal decision, more diverse than ever,
            and that the line between “real” and “fake” love is blurring. She believes China is entering a fourth
            sexual revolution, driven by AI and robots. <At talk="wang" t="40:30" />
          </p>
          <p>Pettier ends with a paradox:</p>
          <Quote who="Jean-Baptiste Pettier">
            What is preventing many people from falling in love… is love itself.
          </Quote>
          <p>
            He means the ideal of romantic love, shaped by melodrama and by the comfortable lives of the better-off,
            until many young people feel they lack the means to let themselves love and marry at all. <At talk="pettier" t="43:00" />
          </p>
          <p>
            Which takes us back to the city wall, three thousand years ago: a girl hiding, a young man pacing, a small
            red gift. Nobody in that poem is asking anybody’s parents, the state or an app. Perhaps the question this
            research leaves for readers anywhere is this: whose voices are in the room when I decide whom to love?
          </p>
        </article>
      </FadeIn>

      <section className="mt-16 max-w-2xl" aria-labelledby="talks">
        <h2 id="talks" className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">
          The talks
        </h2>
        <ul className="mt-5 space-y-4">
          {(Object.keys(TALKS) as Talk[]).map((k) => {
            const t = TALKS[k];
            return (
              <li key={k}>
                <a href={`https://www.youtube.com/watch?v=${t.id}`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t.title}
                  <span className="sr-only"> (YouTube, opens in a new tab)</span>
                </a>
                <p className="text-sm text-muted-foreground">
                  {t.who}, {t.where}
                  {t.year && `. Institute on Love Studies conference, ${t.year}`}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Quotations come from the talks’ captions and have been lightly tidied. The song and the letter are quoted
          in the speakers’ own English translations. More talks and studies are in the{" "}
          <Link href="/onlove/book/resources/" className={linkClass}>
            love research library
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
