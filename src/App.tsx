import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Calendar,
    FileText,
    ListChecks,
    RefreshCw,
    Sparkles,
    Target,
    Compass,
    Flame,
    Lightbulb,
    ArrowRight,
    Plus,
    Star,
    Clock,
    TrendingUp,
    BookOpen,
    Trophy,
} from "lucide-react";
import logoImg from "./assets/lolgo.png";
import avatar1 from "./assets/491449958_18051564290587134_3407272341558677419_n.jpg";
import avatar2 from "./assets/464171015_1314458336636570_3083282850834738553_n.jpg";
import avatar3 from "./assets/658781911_17915454471335085_5590349248708414285_n.jpg";
import showcaseCronograma from "../public/showcase-cronograma.svg";
import showcaseSimulado from "../public/showcase-simulado.svg";
import showcaseMensal from "../public/showcase-mensal.svg";

const WHATS_LINK =
    "https://pay.hotmart.com/R105545138Y?sck=HOTMART_PRODUCT_PAGE&off=ovlirnvj&hotfeature=32&_gl=1*7ya6xk*_gcl_au*MTU1NjYwMTY4OS4xNzc3MTU5NjI0*FPAU*MTU1NjYwMTY4OS4xNzc3MTU5NjI0*_ga*MTQ3NTQ0MDY0Mi4xNzc3MTU5NjIw*_ga_GQH2V1F11Q*czE3NzcxNTk2MjAkbzEkZzEkdDE3NzcxNjA2NzgkajU5JGwwJGgxMTEwNjY0NDA1&bid=1777160691947";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" as const },
};

function LogoSVG() {
    return (
        <img
            src={logoImg}
            alt="Logo"
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
        />
    );
}

