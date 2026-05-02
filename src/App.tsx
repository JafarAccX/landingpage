import { useState } from "react";
import logo from "./assets/acceleratorx.png";
import nvidiaLogo from "./assets/nvidia.png";
import mentorImg from "./assets/hero.png";
import sidesImg from "./assets/sides.png";

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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#76B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" /></svg>
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
    <div className="lp-info-card" style={{
        background: "rgba(12,12,12,0.8)",
        border: "1px solid rgba(118,185,0,0.3)",
        borderRadius: 16, padding: "20px 24px",
        width: 170, minHeight: 110, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 6,
        boxShadow: "inset 0 0 10px rgba(118,185,0,0.05)"
    }}>
        <div style={{ width: 8, height: 8, background: C.green, borderRadius: "50%", boxShadow: `0 0 8px ${C.green}`, marginBottom: 4 }} />
        <span className="lp-info-card-label" style={{ color: "rgba(252,252,252,0.5)", fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
        <span className="lp-info-card-value" style={{ color, fontWeight: 600, fontSize: 18, textAlign: "center" }}>{value}</span>
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
    <div className="lp-value-row" style={{
        background: "rgba(12,12,12,0.8)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12,
        padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 20
    }}>
        <span className="lp-value-row-num" style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18,
            color: color,
            minWidth: 28
        }}>
            {n}
        </span>
        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />
        <span className="lp-value-row-text" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 15, color: "#FFFFFF" }}>
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
            .lp-nav { padding: 0 60px !important; }
            .lp-hero { padding: 60px 60px 40px !important; min-height: auto !important; }
            .lp-section-pad { padding-left: 60px !important; padding-right: 60px !important; }
            .lp-cta-section { padding: 100px 60px !important; }
            .lp-form { width: 440px !important; padding: 40px 28px !important; }
            .lp-hero-content { max-width: 560px !important; }
            .lp-mentor-row { gap: 60px !important; }
            .lp-mentor-img { width: 380px !important; height: 330px !important; }
        }

        @media (max-width: 1024px) {
            .lp-nav { padding: 0 32px !important; height: 72px !important; }
            .lp-hero { padding: 40px 32px 40px !important; }
            .lp-section-pad { padding-left: 32px !important; padding-right: 32px !important; }
            .lp-cta-section { padding: 80px 32px !important; }
            .lp-hero-flex { gap: 40px !important; }
            .lp-form { width: 400px !important; padding: 36px 24px !important; border-radius: 24px !important; }
            .lp-learn-grid { width: 100% !important; max-width: 700px !important; }
            .lp-learn-card { width: 280px !important; min-height: 260px !important; }
            .lp-why-grid { width: 100% !important; max-width: 700px !important; }
            .lp-why-card { width: 280px !important; }
            .lp-value-col { min-width: 240px !important; }
            .lp-mentor-row { gap: 40px !important; }
            .lp-mentor-img { width: 340px !important; height: 300px !important; }
            .lp-hero-h1 { font-size: 34px !important; line-height: 48px !important; }
            .lp-section-h2 { font-size: 36px !important; line-height: 46px !important; }
            .lp-cta-h2 { font-size: 38px !important; }
        }

        @media (max-width: 768px) {
            .lp-nav { padding: 0 20px !important; height: 64px !important; }
            .lp-nav-logo { height: 32px !important; }
            .lp-nav-btn { padding: 8px 16px !important; font-size: 13px !important; }
            .lp-hero { padding: 32px 20px 32px !important; }
            .lp-hero-flex { flex-direction: column !important; align-items: stretch !important; gap: 32px !important; }
            .lp-hero-content { max-width: 100% !important; min-width: 0 !important; }
            .lp-form { width: 100% !important; padding: 32px 20px !important; border-radius: 20px !important; }
            .lp-hero-h1 { font-size: 28px !important; line-height: 40px !important; }
            .lp-hero-badge { gap: 10px !important; margin-bottom: 24px !important; }
            .lp-nvidia-logo { height: 36px !important; }
            .lp-info-cards { gap: 8px !important; justify-content: center !important; margin-bottom: 32px !important; }
            .lp-info-card { width: 140px !important; min-height: 90px !important; padding: 14px 16px !important; }
            .lp-note-pill { padding: 10px 16px !important; }
            .lp-note-text { font-size: 13px !important; }
            .lp-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
            .lp-section-center { padding: 60px 20px !important; }
            .lp-section-h2 { font-size: 28px !important; line-height: 38px !important; width: auto !important; max-width: 100% !important; }
            .lp-section-sub { width: auto !important; max-width: 100% !important; }
            .lp-learn-grid { width: 100% !important; gap: 20px !important; }
            .lp-learn-card { width: 100% !important; max-width: 400px !important; min-height: auto !important; padding: 24px 20px !important; }
            .lp-why-grid { width: 100% !important; gap: 16px !important; }
            .lp-why-card { width: 100% !important; max-width: 400px !important; min-height: auto !important; padding: 20px !important; }
            .lp-value-section { padding: 60px 20px !important; }
            .lp-value-container { padding: 20px !important; }
            .lp-value-header-title { font-size: 18px !important; }
            .lp-mentor-section { padding: 60px 20px !important; }
            .lp-mentor-row { gap: 32px !important; flex-direction: column !important; align-items: center !important; }
            .lp-mentor-text { flex: 1 1 100% !important; text-align: center !important; align-items: center !important; }
            .lp-mentor-img { width: 100% !important; max-width: 340px !important; height: 300px !important; margin: 0 auto !important; }
            .lp-mentor-img-overlay { padding: 0 16px 16px 16px !important; gap: 8px !important; }
            .lp-mentor-linkedin { transform: translateX(-30px) !important; flex-shrink: 0 !important; }
            .lp-faq-section { padding: 60px 20px !important; gap: 40px !important; }
            .lp-faq-h2 { font-size: 32px !important; }
            .lp-faq-item { padding: 20px !important; }
            .lp-cta-section { padding: 60px 20px !important; }
            .lp-cta-h2 { font-size: 28px !important; }
            .lp-cta-sub { font-size: 18px !important; }
            .lp-cta-btn { padding: 16px 36px !important; font-size: 16px !important; }
        }

        @media (max-width: 480px) {
            .lp-nav { padding: 0 16px !important; height: 56px !important; }
            .lp-nav-logo { height: 28px !important; }
            .lp-nav-btn { padding: 6px 12px !important; font-size: 12px !important; border-radius: 6px !important; }
            .lp-hero { padding: 24px 16px 24px !important; }
            .lp-hero-h1 { font-size: 22px !important; line-height: 32px !important; margin-bottom: 12px !important; }
            .lp-hero-desc { font-size: 14px !important; line-height: 20px !important; }
            .lp-nvidia-logo { height: 28px !important; }
            .lp-info-cards { flex-direction: row !important; gap: 6px !important; }
            .lp-info-card { width: calc(33% - 4px) !important; min-height: 80px !important; padding: 10px 8px !important; border-radius: 12px !important; }
            .lp-info-card-label { font-size: 10px !important; }
            .lp-info-card-value { font-size: 14px !important; }
            .lp-form { padding: 24px 16px !important; border-radius: 16px !important; }
            .lp-form-field { padding: 10px 12px !important; margin-bottom: 10px !important; }
            .lp-form-icon { width: 30px !important; height: 30px !important; padding: 6px !important; }
            .lp-form-input { font-size: 14px !important; }
            .lp-form-btn { padding: 14px 20px !important; border-radius: 10px !important; }
            .lp-section-h2 { font-size: 22px !important; line-height: 30px !important; }
            .lp-learn-card { padding: 20px 16px !important; }
            .lp-learn-card-title { font-size: 20px !important; }
            .lp-value-section { padding: 40px 16px !important; }
            .lp-value-container { padding: 16px !important; border-radius: 16px !important; }
            .lp-value-header { padding: 20px 16px !important; }
            .lp-value-header-title { font-size: 16px !important; }
            .lp-value-row { padding: 0 16px !important; height: 50px !important; }
            .lp-value-row-num { font-size: 15px !important; }
            .lp-value-row-text { font-size: 13px !important; }
            .lp-mentor-section { padding: 40px 16px !important; gap: 32px !important; }
            .lp-mentor-name { font-size: 20px !important; }
            .lp-mentor-img { max-width: 300px !important; height: 240px !important; }
            .lp-mentor-img-overlay { padding: 0 16px 16px 16px !important; }
            .lp-mentor-img-name { font-size: 14px !important; }
            .lp-mentor-img-role { font-size: 10px !important; }
            .lp-faq-section { padding: 40px 16px !important; gap: 32px !important; }
            .lp-faq-h2 { font-size: 28px !important; }
            .lp-faq-q { font-size: 15px !important; }
            .lp-faq-a { font-size: 14px !important; }
            .lp-cta-section { padding: 40px 16px !important; }
            .lp-cta-h2 { font-size: 22px !important; }
            .lp-cta-sub { font-size: 15px !important; line-height: 24px !important; }
            .lp-cta-btn { padding: 14px 28px !important; font-size: 15px !important; border-radius: 30px !important; }
        }
      `}</style>

            {/* NAV */}
            <nav className="lp-nav" style={{
                position: "sticky", top: 0, zIndex: 50, background: C.dark,
                borderBottom: `1px solid ${C.navBorder}`, height: 92,
                display: "flex", alignItems: "center", padding: "0 120px", justifyContent: "space-between"
            }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="AcceleratorX Logo" className="lp-nav-logo" style={{ height: 40, width: "auto" }} />
                </div>
                <button className="btn lp-nav-btn" style={{
                    background: "#1A71F5", border: "1px solid #1A71F5",
                    borderRadius: 8, padding: "12px 24px", color: C.text, fontWeight: 500,
                    fontSize: 14, letterSpacing: -.36, cursor: "pointer", fontFamily: "'Poppins',sans-serif"
                }}>
                    Contact us
                </button>
            </nav>

            {/* HERO */}
            <section className="lp-hero" style={{ position: "relative", padding: "80px 120px 60px", minHeight: 843, overflow: "hidden" }}>
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

                <div className="lp-hero-flex" style={{ display: "flex", gap: 60, alignItems: "flex-start", position: "relative", zIndex: 1, flexWrap: "wrap" }}>
                    <div className="lp-hero-content" style={{ flex: 1, maxWidth: 744, minWidth: 300 }}>
                        <div className="lp-hero-badge" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                background: "rgba(118,185,0,0.15)", border: "1px solid rgba(118,185,0,0.3)",
                                borderRadius: 24, padding: "8px 16px"
                            }}>
                                <Dot />
                                <span style={{ color: C.green, fontWeight: 600, fontSize: 14 }}>AI Workshop</span>
                            </div>
                            <img src={nvidiaLogo} alt="NVIDIA" className="lp-nvidia-logo" style={{ height: 68, width: "auto" }} />
                        </div>

                        <h1 className="lp-hero-h1" style={{ fontWeight: 600, fontSize: 42, lineHeight: "63px", color: C.text, marginBottom: 20 }}>
                            NAT (<span style={{
                                backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                                WebkitBackgroundClip: "text", backgroundClip: "text",
                                WebkitTextFillColor: "transparent", color: "transparent"
                            }}>NeMo Agent Toolkit - NVIDIA</span>) with a Practical Example
                        </h1>
                        <p className="lp-hero-desc" style={{ color: C.muted, fontSize: 16, lineHeight: "24px", marginBottom: 12, maxWidth: 697 }}>
                            Learn how to use NVIDIA's NeMo Agent Toolkit (NAT) to run AI agents that can think, act, and complete tasks automatically - without complex setups.
                        </p>
                        <p className="lp-hero-desc" style={{ color: C.muted, fontSize: 16, lineHeight: "24px", marginBottom: 36, maxWidth: 697 }}>
                            In this live, hands-on session, you'll understand how NAT works and how to use it in a real scenario. You'll learn how to give tasks to AI agents, connect tools, and get structured outputs, with a simple, practical example you can apply immediately.
                        </p>

                        <div className="lp-info-cards" style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
                            <InfoCard label="Date:" value="9th May" color={C.green} />
                            <InfoCard label="Time:" value="1:00 PM IST" color="#FFFFFF" />
                            <InfoCard label="Level:" value="Intermediate" color={C.orange} />
                        </div>

                        <div className="lp-note-pill" style={{
                            display: "inline-flex", alignItems: "center",
                            background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 24, padding: "14px 28px"
                        }}>
                            <span className="lp-note-text" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400, fontSize: 16 }}>
                                <span style={{ fontWeight: 600, color: "#FFFFFF" }}>Note:</span> This is a live-only session. No recordings will be shared.
                            </span>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <form
                        className="lp-form"
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                            width: 500, flexShrink: 0,
                            background: "linear-gradient(rgba(10,10,10,1), rgba(10,10,10,1)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.5) 0%, #76B900 35%, #76B900 100%) border-box",
                            border: `1px solid transparent`,
                            boxShadow: `0 0 40px rgba(118,185,0,0.1)`,
                            backdropFilter: "blur(20px)", borderRadius: 28, padding: "50px 36px"
                        }}>
                        {[
                            { icon: <UserIcon />, ph: "Full Name", type: "text" },
                            { icon: <MailIcon />, ph: "Email ID", type: "email" },
                            { icon: <PhoneIcon />, ph: "Phone Number", type: "tel" },
                            { icon: <BriefcaseIcon />, ph: "Designation", type: "text" },
                            { icon: <ExperienceIcon />, ph: "Experience", type: "text" },
                            { icon: <EducationIcon />, ph: "Education", type: "text" },
                        ].map(({ icon, ph, type }, idx) => (
                            <div key={idx} className="lp-form-field" style={{
                                background: "rgba(255,255,255,0.02)", borderRadius: 12,
                                padding: "12px 16px", marginBottom: 14,
                                display: "flex", alignItems: "center", gap: 14,
                                border: "1px solid rgba(255,255,255,0.03)"
                            }}>
                                <div className="lp-form-icon" style={{
                                    color: C.green, display: "flex", alignItems: "center", justifyContent: "center",
                                    background: "rgba(118,185,0,0.08)", padding: 8, borderRadius: 10,
                                    width: 36, height: 36
                                }}>{icon}</div>
                                <input
                                    className="lp-form-input"
                                    type={type}
                                    placeholder={ph}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        color: "#FFFFFF",
                                        fontSize: 16,
                                        width: "100%",
                                        fontFamily: "inherit",
                                        opacity: 0.75
                                    }}
                                />
                            </div>
                        ))}
                        <button type="submit" className="btn lp-form-btn" style={{
                            width: "100%",
                            background: "linear-gradient(90deg, #355300 0%, #76B900 100%)",
                            border: "none", borderRadius: 12, padding: "16px 24px", marginTop: 12,
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                            cursor: "pointer", transition: "all 0.2s ease"
                        }}>
                            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Claim Your Free Spot</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className="lp-section-center" style={{ padding: "90px 0px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                    <SectionLabel gradient>Learning Outcomes</SectionLabel>
                    <h2 className="lp-section-h2" style={{
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
                <div className="lp-learn-grid" style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", width: 1072 }}>
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
                        <div key={title} className="lp-learn-card" style={{
                            background: "linear-gradient(#0C0C0C, #0C0C0C) padding-box, linear-gradient(135deg, #76B900, #FFFFFF) border-box",
                            border: "1px solid transparent",
                            boxShadow: glow ? "0px 0px 40px rgba(118, 185, 0, 0.3)" : "none",
                            borderRadius: 16, padding: "32px 24px", width: 320, minHeight: 300,
                            display: "flex", flexDirection: "column", gap: 24
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <div style={{ width: 24, height: 24 }}>{icon}</div>
                                <span className="lp-learn-card-title" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, lineHeight: "29px", color: "#FFFFFF" }}>{title}</span>
                            </div>
                            <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "100%", color: "#C0C0C0", whiteSpace: "pre-line" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY ATTEND SECTION */}
            <section className="lp-section-center" style={{ padding: "90px 0px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "0 20px" }}>
                    <SectionLabel gradient>What You Gain</SectionLabel>
                    <h2 className="lp-section-h2" style={{
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

                <div className="lp-why-grid" style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", width: 1400, padding: "0 20px" }}>
                    {[
                        { icon: <RobotIcon />, text: "Use NAT to run AI agents" },
                        { icon: <ToolsIcon />, text: "Automate tasks using AI tools" },
                        { icon: <BrainIcon />, text: "Understand how agents think and act" },
                        { icon: <WorkflowIcon />, text: "Apply agent workflows in real scenarios" },
                    ].map((item, idx) => (
                        <div key={idx} className="lp-why-card" style={{
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
            <section className="lp-value-section lp-section-pad" style={{ padding: "90px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 42 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                    <SectionLabel gradient>Real-World Outcomes</SectionLabel>
                    <h2 className="lp-section-h2" style={{
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
                <div className="lp-value-grid lp-value-container" style={{
                    background: "rgba(118, 185, 0, 0.02)", border: `1px solid rgba(118, 185, 0, 0.3)`,
                    borderRadius: 24, padding: "32px", width: "100%", maxWidth: 1140,
                    display: "flex", gap: 12, flexWrap: "wrap"
                }}>
                    <div className="lp-value-col" style={{ flex: 1, minWidth: 280, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div className="lp-value-header" style={{ background: "rgba(12,12,12,0.8)", border: "1px solid rgba(118, 185, 0, 0.2)", borderRadius: 16, padding: "32px 24px" }}>
                            <div className="lp-value-header-title" style={{
                                fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24,
                                textTransform: "uppercase", marginBottom: 8,
                                backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                                WebkitBackgroundClip: "text", backgroundClip: "text",
                                WebkitTextFillColor: "transparent", color: "transparent"
                            }}>LIMITED SPOTS. HIGH IMPACT.</div>
                            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'Montserrat',sans-serif" }}>A practical, live workshop where you'll:</div>
                        </div>
                        <ValueRow n="01" text="See NAT in action" color={C.orange} />
                        <ValueRow n="02" text="Understand real workflows" color={C.purple} />
                        <ValueRow n="03" text="Learn how to use agents step-by-step" color={C.teal} />
                        <ValueRow n="04" text="Get direct guidance from the mentor" color={C.yellow} />
                    </div>
                    <div className="lp-value-col" style={{ flex: 1, minWidth: 280, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div className="lp-value-header" style={{ background: "rgba(12,12,12,0.8)", border: "1px solid rgba(118, 185, 0, 0.2)", borderRadius: 16, padding: "32px 24px" }}>
                            <div className="lp-value-header-title" style={{
                                fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24,
                                textTransform: "uppercase", marginBottom: 8,
                                backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                                WebkitBackgroundClip: "text", backgroundClip: "text",
                                WebkitTextFillColor: "transparent", color: "transparent"
                            }}>REAL SKILLS. REAL APPLICATIONS.</div>
                            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'Montserrat',sans-serif" }}>This is not theory. You'll learn:</div>
                        </div>
                        <ValueRow n="01" text="How to use agent-based systems" color={C.orange} />
                        <ValueRow n="02" text="Tool usage within AI workflows" color={C.purple} />
                        <ValueRow n="03" text="Task execution using AI agents" color={C.teal} />
                        <ValueRow n="04" text="Skills useful for AI, dev, and product roles" color={C.yellow} />
                    </div>
                </div>
            </section>

            {/* MEET MENTOR */}
            <section className="lp-mentor-section lp-section-pad" style={{ padding: "90px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 56 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <SectionLabel gradient>Learn From Industry Expert</SectionLabel>
                    <h2 className="lp-section-h2" style={{ fontWeight: 600, fontSize: 36, textAlign: "center", textTransform: "uppercase" }}>
                        MEET YOUR <span style={{
                            backgroundImage: "linear-gradient(90deg, #76B900 38.94%, #D7F0AB 77.4%)",
                            WebkitBackgroundClip: "text", backgroundClip: "text",
                            WebkitTextFillColor: "transparent", color: "transparent"
                        }}>MENTOR</span>
                    </h2>
                </div>
                <div className="lp-mentor-row" style={{ display: "flex", gap: 100, alignItems: "center", width: "100%", maxWidth: 1100, flexWrap: "wrap", justifyContent: "center" }}>
                    <div className="lp-mentor-text" style={{ flex: "0 1 480px", display: "flex", flexDirection: "column", gap: 12 }}>
                        <div className="lp-mentor-name" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 24, color: "#FFFFFF" }}>
                            Shashank Gupta
                        </div>
                        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                            Senior Data Scientist @ LSEG (London Stock Exchange Group)
                        </div>
                        <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(255,255,255,0.7)" }}>
                            Bringing real-world experience in AI systems, Shashank focuses on practical usage of AI to solve real problems and improve workflows.
                        </p>
                    </div>
                    <div className="lp-mentor-img" style={{ width: 440, height: 380, position: "relative" }}>
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
                                    width: "72%",
                                    bottom: "-10px", height: "auto"
                                }} />
                            </div>
                        </div>
                        {/* Non-clipped content (Text and Icon) */}
                        <div className="lp-mentor-img-overlay" style={{
                            position: "relative", zIndex: 2, width: "100%", height: "100%", padding: "0 40px 32px 40px",
                            display: "flex", justifyContent: "space-between", alignItems: "flex-end"
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <div className="lp-mentor-img-name" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: "#FFFFFF" }}>
                                    Shashank Gupta
                                </div>
                                <div className="lp-mentor-img-role" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                                    Senior Data Scientist @ LSEG
                                </div>
                            </div>
                            <div className="lp-mentor-linkedin" style={{ transform: "translateX(-45px)" }}>
                                <LinkedInIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* FAQs */}
            < section className="lp-faq-section" style={{ padding: "100px 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: 80 }
            }>
                <h2 className="lp-faq-h2" style={{ fontWeight: 400, fontSize: 44, textAlign: "center" }}>FAQs</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 840 }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-row lp-faq-item"
                            onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                            style={{
                                background: openFaq === i
                                    ? "linear-gradient(180deg,rgba(20,20,20,.6),rgba(20,20,20,.5))"
                                    : "rgba(255,255,255,.1)",
                                boxShadow: "0 1px 0 rgba(0,0,0,.05),0 4px 4px rgba(0,0,0,.05),0 10px 10px rgba(0,0,0,.1)",
                                backdropFilter: "blur(10px)", borderRadius: 16, padding: 30
                            }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span className="lp-faq-q" style={{ fontWeight: 500, fontSize: 18, color: "rgba(255,255,255,.9)" }}>{faq.q}</span>
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
                                <p className="lp-faq-a" style={{ color: "rgba(255,255,255,.6)", fontSize: 16, lineHeight: "26px", marginTop: 24 }}>{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section >

            {/* CTA */}
            <section className="lp-cta-section" style={{
                position: "relative",
                background: "linear-gradient(180deg, #000000 0%, rgba(118,185,0,0.2) 100%)",
                padding: "120px 120px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 32, overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `linear-gradient(rgba(118,185,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(118,185,0,0.03) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(circle at center, black, transparent 90%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black, transparent 90%)",
                    pointerEvents: "none"
                }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative", zIndex: 1 }}>
                    <div style={{
                        padding: "8px 24px", borderRadius: 40, background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(118,185,0,0.4)", color: "rgba(255,255,255,0.8)",
                        fontSize: 14, fontWeight: 500, backdropFilter: "blur(10px)"
                    }}>
                        Trusted by 12700+ Professionals
                    </div>
                    <h2 className="lp-cta-h2" style={{ fontWeight: 600, fontSize: 48, textAlign: "center", maxWidth: 900, lineHeight: "1.2", color: "#FFFFFF" }}>
                        Stop just using AI for answers start using it to get work done
                    </h2>
                    <p className="lp-cta-sub" style={{
                        fontWeight: 600, fontSize: 22, lineHeight: "32px", textAlign: "center", maxWidth: 858,
                        color: C.green
                    }}>
                        Learn how to use NVIDIA NAT to run AI agents that can handle tasks and deliver real outputs
                    </p>
                </div>
                <button className="btn lp-cta-btn" style={{
                    position: "relative", zIndex: 1,
                    background: "rgba(0,0,0,0.8)", border: `2px solid ${C.green}`,
                    borderRadius: 40, padding: "20px 48px",
                    color: C.green, fontWeight: 700, fontSize: 18,
                    cursor: "pointer", transition: "all 0.3s ease",
                    boxShadow: `0 0 20px rgba(118,185,0,0.1)`
                }}>
                    Claim Your Free Spot
                </button>
            </section>
        </div >
    );
}