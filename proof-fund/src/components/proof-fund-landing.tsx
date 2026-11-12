import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  HeartHandshake,
  Menu,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const campaigns = [
  {
    category: "Clean water",
    title: "Clean water for every home in Kijana",
    description: "Building a solar-powered well to bring safe, reliable water to 420 families.",
    raised: 18450,
    goal: 25000,
    backers: 218,
    image: "/campaign-water.png",
    imageAlt: "Local volunteers building a community water pump",
    initials: "KW",
    accent: "sage",
  },
  {
    category: "Community health",
    title: "A brighter future for the Moyo clinic",
    description: "Equipping a neighborhood clinic with the supplies families need most.",
    raised: 12780,
    goal: 18000,
    backers: 146,
    image: "/campaign-clinic.png",
    imageAlt: "Healthcare worker caring for a child at a community clinic",
    initials: "MC",
    accent: "peach",
  },
  {
    category: "Education",
    title: "Give 300 students a place to learn",
    description: "Creating a safe, well-equipped classroom for the next generation.",
    raised: 9600,
    goal: 15000,
    backers: 103,
    image: "/campaign-school.png",
    imageAlt: "Children learning together outside their classroom",
    initials: "EL",
    accent: "blue",
  },
];

function Brand() {
  return (
    <Link href="#home" className="brand" aria-label="ProofFund home">
      <span className="brand-mark"><Check size={18} strokeWidth={3} /></span>
      <span>proof<span className="brand-light">fund</span></span>
    </Link>
  );
}

function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <Link href="#campaigns">Explore campaigns</Link>
          <Link href="#how-it-works">How it works</Link>
        </div>
        <div className="nav-actions">
          <Link href="#signin" className="signin-link">Sign in</Link>
          <Link href="#start" className="button button-dark nav-cta">Get started <ArrowRight size={16} /></Link>
        </div>
        <button className="mobile-menu" aria-label="Open navigation menu"><Menu size={22} /></button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> FUNDING WITH NOTHING TO HIDE</div>
          <h1>Fund what matters.<br /><span>Track every</span> contribution.</h1>
          <p className="hero-description">A better way to bring good ideas to life. Back the people building a brighter future, and see exactly how your support makes a difference.</p>
          <div className="hero-actions">
            <Link href="#campaigns" className="button button-primary">Explore campaigns <ArrowRight size={17} /></Link>
            <Link href="#start" className="button button-outline">Start a campaign <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>Good things happen together.</strong><br />Join a community that shows up.</p></div>
        </div>
        <div className="hero-visual" aria-label="Featured community campaign">
          <div className="hero-image-wrap"><Image src="/campaign-water.png" alt="Volunteers working together on a community water project" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="hero-image" /></div>
          <div className="hero-image-overlay" />
          <div className="hero-location"><span className="location-pin" /> KIJANA, EAST AFRICA</div>
          <div className="hero-card">
            <div className="hero-card-top"><span className="live-label"><span /> FEATURED CAMPAIGN</span><span className="hero-card-icon"><HeartHandshake size={17} /></span></div>
            <h3>Clean water, closer to home.</h3>
            <p>Safe water changes everything. Help build a solar-powered well for 420 families.</p>
            <div className="hero-progress-meta"><strong>$18,450</strong><span>of $25,000</span></div>
            <div className="progress-track"><span style={{ width: "74%" }} /></div>
            <div className="hero-card-bottom"><span><strong>218</strong> people showed up</span><Link href="#campaigns" aria-label="View clean water campaign"><ArrowRight size={18} /></Link></div>
          </div>
          <div className="verified-float"><span><Check size={13} /></span> Milestone tracking</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>BUILT ON STELLAR</span><i /><span>POWERED BY TRUST</span><i /><span>MADE FOR PEOPLE</span><ArrowDownRight size={15} /></div>
    </section>
  );
}

function ImpactStats() {
  return (
    <section className="stats-band" aria-label="Platform impact">
      <div className="container stats-grid">
        <div className="stats-intro"><span className="section-kicker">SMALL ACTS. REAL IMPACT.</span><p>When people come together,<br />good things get done.</p></div>
        <div className="stat"><strong>$2.4<span>m</span></strong><span>community funded</span></div>
        <div className="stat"><strong>8,600<span>+</span></strong><span>people who showed up</span></div>
        <div className="stat"><strong>94<span>%</span></strong><span>campaigns hit their goal</span></div>
        <p className="stats-note">Illustrative preview figures</p>
      </div>
    </section>
  );
}

