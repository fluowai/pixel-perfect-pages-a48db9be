import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BriefcaseMedical,
  Building2,
  CalendarDays,
  Check,
  Cross,
  Facebook,
  Handshake,
  Heart,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Youtube,
} from "lucide-react";
import caregiverImage from "../assets/carescale-caregiver.jpg";
import dashboardImage from "../assets/carescale-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareScale | Marketing e crescimento para Home Care" },
      {
        name: "description",
        content:
          "Estratégias de marketing, tecnologia e crescimento para empresas de Home Care atraírem pacientes e ampliarem resultados.",
      },
      { property: "og:title", content: "CareScale | Crescimento para Home Care" },
      {
        property: "og:description",
        content: "Mais pacientes, mais contratos e mais crescimento para o seu Home Care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareScaleLanding,
});

const whatsappLink =
  "https://wa.me/5547992701014?text=Ol%C3%A1%2C%20quero%20crescer%20meu%20Home%20Care";

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="brand" aria-label="CareScale — início">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-cross">+</span>
      </span>
      <span className={light ? "brand-name brand-name-light" : "brand-name"}>
        Care<span>Scale</span>
        <small>GROWTH PARA HOME CARE</small>
      </span>
    </a>
  );
}

const benefits = [
  { icon: BarChart3, label: "Mais pacientes" },
  { icon: Users, label: "Mais contratos" },
  { icon: Rocket, label: "Mais crescimento" },
];

const metrics = [
  { icon: Users, value: "+200", label: "Home Cares atendidos" },
  { icon: Heart, value: "+50 mil", label: "Pacientes impactados" },
  { icon: BarChart3, value: "+300%", label: "Média de crescimento" },
  { icon: Star, value: "98%", label: "Clientes recomendam" },
];

const services = [
  { icon: Users, label: "Estratégia de Marketing para Home Care" },
  { icon: Heart, label: "Gestão de Leads e CRM" },
  { icon: MapPin, label: "Google Meu Negócio e SEO Local" },
  { icon: TrendingUp, label: "Tráfego Pago de Alta Performance" },
  { icon: CalendarDays, label: "Conteúdo e Redes Sociais com Foco em Resultado" },
  { icon: BriefcaseMedical, label: "Consultoria Estratégica e Acompanhamento" },
];

const audiences = [
  { icon: Home, title: "Empresas de Home Care", text: "Atraia mais pacientes e aumente sua receita." },
  { icon: Users, title: "Agências de Cuidadores", text: "Mais visibilidade e oportunidades." },
  { icon: Cross, title: "Serviços de Enfermagem Domiciliar", text: "Posicionamento e geração de demanda." },
  { icon: Handshake, title: "Parcerias e Convênios", text: "Relacionamento estratégico com médicos, clínicas e hospitais." },
];

function CareScaleLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Metrics />
      <Solutions />
      <Audience />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#solucoes">Soluções</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          Falar com um especialista
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu /></summary>
          <nav>
            <a href="#inicio">Início</a><a href="#solucoes">Soluções</a>
            <a href="#beneficios">Benefícios</a><a href="#depoimentos">Depoimentos</a>
            <a href="#blog">Blog</a><a href="#contato">Contato</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">MAIS PACIENTES. MAIS RESULTADOS.</p>
          <h1>Marketing e crescimento para <span>Home Care</span></h1>
          <p className="hero-lead">
            Estratégias inteligentes para atrair mais pacientes, aumentar sua autoridade e transformar seu Home Care em uma máquina de crescimento.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Quero crescer meu Home Care
            </a>
            <a className="secondary-cta" href="#solucoes">
              Conheça nossas soluções <ArrowRight size={18} />
            </a>
          </div>
          <div id="beneficios" className="benefit-row">
            {benefits.map(({ icon: Icon, label }) => (
              <div className="benefit-item" key={label}>
                <span><Icon size={24} /></span>{label}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-arch">
            <img src={caregiverImage} width={1024} height={1024} alt="Cuidadora sorrindo para uma paciente idosa" />
          </div>
          <div className="hero-note">
            <Heart size={22} />
            <p><strong>Cuidado que<br />transforma vidas.</strong><br />Crescimento que<br /><b>gera oportunidades.</b></p>
          </div>
          <p className="handwritten">Mais pessoas<br /><span>melhor atendidas</span></p>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-wrap" aria-label="Resultados CareScale">
      <div className="page-shell metrics-panel">
        {metrics.map(({ icon: Icon, value, label }) => (
          <div className="metric" key={value}>
            <span className="icon-tile"><Icon size={31} /></span>
            <div><strong>{value}</strong><small>{label}</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solucoes" className="solutions-section">
      <div className="page-shell solutions-grid">
        <div className="solutions-copy">
          <p className="eyebrow">SOLUÇÕES COMPLETAS</p>
          <h2>Tudo o que seu Home Care precisa <span>para crescer</span></h2>
          <p className="section-lead">Unimos marketing, tecnologia e estratégia para atrair pacientes, gerar oportunidades e aumentar seus resultados.</p>
          <div className="service-grid">
            {services.map(({ icon: Icon, label }) => (
              <div className="service-item" key={label}>
                <span className="icon-tile"><Icon size={28} /></span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <a href="#contato" className="text-link">Ver todas as soluções <ArrowRight size={17} /></a>
        </div>
        <div className="dashboard-stage">
          <img src={dashboardImage} loading="lazy" width={1200} height={800} alt="Painel de resultados de marketing da CareScale em um notebook" />
          <div className="dashboard-tag"><span><Check size={18} /></span><b>Estratégia hoje.<br />Mais pacientes amanhã.</b></div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="depoimentos" className="audience-section">
      <div className="page-shell">
        <p className="eyebrow centered">PARA QUEM É A CARESCALE</p>
        <h2 className="audience-title">Soluções para todo o Ecossistema de Home Care</h2>
        <div className="audience-grid">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article className="audience-card" key={title}>
              <span className="icon-tile"><Icon size={31} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="final-cta">
      <div className="page-shell final-grid">
        <div>
          <p className="eyebrow">VAMOS CRESCER JUNTOS?</p>
          <h2>Quer mais pacientes para o seu Home Care?</h2>
          <p>Fale com um especialista e descubra como a CareScale pode acelerar seus resultados.</p>
        </div>
        <div className="final-actions">
          <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar agora no WhatsApp <ArrowRight size={17} /></a>
          <small><ShieldCheck size={13} /> Atendimento consultivo e sem compromisso.</small>
        </div>
        <div className="cta-watermark"><TrendingUp /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="blog" className="site-footer">
      <div className="page-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Mais cuidado. Mais resultados.</p>
            <div className="socials">
              <a href="#instagram" aria-label="Instagram"><Instagram /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#youtube" aria-label="YouTube"><Youtube /></a>
              <a href="#facebook" aria-label="Facebook"><Facebook /></a>
            </div>
          </div>
          <div><h3>Soluções</h3><ul><li>Marketing para Home Care</li><li>Gestão de Leads e CRM</li><li>Google Meu Negócio</li><li>Tráfego Pago</li><li>Conteúdo e Redes Sociais</li><li>Consultoria Estratégica</li></ul></div>
          <div><h3>Institucional</h3><ul><li>Sobre a CareScale</li><li>Blog</li><li>Depoimentos</li><li>Política de Privacidade</li><li>Termos de Uso</li><li>Contato</li></ul></div>
          <div><h3>Contato</h3><ul className="contact-list"><li><MessageCircle /> (47) 9927-01014</li><li><Mail /> contato@carescale.com.br</li><li><MapPin /> Balneário Camboriú/SC</li><li><MapPin /> Brasília/DF</li><li>Atendimento em todo o Brasil</li></ul></div>
        </div>
        <div className="footer-bottom"><span>© 2026 CareScale. Todos os direitos reservados.</span><span><i /> Tecnologia que impulsiona o cuidado.</span></div>
      </div>
    </footer>
  );
}