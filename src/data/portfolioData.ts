export const profile = {
    name: "Eshwar Desetty",
    title: "Security Strategy, GRC & AI Risk",
    // Drop a photo in /public and set its path here, e.g. "/profile.jpg"
    photo: "",
    lead: "I make security make sense — turning risk, policy and controls into decisions that people actually use.",
    meta: [
        { label: "Location", value: "Pittsburgh, PA" },
        { label: "Focus", value: "GRC, Risk Management, AI Security" },
        { label: "Program", value: "MS Information Security Policy & Management, Carnegie Mellon" },
        { label: "Graduating", value: "May 2027" },
    ],
    links: {
        email: "mailto:eshwar.desetty03@gmail.com",
        linkedin: "https://linkedin.com/in/eshwar-desetty",
        github: "https://github.com/OffensiveSage",
        medium: "https://medium.com/@eshwar.desetty03",
    },
    about: [
        {
            q: "What do I focus on?",
            a: "Security issues aren't always technical problems — often they're communication problems. I work where risk, policy and engineering meet: assessing risk, mapping controls to frameworks, and making the case for the fix people will actually adopt.",
        },
        {
            q: "How do I think about it?",
            a: "Like an attacker and a defender at once. I've tested LLMs with malicious prompt injections, analysed real-world breaches down to their root cause, and built tooling that blocks risky changes before they ship.",
        },
        {
            q: "What am I looking for?",
            a: "Teams that treat security as a product: measurable, well-governed, and built with the people who use it. I'm always happy to talk shop.",
        },
    ],
};

export const skills = [
    { category: "Governance, Risk & Compliance", items: ["Risk Assessments", "Security Policy Drafting", "Control Mapping", "Audit Evidence Support"] },
    { category: "Frameworks & Standards", items: ["NIST CSF", "ISO 27001", "PCI DSS", "HIPAA", "GDPR", "OWASP Top 10"] },
    { category: "Security Operations", items: ["Log Monitoring & Triage", "Incident Response", "Vulnerability Assessment", "Splunk & ELK", "Burp Suite & Nessus", "Wireshark", "Nmap & Suricata"] },
    { category: "Engineering & OT", items: ["Python & Bash", "PowerShell", "Linux", "YARA Rules", "ICS & SCADA", "Network Segmentation"] },
];

export const certifications = [
    "CISSP (Candidate)",
    "CompTIA Security+ (Candidate)",
    "Google — Bits and Bytes of Computer Networking",
];

export const experiences = [
    {
        id: 1,
        role: "CMU Student Representative - ISPM",
        company: "Carnegie Mellon University",
        period: "01/2026 - Fall 2026",
        description: "Selected as Student Representative for the ISPM cohort at Heinz College. Gather feedback from students, help shape events and programming, and support connection within the cohort to enhance the student experience.",
        tech: ["Leadership", "Student Advocacy", "Event Planning", "Community Building"]
    },
    {
        id: 2,
        role: "Graduate Teaching Assistant",
        company: "Carnegie Mellon University",
        period: "01/2026 - Present",
        description: "Host weekly office hours and manage Canvas LMS including grading and course administration for 40+ graduate students. Provide technical guidance on product management projects and contribute to course improvement initiatives.",
        tech: ["Teaching", "Canvas LMS", "Product Management", "Course Administration"]
    },
    {
        id: 3,
        role: "Project Management Officer",
        company: "CredXO",
        period: "06/2024 - 06/2025",
        description: "Coordinated engineering workflows for 12-15 member development team at blockchain-based fintech startup. Enforced security and operational policies including repository access controls and confidential data handling protocols. Supported Shark Tank INDIA pitch preparation.",
        tech: ["Project Management", "Security Policies", "Blockchain", "Fintech"]
    },
    {
        id: 4,
        role: "Cybersecurity Analyst Intern",
        company: "Hacker Bro Technologies",
        period: "06/2023 - 08/2023",
        description: "Completed intensive training in incident response, vulnerability assessment and security event monitoring using SIEM platforms. Practiced penetration testing techniques including network reconnaissance with Nmap, packet analysis using Wireshark and web application security testing with Burp Suite.",
        tech: ["SIEM", "Penetration Testing", "Nmap", "Wireshark", "Burp Suite"]
    }
];