function CampaignCard({ campaign, index }: { campaign: (typeof campaigns)[number]; index: number }) {
  const percent = Math.round((campaign.raised / campaign.goal) * 100);
  return (
    <article className="campaign-card">
      <div className="campaign-image-wrap"><Image src={campaign.image} alt={campaign.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="campaign-image" /><span className={`campaign-category ${campaign.accent}`}>{campaign.category}</span><button className="save-button" aria-label={`Save ${campaign.title}`}><HeartHandshake size={17} /></button></div>
      <div className="campaign-content"><div className="campaign-org"><span className={`org-avatar org-${index}`}>{campaign.initials}</span><span>Community-led project</span><span className="verified-check"><Check size={11} /></span></div>
        <h3>{campaign.title}</h3><p>{campaign.description}</p>
        <div className="campaign-progress-label"><strong>${campaign.raised.toLocaleString()}</strong><span>of ${campaign.goal.toLocaleString()}</span><b>{percent}%</b></div>
        <div className="progress-track campaign-track"><span style={{ width: `${percent}%` }} /></div>
        <div className="campaign-footer"><span>{campaign.backers} contributors</span><Link href="#start" aria-label={`Support ${campaign.title}`}><ArrowRight size={18} /></Link></div>
      </div>
    </article>
  );
}

function FeaturedCampaigns() {
  return (
    <section className="section campaigns-section" id="campaigns">
      <div className="container">
        <div className="section-heading"><div><span className="section-kicker">GOOD THINGS ARE HAPPENING</span><h2>Meet the campaigns<br />moving us forward.</h2></div><Link className="text-link" href="#campaigns">Explore all campaigns <ArrowRight size={16} /></Link></div>
        <div className="campaign-grid">{campaigns.map((campaign, index) => <CampaignCard key={campaign.title} campaign={campaign} index={index} />)}</div>
        <p className="sample-note"><span>i</span> Sample campaigns for preview purposes. No real fundraising is taking place.</p>
      </div>
    </section>
  );
}

const steps = [
  { number: "01", icon: Sparkles, title: "A good idea gets a plan", text: "Campaign creators set a clear goal, share their story, and break the work into milestones." },
  { number: "02", icon: WalletCards, title: "People pitch in", text: "Contributors support causes they believe in. Contributions are recorded transparently on Stellar." },
  { number: "03", icon: ShieldCheck, title: "Progress earns trust", text: "Funds are released through milestone-based escrow as real-world progress is verified." },
];

function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works"><div className="container how-layout"><div className="how-intro"><span className="section-kicker">SIMPLE BY DESIGN</span><h2>Good intentions,<br /><span>meet real</span> accountability.</h2><p>From the first dollar to the final milestone, everyone can follow the journey.</p><Link href="#start" className="text-link">See how it works <ArrowRight size={16} /></Link></div>
      <div className="steps-list">{steps.map(({ number, icon: Icon, title, text }) => <article className="step" key={number}><div className="step-icon"><Icon size={19} /></div><div className="step-copy"><span className="step-number">STEP {number}</span><h3>{title}</h3><p>{text}</p></div><ChevronRight className="step-arrow" size={18} /></article>)}</div>
    </div></section>
  );
}

function Transparency() {
  return (
    <section className="transparency-section"><div className="container transparency-card"><div className="transparency-orbit orbit-one"/><div className="transparency-orbit orbit-two"/><div className="transparency-copy"><span className="section-kicker">OPEN BY DEFAULT</span><h2>Trust isn&apos;t a promise.<br />It&apos;s something you can see.</h2><p>Built on the Stellar network with escrow infrastructure from Trustless Work. Every contribution is traceable, and every release is tied to progress.</p><div className="transparency-points"><span><Check size={14} /> Verifiable Stellar transactions</span><span><Check size={14} /> Milestone-based escrow</span></div><Link href="#how-it-works" className="button button-light">A little more about trust <ArrowRight size={16} /></Link></div><div className="transparency-art" aria-hidden="true"><div className="trust-mark"><ShieldCheck size={46} strokeWidth={1.4} /></div><div className="orbit-node node-a"><Check size={14} /></div><div className="orbit-node node-b"><CircleDollarSign size={16} /></div><div className="orbit-node node-c"><HeartHandshake size={16} /></div><div className="stellar-tag">STELLAR <span>·</span> TRUSTLESS WORK</div></div></div></section>
  );
}

function FinalCta() {
  return <section className="final-cta" id="start"><div className="container cta-inner"><div><span className="section-kicker">YOUR NEXT GOOD THING STARTS HERE</span><h2>Big change starts<br />with showing up.</h2></div><div className="cta-actions"><p>Find a cause close to your heart, or bring your own idea to life.</p><div><Link href="#campaigns" className="button button-primary">Find your cause <ArrowRight size={16} /></Link><Link href="#start-campaign" className="button button-outline">Start a campaign <ArrowUpRight size={16} /></Link></div></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Brand /><p>Good people. Good ideas.<br />A more transparent way to fund them.</p></div><div className="footer-links"><div><span>EXPLORE</span><Link href="#campaigns">Campaigns</Link><Link href="#how-it-works">How it works</Link><Link href="#start">Start a campaign</Link></div><div><span>PROOFFUND</span><Link href="#about">About us</Link><Link href="#transparency">Transparency</Link><Link href="#faq">FAQs</Link></div><div><span>THE FINE PRINT</span><Link href="#terms">Terms of use</Link><Link href="#privacy">Privacy policy</Link></div></div></div><div className="footer-bottom"><span>© 2026 ProofFund. Built for people who care.</span><span><ShieldCheck size={14} /> Secured with Trustless Work <span className="footer-dot">·</span> Built on Stellar</span></div></div></footer>;
}

export default function ProofFundLanding() {
  return <><Navigation /><main><Hero /><ImpactStats /><FeaturedCampaigns /><HowItWorks /><Transparency /><FinalCta /></main><Footer /></>;
}
