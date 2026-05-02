import { useState } from "react";
import logo from "./src/assets/acceleratorx.png";
import nvidiaLogo from "./src/assets/nvidia.png";
import mentorImg from "./src/assets/hero.png";
import sidesImg from "./src/assets/sides.png";

const C = {
    green: "#76B900", greenBg: "#252F15", greenDeep: "#0E1600",
    black: "#000000", near: "#0C0C0C", dark: "#0E0E0E",
    border: "#4E4E4E", navBorder: "#1E2B3B",
    text: "#FCFCFC", muted: "#D4D4D4", grey: "#C0C0C0", placeholder: "#868686",
    orange: "#FF764C", teal: "#00FFC5", purple: "#BF88FF", yellow: "#FFD000",
};

const Dot = () => (
    <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: C.green, flexShrink: 0 }} />
);

const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const BriefcaseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const ExperienceIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const EducationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);

const DiagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 21V15C2 13.8954 2.89543 13 4 13H8C9.10457 13 10 13.8954 10 15V21H2Z" fill="#76B900" /><path d="M14 21V15C14 13.8954 14.8954 13 16 13H20C21.1046 13 22 13.8954 22 15V21H14Z" fill="#76B900" /><path d="M8 7V3C8 1.89543 8.89543 1 10 1H14C15.1046 1 16 1.89543 16 3V7H8Z" fill="#76B900" /><path d="M12 7V13" stroke="#76B900" strokeWidth="2" strokeLinecap="round" /><path d="M6 13V11C6 9.89543 6.89543 9 8 9H16C17.1046 9 18 9.89543 18 11V13" stroke="#76B900" strokeWidth="2" strokeLinecap="round" /></svg>
);
const TeacherIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V7Z" fill="#76B900" /><path d="M7 21H17" stroke="#76B900" strokeWidth="2" strokeLinecap="round" /><path d="M12 17V21" stroke="#76B900" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="11" r="3" stroke="black" strokeWidth="2" /></svg>
);
const UserBusinessIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="4" stroke="#76B900" strokeWidth="2" /><path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#76B900" strokeWidth="2" /><path d="M10 15V13" stroke="#76B900" strokeWidth="2" /><path d="M14 15V13" stroke="#76B900" strokeWidth="2" /></svg>
);

const RobotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#76B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4M8 16h.01M16 16h.01" /></svg>
);
const ToolsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#76B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);
const BrainIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#76B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-4.96 0V4.5a2.5 2.5 0 0 1 5 0Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 4.96 0V4.5a2.5 2.5 0 0 0-5 0Z" /></svg>
);
const WorkflowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#76B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 14V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7" /><path d="M17 22l5-5-5-5" /><path d="M12 7h5" /><path d="M12 11h5" /><path d="M7 7h.01" /><path d="M7 11h.01" /><path d="M7 15h.01" /></svg>
);
const LinkedInIcon = () => (
    <div style={{ width: 32, height: 32, background: "#0A66C2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    </div>
);


const SectionLabel = ({ children, gradient }: { children: React.ReactNode; gradient?: boolean }) => (
    <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        border: gradient ? "1px solid transparent" : "1px solid rgba(118,185,0,0.3)",
        background: gradient
            ? "linear-gradient(black, black) padding-box, linear-gradient(90deg, #76B900, #FFFFFF) border-box"
            : "rgba(118,185,0,0.05)",
        borderRadius: 24, padding: "8px 20px",
        color: C.text, fontSize: 14, fontWeight: 500,
        textTransform: "uppercase", letterSpacing: 1,
        whiteSpace: "nowrap"
    }}>
        {children}
    </div>
);