export const articles = [
    {
        id: 1,
        title: "Breaking Things Legally: TryHackMe Advent of Cyber",
        description: "My journey through TryHackMe's Advent of Cyber challenge - exploring ethical hacking, penetration testing techniques, and hands-on cybersecurity learning.",
        date: "2024",
        platform: "Medium",
        tags: ["TryHackMe", "Ethical Hacking", "CTF", "Cybersecurity"],
        link: "https://medium.com/@eshwar.desetty03/breaking-things-legally-tryhackme-advent-of-cyber-77a093f73578"
    }
];

export const projects = [
    {
        id: 1,
        title: "XRPL Guardrails",
        category: "Supply Chain Security",
        summary: "Preflight checks that block vulnerable dependencies before any XRP Ledger transaction runs.",
        description: "Engineered a TypeScript wrapper and preflight system for XRP Ledger transactions, enforcing dependency pinning, SHA-256 lockfile integrity checks, and npm audit policies to block critical vulnerabilities before sensitive blockchain actions execute.",
        tech: ["TypeScript", "XRP Ledger", "Supply Chain Security", "npm audit", "SHA-256"],
        links: { github: "https://github.com/OffensiveSage/xrpl-guardrails", demo: "" }
    },
    {
        id: 2,
        title: "Change Healthcare Ransomware Attack",
        category: "Threat Intelligence",
        summary: "Root-cause analysis of a $2.3B attack on 15B healthcare transactions — and the zero-trust plan to prevent it.",
        description: "Analyzed $2.3B ransomware attack affecting 15 billion healthcare transactions, identifying MFA absence as root cause and developing threat intelligence report with HIPAA-aligned zero-trust and incident response recommendations.",
        tech: ["Threat Intelligence", "HIPAA", "Zero-Trust", "Incident Response"],
        links: { github: "#", demo: "" }
    },
    {
        id: 3,
        title: "SimplySecure",
        category: "Product Security",
        summary: "A macOS app that monitors permissions, checks encryption and runs AI-powered phishing drills.",
        description: "Developed macOS security application using SwiftUI with real-time app permission monitoring, encryption status validation, vulnerability assessment via API for privacy policy risk analysis, and AI-powered phishing simulation for security awareness.",
        tech: ["SwiftUI", "macOS Security", "API Integration", "AI Phishing Simulation"],
        links: { github: "https://github.com/OffensiveSage/SimplySecure", demo: "#" }
    },
    {
        id: 4,
        title: "Cyber Threat Intelligence - Energy Sector",
        category: "Adversary Simulation",
        summary: "OSINT-led attack simulation against a Fortune 500 energy HQ, mapped across the Cyber Kill Chain.",
        description: "Simulated adversary behavior on HQ of a Fortune 500 energy company, conducted OSINT to identify vulnerabilities and phishing opportunities, documented threat actors, and reported findings from various stages of the Cyber Kill Chain with recommendations.",
        tech: ["OSINT", "Cyber Kill Chain", "Threat Intelligence", "Adversary Simulation"],
        links: { github: "#", demo: "" }
    },
    {
        id: 5,
        title: "AI Security Research",
        category: "AI Security",
        summary: "An ML framework to detect, isolate and remediate prompt injection in LLMs.",
        description: "Developed machine learning threat detection framework for real-time detection, isolation, and remediation of prompt injection vulnerabilities in LLMs, validating attack mitigation controls through adversarial testing and threat modeling.",
        tech: ["Machine Learning", "LLM Security", "Threat Modeling", "Adversarial Testing"],
        links: { github: "#", demo: "" }
    },
    {
        id: 6,
        title: "LLM Observability Audit",
        category: "AI Governance",
        summary: "An auditable AI pipeline with a forensic “flight recorder” for every model decision.",
        description: "Auditable AI pipeline using Llama 3 and Arize Phoenix for model observability, telemetry, and decision transparency. Implemented forensic 'flight recorder' using OpenTelemetry.",
        tech: ["Llama 3", "Arize Phoenix", "OpenTelemetry", "Python"],
        links: { github: "https://github.com/OffensiveSage/LLM-Observability-Audit", demo: "" }
    }
];

export const education = [
    {
        id: 1,
        degree: "Master of Science in Information Security Policy and Management",
        school: "Carnegie Mellon University",
        period: "Expected 05/2027",
        description: "Advanced studies in Information Security Policy and Management at Pittsburgh, PA.",
        achievements: ["Information Security Focus", "Policy & Management"]
    },
    {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        school: "Vellore Institute of Technology",
        period: "08/2021 - 08/2025",
        description: "Specialization in Cybersecurity and Digital Forensics at Bhopal, Madhya Pradesh, India.",
        achievements: ["Cybersecurity Specialization", "Digital Forensics Focus"]
    }
];