function Nav() {
    return (
        <nav className="nav">
            <div className="container nav-inner">
                <a href="#" className="brand">
                    <span className="brand-mark">
                        <LogoSVG />
                    </span>
                    Plano ENEM
                </a>
                <div className="nav-links">
                    <a href="#solucao">Como funciona</a>
                    <a href="#inclui">O que vem</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <a href="#faq">Dúvidas</a>
                </div>
                <a href="#cta" className="btn btn-primary" style={{ padding: "12px 22px", fontSize: 14 }}>
                    Quero meu cronograma
                </a>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <motion.div {...fadeUp}>
                    <span className="eyebrow">
                        <Sparkles size={14} /> Atualizado para o ENEM 2026
                    </span>
                    <h1>
                        Passe no ENEM com um cronograma{" "}
                        <span className="accent">pronto, atualizado</span> e sem enrolação.
                    </h1>
                    <p className="lead">
                        Receba planos de estudo, simulados e organização completa para
                        estudar todos os dias <strong>sem se perder</strong>. Você não
                        precisa mais estudar perdido — existe um plano claro para você
                        seguir.
                    </p>
                    <div className="hero-cta">
                        <a href="#cta" className="btn btn-primary">
                            Quero meu cronograma <ArrowRight size={18} />
                        </a>
                        <a
                            href="mailto:descomplicadoparaenem@gmail.com"
                            className="btn btn-ghost"
                        >
                            Entrar em contato por email
                        </a>
                    </div>
                    <div className="hero-trust">
                        <div className="avatars">
                            <span>JM</span>
                            <span>AC</span>
                            <span>LR</span>
                            <span>+</span>
                        </div>
                        <span>
                            <strong style={{ color: "var(--text-strong)" }}>+1.200 estudantes</strong>{" "}
                            já estudam com método.
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="hero-card"
                >
                    <div className="float-card tl">
                        <Flame size={16} color="#d34017" /> 7 dias de constância
                    </div>
                    <div className="float-card br">
                        <TrendingUp size={16} color="#d34017" /> Nota subiu 120 pts
                    </div>

                    <div className="hero-card-head">
                        <h4>Sua semana de estudos</h4>
                        <span className="badge">Hoje</span>
                    </div>
                    <div className="task done">
                        <span className="check">
                            <CheckCircle2 size={14} />
                        </span>
                        Matemática — Funções
                        <span className="meta">45 min</span>
                    </div>
                    <div className="task done">
                        <span className="check">
                            <CheckCircle2 size={14} />
                        </span>
                        Redação — Estrutura argumentativa
                        <span className="meta">30 min</span>
                    </div>
                    <div className="task">
                        <span className="check" />
                        Biologia — Genética
                        <span className="meta">40 min</span>
                    </div>
                    <div className="task">
                        <span className="check" />
                        Simulado ENEM — Linguagens
                        <span className="meta">1h 30</span>
                    </div>

                    <div className="progress">
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "62%" }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                        />
                    </div>
                    <div className="progress-label">
                        <span>Progresso da semana</span>
                        <span>62%</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const pains = [
    {
        icon: <Compass size={20} />,
        title: "Não saber por onde começar",
        text: "Tanto conteúdo, tantas matérias… e você travado, sem saber qual o próximo passo.",
    },
    {
        icon: <Clock size={20} />,
        title: "Falta de constância",
        text: "Estuda forte 2 dias e some 5. Sem rotina, o conteúdo nunca fixa de verdade.",
    },
    {
        icon: <TrendingUp size={20} />,
        title: "Estudar e não ver resultado",
        text: "Você se esforça, mas a nota dos simulados não mexe. Algo está faltando.",
    },
    {
        icon: <Lightbulb size={20} />,
        title: "Se sentir perdido com o conteúdo",
        text: "Sem direção clara, é fácil estudar o que é fácil e fugir do que cai mesmo.",
    },
];

function Pain() {
    return (
        <section id="pain">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">Você se identifica?</span>
                    <h2>Estudar sem método é cansativo — e injusto com você.</h2>
                    <p>
                        A maioria dos estudantes não falha por falta de capacidade.
                        Falha por falta de <strong>direção</strong>.
                    </p>
                </div>
                <div className="pain-grid">
                    {pains.map((p, i) => (
                        <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="pain-card">
                            <div className="icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        icon: <Target size={26} />,
        title: "Direção clara",
        text: "Saiba exatamente o que estudar hoje, amanhã e na próxima semana. Sem dúvida, sem improviso.",
        highlight: true,
    },
    {
        icon: <Calendar size={26} />,
        title: "Organização pronta",
        text: "Cronogramas estruturados por semana e por matéria. É só abrir e seguir o passo a passo.",
    },
    {
        icon: <Flame size={26} />,
        title: "Consistência real",
        text: "Rotina pensada para caber na sua vida — você cria o hábito de estudar todo dia, sem se cobrar demais.",
    },
];

const showcaseItems = [
    {
        img: showcaseCronograma,
        alt: "Cronograma semanal em tablet",
        title: "Cronograma Semanal",
        bullets: ["Organizado por matéria", "Horários flexíveis", "Fácil de seguir"],
    },
    {
        img: showcaseSimulado,
        alt: "Simulado ENEM impresso com cartão-resposta",
        title: "Simulados com Gabarito",
        bullets: ["Formato oficial ENEM", "Correção detalhada", "Análise de desempenho"],
    },
    {
        img: showcaseMensal,
        alt: "Planejamento mensal em laptop",
        title: "Planejamento Mensal",
        bullets: ["Metas claras", "Revisões programadas", "Acompanhamento visual"],
    },
];

function Showcase() {
    return (
        <section id="showcase">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">O que você recebe</span>
                    <h2>Tudo que você precisa para estudar com direção</h2>
                    <p>Material completo, organizado e pronto para usar desde o primeiro dia.</p>
                </div>
                <div className="showcase-grid">
                    {showcaseItems.map((it, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="showcase-card"
                        >
                            <div className="showcase-img">
                                <img src={it.img} alt={it.alt} loading="lazy" />
                            </div>
                            <div className="showcase-body">
                                <h3>{it.title}</h3>
                                <ul>
                                    {it.bullets.map((b, k) => (
                                        <li key={k}>
                                            <CheckCircle2 size={18} /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Solution() {
    return (
        <section id="solucao">
            <div className="solution">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">A solução</span>
                        <h2>Um sistema completo de estudos. Não só um arquivo.</h2>
                        <p>
                            Mais que cronograma: um método para você ter clareza no que
                            estudar e disciplina pra continuar.
                        </p>
                    </div>
                    <div className="solution-grid">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`feature ${f.highlight ? "highlight" : ""}`}
                            >
                                <div className="icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const includes = [
    {
        icon: <Calendar size={16} />,
        title: "Cronogramas de estudo prontos",
        desc: "Planejamento semanal, mensal e até a prova.",
    },
    {
        icon: <FileText size={16} />,
        title: "Simulados estilo ENEM",
        desc: "Treine no formato real e acompanhe sua evolução.",
    },
    {
        icon: <ListChecks size={16} />,
        title: "Atividades organizadas",
        desc: "Listas por matéria, do básico ao avançado.",
    },
    {
        icon: <Compass size={16} />,
        title: "Planejamento contínuo",
        desc: "Você sabe o próximo passo todo dia.",
    },
    {
        icon: <RefreshCw size={16} />,
        title: "Atualizações frequentes",
        desc: "Material vivo, sempre alinhado ao ENEM atual.",
    },
    {
        icon: <BookOpen size={16} />,
        title: "Guia de redação",
        desc: "Estrutura, repertório e dicas para nota 1000.",
    },
];

function Includes() {
    return (
        <section id="inclui">
            <div className="includes-wrap">
                <motion.div {...fadeUp}>
                    <span className="eyebrow" style={{ background: "var(--primary)", color: "#fff" }}>
                        <Trophy size={14} /> Tudo no mesmo lugar
                    </span>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: "20px 0 14px" }}>
                        O que você recebe ao entrar pra dentro do método
                    </h2>
                    <p style={{ fontSize: 17 }}>
                        Um pacote completo, pensado para te tirar do improviso e te colocar
                        no caminho dos aprovados.
                    </p>
                </motion.div>
                <motion.ul {...fadeUp} className="includes-list">
                    {includes.map((it, i) => (
                        <li key={i}>
                            <span className="ic">{it.icon}</span>
                            <div>
                                <strong>{it.title}</strong>
                                <span>{it.desc}</span>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

const steps = [
    {
        n: "1",
        title: "Você entra no método",
        text: "Faça seu pedido em poucos cliques e receba acesso imediato no seu e-mail e WhatsApp.",
    },
    {
        n: "2",
        title: "Recebe seu plano pronto",
        text: "Cronogramas, simulados e atividades já organizados — é só abrir e começar.",
    },
    {
        n: "3",
        title: "Estuda com clareza todos os dias",
        text: "Você sabe exatamente o que fazer hoje. Sem perder tempo, sem se sentir perdido.",
    },
];

function Steps() {
    return (
        <section id="como">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">Como funciona</span>
                    <h2>Do caos ao plano, em 3 passos</h2>
                    <p>Simples como deveria ser. Você só precisa começar.</p>
                </div>
                <div className="steps">
                    {steps.map((s, i) => (
                        <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="step">
                            <div className="num">{s.n}</div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const testis = [
    {
        name: "Mike M.",
        role: "Aprovado em Medicina",
        text: "Eu vivia perdida em mil PDFs. Com o cronograma pronto, finalmente passei a estudar todo dia sem culpa. Minha nota saltou 140 pontos.",
        initials: "JM",
        image: avatar1,
        alt: false,
    },
    {
        name: "Amandio.",
        role: "estudante de pedagogia",
        text: "Eu não sabia nem por onde começar. Hoje abro o app, vejo a tarefa do dia e faço. Simples assim. É outra cabeça.",
        initials: "AC",
        image: avatar2,
        alt: true,
    },
    {
        name: "Emerson F.",
        role: "cursando design",
        text: "O que mais me ajudou foi a constância. Dei conta de manter rotina por 4 meses seguidos pela primeira vez na vida.",
        initials: "LR",
        image: avatar3,
        alt: false,
    },
];

function Testimonials() {
    return (
        <section id="depoimentos">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">Resultados reais</span>
                    <h2>Quem segue o plano, sai do lugar.</h2>
                    <p>Depoimentos de estudantes que largaram o improviso.</p>
                </div>
                <div className="testi-grid">
                    {testis.map((t, i) => (
                        <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className={`testi-card ${t.alt ? "alt" : ""}`}>
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, k) => (
                                    <Star key={k} size={16} fill="#f5b342" stroke="#f5b342" />
                                ))}
                            </div>
                            <p>“{t.text}”</p>
                            <div className="testi-author">
                                <img src={t.image} alt={t.name} className="av" />
                                <div>
                                    <strong>{t.name}</strong>
                                    <small>{t.role}</small>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section id="cta">
            <div className="final-cta">
                <motion.div {...fadeUp} style={{ position: "relative", zIndex: 2 }}>
                    <span
                        className="eyebrow"
                        style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
                    >
                        <Sparkles size={14} /> Comece hoje
                    </span>
                    <h2 style={{ marginTop: 18 }}>
                        Pare de estudar perdido.
                        <br /> Comece com um plano claro.
                    </h2>
                    <p>
                        Você não precisa de mais conteúdo. Você precisa de direção. Entre
                        no método e tenha um cronograma pronto desde hoje.
                    </p>
                    <div className="hero-cta" style={{ justifyContent: "center" }}>
                        <a href={WHATS_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Começar agora <ArrowRight size={18} />
                        </a>
                        <a href="mailto:descomplicadoparaenem@gmail.com" className="btn btn-ghost">
                            Entrar em contato por email
                        </a>
                    </div>
                    <p style={{ fontSize: 14, marginTop: 22, opacity: 0.85 }}>
                        Acesso imediato • Atualizações inclusas • Suporte por email
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

const faqs = [
    {
        q: "Como funciona o método?",
        a: "Você recebe um sistema completo de estudos: cronogramas semanais e mensais, simulados estilo ENEM, atividades por matéria e um guia de redação. É só abrir, seguir o passo do dia e estudar com clareza, sem precisar montar nada do zero.",
    },
    {
        q: "Como eu recebo o material?",
        a: "Logo após a confirmação, o acesso é enviado para seu e-mail e WhatsApp. Você acessa de qualquer celular, tablet ou computador, na hora.",
    },
    {
        q: "Serve para quem está começando do zero?",
        a: "Sim. O método foi pensado pra te dar direção mesmo se você não sabe por onde começar. Tem trilhas para iniciantes e para quem já está no ritmo do ENEM.",
    },
    {
        q: "Com que frequência o material é atualizado?",
        a: "Atualizamos o conteúdo de forma contínua, sempre que há mudanças no ENEM, novos simulados ou melhorias no cronograma. As atualizações são automáticas e gratuitas pra você.",
    },
    {
        q: "Posso falar com alguém antes de comprar?",
        a: "Pode sim! Clique em 'Falar no WhatsApp' a qualquer momento e tire todas as suas dúvidas com a gente.",
    },
];

function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faq">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">Dúvidas frequentes</span>
                    <h2>Tudo que você quer saber antes de começar</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                                <button className="faq-q" onClick={() => setOpen(isOpen ? null : i)}>
                                    {f.q}
                                    <span className="ico">
                                        <Plus size={16} />
                                    </span>
                                </button>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.25 }}
                                        className="faq-a"
                                    >
                                        {f.a}
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <div className="container footer-inner">
                <div className="brand">
                    <span className="brand-mark">
                        <LogoSVG />
                    </span>
                    Plano ENEM
                </div>
                <small>
                    © {new Date().getFullYear()} Plano ENEM — Estude com método, não no
                    improviso.
                </small>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Pain />
            <Solution />
            <Showcase />
            <Includes />
            <Steps />
            <Testimonials />
            <FinalCTA />
            <FAQ />
            <Footer />

            {/* WhatsApp floating button removido */}
        </>
    );
}