const InfoCard = ({ label, value, color }: { label: string; value: string; color: string }) => (
    <div style={{
        background: "rgba(12,12,12,0.6)", border: `1px solid rgba(118,185,0,0.4)`,
        borderRadius: 12, padding: "16px 20px",
        width: 160, minHeight: 90, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 4
    }}>
        <div style={{ width: 6, height: 6, background: C.green, borderRadius: "50%", marginBottom: 4 }} />
        <span style={{ color: "rgba(252,252,252,0.6)", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
        <span style={{ color, fontWeight: 600, fontSize: 16, textAlign: "center" }}>{value}</span>
    </div>
);

const GreenIcon = () => (
    <div style={{
        width: 32, height: 32, background: "rgba(118,185,0,0.1)",
        borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${C.green}`
    }}>
        <div style={{ width: 8, height: 8, background: C.green, borderRadius: "50%", boxShadow: `0 0 10px ${C.green}` }} />
    </div>
);

const ValueRow = ({ n, text, color }: { n: string; text: string; color: string }) => (
    <div style={{
        background: "rgba(12,12,12,0.8)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12,
        padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 20
    }}>
        <span style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18,
            color: color,
            minWidth: 28
        }}>
            {n}
        </span>
        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 15, color: "#FFFFFF" }}>
            {text}
        </span>
    </div>
);

export default function LPWorkshop() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    const faqs = [
        { q: "Is this beginner-friendly?", a: "Basic understanding of AI or programming is helpful, but concepts will be explained clearly." },
        { q: "Do I need to know Python?", a: "No deep Python knowledge is required. The session is practical and accessible to anyone curious about AI agents." },
        { q: "Will there be a recording?", a: "No. This is a live-only session. No recordings will be shared after the event." },
    ];

    return (
        <div style={{
            background: C.black, minHeight: "100vh", color: C.text,
            fontFamily: "'Poppins',sans-serif", overflowX: "hidden"
        }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,500&family=Montserrat:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .btn:hover{opacity:.85;}
        .faq-row{cursor:pointer;transition:background .2s;}
        .faq-row:hover{background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%) !important;}
        .grid-bg {
            position: absolute;
            top: 0; left: 0; 
            width: 40%;
            height: 350px;
            background-image: linear-gradient(rgba(118,185,0,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(118,185,0,0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(circle at top left, black, transparent 70%);
            -webkit-mask-image: radial-gradient(circle at top left, black, transparent 70%);
            pointer-events: none;
            z-index: 0;
        }
      `}</style>

            {/* NAV */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 50, background: C.dark,
                borderBottom: `1px solid ${C.navBorder}`, height: 92,
                display: "flex", alignItems: "center", padding: "0 120px", justifyContent: "space-between"
            }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="AcceleratorX Logo" style={{ height: 40, width: "auto" }} />
                </div>
                <button className="btn" style={{
                    background: "#1A71F5", border: "1px solid #1A71F5",
                    borderRadius: 8, padding: "12px 24px", color: C.text, fontWeight: 500,
                    fontSize: 14, letterSpacing: -.36, cursor: "pointer", fontFamily: "'Poppins',sans-serif"
                }}>
                    Contact us
                </button>
            </nav>

            {/* HERO */}
            <section style={{ position: "relative", padding: "80px 120px 60px", minHeight: 843, overflow: "hidden" }}>
                <div className="grid-bg" />
                <div style={{
                    position: "absolute", right: -200, bottom: -100, width: 800, height: 800, borderRadius: "50%",
                    background: "radial-gradient(50% 50% at 50% 50%,rgba(118,185,0,.3) 0%,rgba(118,185,0,0) 100%)",
                    filter: "blur(60px)", pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", left: -150, top: -150, width: 300, height: 300,
                    borderRadius: "50%", background: "rgba(118,185,0,.3)", opacity: .4,
                    filter: "blur(60px)", pointerEvents: "none"
                }} />

                <div style={{ display: "flex", gap: 60, alignItems: "flex-start", position: "relative", zIndex: 1, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, maxWidth: 744, minWidth: 300 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                background: C.greenBg, borderRadius: 24, padding: "6px 12px"
                            }}>
                                <Dot />
                                <span style={{ color: C.green, fontWeight: 500, fontSize: 14 }}>AI Workshop</span>
                            </div>
                            <img src={nvidiaLogo} alt="NVIDIA" style={{ height: 48, width: "auto" }} />
                        </div>

                        <h1 style={{ fontWeight: 600, fontSize: 42, lineHeight: "63px", color: C.text, marginBottom: 20 }}>
                            NAT (<span style={{
                                backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                                WebkitBackgroundClip: "text", backgroundClip: "text",
                                WebkitTextFillColor: "transparent", color: "transparent"
                            }}>NeMo Agent Toolkit - NVIDIA</span>) with a Practical Example
                        </h1>
                        <p style={{ color: C.muted, fontSize: 16, lineHeight: "24px", marginBottom: 12, maxWidth: 697 }}>
                            Learn how to use NVIDIA's NeMo Agent Toolkit (NAT) to run AI agents that can think, act, and complete tasks automatically - without complex setups.
                        </p>
                        <p style={{ color: C.muted, fontSize: 16, lineHeight: "24px", marginBottom: 36, maxWidth: 697 }}>
                            In this live, hands-on session, you'll understand how NAT works and how to use it in a real scenario. You'll learn how to give tasks to AI agents, connect tools, and get structured outputs, with a simple, practical example you can apply immediately.
                        </p>

                        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
                            <InfoCard label="Date:" value="9th May" color={C.teal} />
                            <InfoCard label="Time:" value="1:00 PM IST" color={C.purple} />
                            <InfoCard label="Level:" value="Intermediate" color={C.orange} />
                        </div>

                        <div style={{
                            display: "inline-flex", alignItems: "center",
                            background: C.black, border: "1px solid #2a2a2a",
                            borderRadius: 24, padding: "12px 24px"
                        }}>
                            <span style={{ color: C.muted, fontWeight: 500, fontSize: 16 }}>
                                Note: This is a live-only session. No recordings will be shared.
                            </span>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                            width: 480, flexShrink: 0,
                            background: "rgba(8,8,8,0.4)",
                            border: `1px solid rgba(118,185,0,0.2)`,
                            boxShadow: `0 0 40px rgba(0,0,0,0.4)`,
                            backdropFilter: "blur(24px)", borderRadius: 24, padding: "60px 50px"
                        }}>
                        {[
                            { icon: <UserIcon />, ph: "Full Name", type: "text" },
                            { icon: <MailIcon />, ph: "Email ID", type: "email" },
                            { icon: <PhoneIcon />, ph: "Phone Number", type: "tel" },
                            { icon: <BriefcaseIcon />, ph: "Designation", type: "text" },
                            { icon: <ExperienceIcon />, ph: "Experience", type: "text" },
                            { icon: <EducationIcon />, ph: "Education", type: "text" },
                        ].map(({ icon, ph, type }, idx) => (
                            <div key={idx} style={{
                                background: "rgba(255,255,255,0.05)", borderRadius: 8,
                                padding: "10px 16px", marginBottom: 12,
                                display: "flex", alignItems: "center", gap: 12,
                                border: "1px solid rgba(255,255,255,0.05)"
                            }}>
                                <div style={{ color: C.green, display: "flex", alignItems: "center", background: "rgba(118,185,0,0.1)", padding: 6, borderRadius: 6 }}>{icon}</div>
                                <input
                                    type={type}
                                    placeholder={ph}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        color: C.text,
                                        fontSize: 14,
                                        width: "100%",
                                        fontFamily: "inherit"
                                    }}
                                />
                            </div>
                        ))}
                        <button type="submit" className="btn" style={{
                            width: "100%",
                            background: "linear-gradient(88.63deg,#355300 3.66%,#4D7900 28.2%,#649D00 69.09%,#76B900 98.17%)",
                            border: "none", borderRadius: 8, padding: "14px 24px", marginTop: 4,
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                            cursor: "pointer", fontFamily: "'Poppins',sans-serif"
                        }}>
                            <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, letterSpacing: -.36 }}>Claim Your Free Spot</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section style={{ padding: "90px 0px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                    <SectionLabel gradient>Learning Outcomes</SectionLabel>
                    <h2 style={{
                        fontWeight: 600, fontSize: 42, lineHeight: "54px", color: "#FFFFFF",
                        textAlign: "center", textTransform: "uppercase", width: 800
                    }}>
                        WHAT <span style={{
                            backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                            WebkitBackgroundClip: "text", backgroundClip: "text",
                            WebkitTextFillColor: "transparent", color: "transparent"
                        }}>YOU’LL LEARN</span> AT A GLANCE
                    </h2>
                    <p style={{ color: "#D4D4D4", fontSize: 16, lineHeight: "24px", textAlign: "center", width: 571 }}>What you’ll actually master</p>
                </div>
                <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", width: 1072 }}>
                    {[
                        {
                            title: "What is NAT (NeMo Agent Toolkit)", glow: true, icon: <DiagramIcon />,
                            desc: "Understand how NAT works and how it enables AI agents to go beyond answering by performing tasks using tools and workflows."
                        },
                        {
                            title: "How to Use NAT", glow: false, icon: <TeacherIcon />,
                            desc: "Learn how to give tasks to agents, connect tools, and get structured outputs without complex setup or heavy coding."
                        },
                        {
                            title: "Short Practical Example", glow: false, icon: <UserBusinessIcon />,
                            desc: "See how a real task is executed step-by-step using NAT:\n→ Agent understands the task\n→ Uses tools (data processing/analysis)\n→ Identifies patterns and insights\n→ Returns a structured summary"
                        },
                    ].map(({ title, desc, glow, icon }) => (
                        <div key={title} style={{
                            background: "linear-gradient(#0C0C0C, #0C0C0C) padding-box, linear-gradient(135deg, #76B900, #FFFFFF) border-box",
                            border: "1px solid transparent",
                            boxShadow: glow ? "0px 0px 40px rgba(118, 185, 0, 0.3)" : "none",
                            borderRadius: 16, padding: "32px 24px", width: 320, minHeight: 300,
                            display: "flex", flexDirection: "column", gap: 24
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <div style={{ width: 24, height: 24 }}>{icon}</div>
                                <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24, lineHeight: "29px", color: "#FFFFFF" }}>{title}</span>
                            </div>
                            <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "100%", color: "#C0C0C0", whiteSpace: "pre-line" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY ATTEND SECTION */}
            <section style={{ padding: "90px 0px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                    <SectionLabel gradient>What You Gain</SectionLabel>
                    <h2 style={{
                        fontWeight: 600, fontSize: 42, lineHeight: "54px", color: "#FFFFFF",
                        textAlign: "center", textTransform: "uppercase"
                    }}>
                        WHY ATTEND THIS <span style={{
                            backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                            WebkitBackgroundClip: "text", backgroundClip: "text",
                            WebkitTextFillColor: "transparent", color: "transparent"
                        }}>WORKSHOP?</span>
                    </h2>
                    <p style={{ color: "#D4D4D4", fontSize: 18, fontStyle: "italic", textAlign: "center", maxWidth: 800 }}>
                        “AI won’t replace developers but those who know how to use AI agents will move faster.”
                    </p>
                    <p style={{ color: "#D4D4D4", fontSize: 16, lineHeight: "24px", textAlign: "center", maxWidth: 700 }}>
                        This workshop is designed for anyone who wants to go beyond basic AI usage and start using agent systems effectively.
                    </p>
                    <p style={{ color: "#D4D4D4", fontSize: 14, textAlign: "center" }}>You’ll learn how to:</p>
                </div>

                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", width: 1400 }}>
                    {[
                        { icon: <RobotIcon />, text: "Use NAT to run AI agents" },
                        { icon: <ToolsIcon />, text: "Automate tasks using AI tools" },
                        { icon: <BrainIcon />, text: "Understand how agents think and act" },
                        { icon: <WorkflowIcon />, text: "Apply agent workflows in real scenarios" },
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            background: "rgba(12,12,12,0.6)",
                            border: idx === 0 ? `1px solid ${C.green}` : "1px solid rgba(255,255,255,0.1)",
                            boxShadow: idx === 0 ? `0 0 20px rgba(118,185,0,0.1)` : "none",
                            borderRadius: 16, padding: "24px", width: 320, minHeight: 150,
                            display: "flex", flexDirection: "column", gap: 20,
                            transition: "all 0.3s ease"
                        }}>
                            <div style={{ color: C.green }}>{item.icon}</div>
                            <h3 style={{ fontSize: 24, fontWeight: 500, color: "#FFFFFF", lineHeight: "1.2" }}>{item.text}</h3>
                        </div>
                    ))}
                </div>
            </section>


            {/* VALUE CARDS */}
            <section style={{ padding: "90px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 42 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                    <SectionLabel gradient>Real-World Outcomes</SectionLabel>
                    <h2 style={{
                        fontWeight: 600, fontSize: 48, textAlign: "center",
                        color: "#FFFFFF", textTransform: "uppercase"
                    }}>
                        <span style={{
                            backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                            WebkitBackgroundClip: "text", backgroundClip: "text",
                            WebkitTextFillColor: "transparent", color: "transparent"
                        }}>VALUE</span> CARDS
                    </h2>
                </div>
                <div style={{
                    background: "rgba(118, 185, 0, 0.02)", border: `1px solid rgba(118, 185, 0, 0.3)`,
                    borderRadius: 24, padding: "32px", width: "100%", maxWidth: 1140,
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12
                }}>
                    {[
                        { t: "LIMITED SPOTS. HIGH IMPACT.", s: "A practical, live workshop where you'll:" },
                        { t: "REAL SKILLS. REAL APPLICATIONS.", s: "This is not theory. You'll learn:" },
                    ].map(({ t, s }) => (
                        <div key={t} style={{ background: "rgba(12,12,12,0.8)", border: "1px solid rgba(118, 185, 0, 0.2)", borderRadius: 16, padding: "32px 24px" }}>
                            <div style={{
                                fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24,
                                textTransform: "uppercase", marginBottom: 8,
                                backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                                WebkitBackgroundClip: "text", backgroundClip: "text",
                                WebkitTextFillColor: "transparent", color: "transparent"
                            }}>{t}</div>
                            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'Montserrat',sans-serif" }}>{s}</div>
                        </div>
                    ))}
                    <ValueRow n="01" text="See NAT in action" color={C.orange} />
                    <ValueRow n="01" text="How to use agent-based systems" color={C.orange} />
                    <ValueRow n="02" text="Understand real workflows" color={C.purple} />
                    <ValueRow n="02" text="Tool usage within AI workflows" color={C.purple} />
                    <ValueRow n="03" text="Learn how to use agents step-by-step" color={C.teal} />
                    <ValueRow n="03" text="Task execution using AI agents" color={C.teal} />
                    <ValueRow n="04" text="Get direct guidance from the mentor" color={C.yellow} />
                    <ValueRow n="04" text="Skills useful for AI, dev, and product roles" color={C.yellow} />
                </div>
            </section>

            {/* MEET MENTOR */}
            <section style={{ padding: "90px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 56 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <SectionLabel gradient>Learn From Industry Expert</SectionLabel>
                    <h2 style={{ fontWeight: 600, fontSize: 36, textAlign: "center", textTransform: "uppercase" }}>
                        MEET YOUR <span style={{
                            backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                            WebkitBackgroundClip: "text", backgroundClip: "text",
                            WebkitTextFillColor: "transparent", color: "transparent"
                        }}>MENTOR</span>
                    </h2>
                </div>
                <div style={{ display: "flex", gap: 100, alignItems: "center", width: "100%", maxWidth: 1100, flexWrap: "wrap", justifyContent: "center" }}>
                    <div style={{ flex: "0 1 480px", display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24, color: "#FFFFFF" }}>
                            Shashank Gupta
                        </div>
                        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                            Senior Data Scientist @ LSEG (London Stock Exchange Group)
                        </div>
                        <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(255,255,255,0.7)" }}>
                            Bringing real-world experience in AI systems, Shashank focuses on practical usage of AI to solve real problems and improve workflows.
                        </p>
                    </div>
                    <div style={{ width: 440, height: 380, position: "relative" }}>
                        {/* Clipping Container for images */}
                        <div style={{ width: "100%", height: "100%", position: "absolute", overflow: "hidden", borderRadius: 32 }}>
                            <img src={sidesImg} alt="" style={{
                                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                                objectFit: "cover", zIndex: 0
                            }} />
                            <div style={{
                                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                                clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
                                zIndex: 1
                            }}>
                                <img src={mentorImg} alt="Shashank Gupta" style={{
                                    position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                                    width: "72%", bottom: "-10px", height: "auto"
                                }} />
                            </div>
                        </div>
                        {/* Non-clipped content (Text and Icon) */}
                        <div style={{
                            position: "relative", zIndex: 2, width: "100%", height: "100%", padding: "0 40px 32px 40px",
                            display: "flex", justifyContent: "space-between", alignItems: "flex-end"
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: "#FFFFFF" }}>
                                    Shashank Gupta
                                </div>
                                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                                    Senior Data Scientist @ LSEG
                                </div>
                            </div>
                            <div style={{ transform: "translateX(-45px)" }}>
                                <LinkedInIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section style={{ padding: "100px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 80 }}>
                <h2 style={{ fontWeight: 400, fontSize: 44, textAlign: "center" }}>FAQs</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 840 }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-row"
                            onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                            style={{
                                background: openFaq === i
                                    ? "linear-gradient(180deg,rgba(20,20,20,.6),rgba(20,20,20,.5))"
                                    : "rgba(255,255,255,.1)",
                                boxShadow: "0 1px 0 rgba(0,0,0,.05),0 4px 4px rgba(0,0,0,.05),0 10px 10px rgba(0,0,0,.1)",
                                backdropFilter: "blur(10px)", borderRadius: 16, padding: 30
                            }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: 500, fontSize: 18, color: "rgba(255,255,255,.9)" }}>{faq.q}</span>
                                <div style={{
                                    width: 24, height: 24, borderRadius: "50%",
                                    border: "2px solid rgba(255,255,255,.7)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,.9)", fontSize: 16, flexShrink: 0
                                }}>
                                    {openFaq === i ? "x" : "+"}
                                </div>
                            </div>
                            {openFaq === i && (
                                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 16, lineHeight: "26px", marginTop: 24 }}>{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{
                position: "relative",
                background: "linear-gradient(180deg, transparent 0%, rgba(118,185,0,0.08) 40%, transparent 100%)",
                padding: "110px 120px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 32, overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `linear-gradient(rgba(118,185,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(118,185,0,0.02) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
                    pointerEvents: "none"
                }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative", zIndex: 1 }}>
                    <SectionLabel gradient>Trusted by 12700+ Professionals</SectionLabel>
                    <h2 style={{ fontWeight: 600, fontSize: 44, textAlign: "center", maxWidth: 858, lineHeight: "1.2", color: "#FFFFFF" }}>
                        Stop just using AI for answers start using it to get work done
                    </h2>
                    <p style={{
                        fontWeight: 600, fontSize: 24, lineHeight: "36px", textAlign: "center", maxWidth: 858,
                        backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                        WebkitBackgroundClip: "text", backgroundClip: "text",
                        color: "transparent", WebkitTextFillColor: "transparent"
                    }}>
                        Learn how to use NVIDIA NAT to run AI agents that can handle tasks and deliver real outputs
                    </p>
                </div>
                <button className="btn" style={{
                    position: "relative", zIndex: 1,
                    background: C.black, border: "2px solid #76B900",
                    borderRadius: 16, padding: "24px 32px",
                    color: "#76B900", fontWeight: 600, fontSize: 18, letterSpacing: -.36,
                    cursor: "pointer", fontFamily: "'Poppins',sans-serif",
                    boxShadow: "0 0 15px rgba(118,185,0,0.15)"
                }}>
                    Claim Your Free Spot
                </button>
            </section>
        </div>
    );
}