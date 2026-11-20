export const profile = {
    name: "Eshwar Desetty",
    title: "Security Strategy, GRC & AI Risk",
    photo: "/profile.jpg",
    // CSS object-position: keeps the face in frame when the photo is cropped
    photoFocus: "30% 42%",
    lead: "Security that makes sense. Risk, policy and controls, turned into decisions people actually follow.",
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
            a: "Security issues aren't always technical problems. Often they're communication problems. I work where risk, policy and engineering meet: assessing risk, mapping controls to frameworks, and making the case for the fix people will actually adopt.",
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
    { category: "Governance, Risk & Compliance", items: ["Risk Assessment", "Control Mapping", "Audit Evidence Automation", "Security Questionnaires (SIG, CAIQ)", "Policy Writing"] },
    { category: "Frameworks & Standards", items: ["SOC 2", "ISO 27001", "NIST CSF", "NIST 800-53", "NIS2", "HIPAA", "GDPR", "PCI DSS"] },
    { category: "Cloud, Identity & AI", items: ["AWS (IAM, Lambda, S3, CloudTrail)", "Okta SSO (SAML, OIDC)", "Claude Code", "OpenAI Codex", "RAG & LLM Guardrails"] },
    { category: "Security Operations", items: ["Incident Response", "Vulnerability Assessment", "Splunk & ELK", "Burp Suite & Nessus", "Nmap & Wireshark"] },
    { category: "Engineering & Tools", items: ["Python & SQL", "Bash & Linux", "GitHub Actions", "SAP LeanIX", "ServiceNow"] },
];

export const certifications = [
    "CISSP (Candidate)",
    "CompTIA Security+ (Candidate)",
    "Google Bits and Bytes of Computer Networking",
];

export const experiences = [
    {
        id: 1,
        role: "Information Security Intern → Student Worker",
        company: "Viatris",
        period: "05/2026 - Present",
        description: "Walked in as an intern, got asked to stay. Built the tool that turned a two week audit paper chase into two days, helped leadership see which risks actually mattered, and walked away with the Best Intern Award.",
        tech: ["NIS2", "Python & SQL", "SAP LeanIX", "Okta SSO", "ServiceNow", "RAG"]
    },
    {
        id: 2,
        role: "AI Security Engineer",
        company: "U.S. Coast Guard R&D Center",
        period: "08/2026 - Present",
        description: "Coast Guard inspectors check shipping containers for hazardous materials, where a wrong answer is dangerous. Built a tool that only answers when it can point to the exact federal rule, refuses to guess when it can't, and runs right on inspectors' own devices.",
        tech: ["AI Guardrails", "Retrieval", "Evaluation Design", "49 CFR", "Swift", "JavaScript"]
    },
    {
        id: 3,
        role: "Graduate Teaching Assistant",
        company: "Carnegie Mellon University",
        period: "01/2026 - Present",
        description: "Helps grad students find their way through Cyber Threat Intelligence and Linux at Heinz College. Before that, coached 40+ students through a product management course.",
        tech: ["Threat Intelligence", "Linux", "Teaching", "Canvas LMS"]
    },
    {
        id: 4,
        role: "CMU Student Representative, ISPM",
        company: "Carnegie Mellon University",
        period: "01/2026 - Fall 2026",
        description: "Speaks up for the ISPM class at Heinz: listens to what students actually want and helps turn it into events that bring everyone together.",
        tech: ["Leadership", "Student Advocacy", "Event Planning", "Community Building"]
    },
    {
        id: 5,
        role: "IT Lab Assistant, Network Defense",
        company: "Carnegie Mellon University",
        period: "06/2026 - 08/2026",
        description: "Spent the summer teaching 50+ fellows how to defend cloud systems, then built hacking puzzles so they could see how attackers think. 95% of them solved every single one.",
        tech: ["AWS", "Network Defense", "Exploit Development", "Active Directory"]
    },
    {
        id: 6,
        role: "Founding Engineer",
        company: "Stealth Health Tech Startup",
        period: "01/2026 - 04/2026",
        description: "The one and only engineer at a health startup with a live app. Made sure patient data stayed private from day one, and nothing went out the door without a security check.",
        tech: ["AWS", "HIPAA", "SAST", "Secrets Scanning", "Secure SDLC"]
    },
    {
        id: 7,
        role: "Project Management Officer",
        company: "Stealth Fintech Startup",
        period: "06/2024 - 06/2025",
        description: "Kept a 12 to 15 person tech team at a crypto payments startup moving in the same direction, set the ground rules for keeping company data safe, and helped get the team ready to pitch on Shark Tank India.",
        tech: ["Project Management", "Security Policies", "Blockchain", "Fintech"]
    },
    {
        id: 8,
        role: "Cybersecurity Analyst Intern",
        company: "HB Tech",
        period: "06/2023 - 08/2023",
        description: "Where it all started: a first taste of real security work, learning how attackers break in and how defenders catch them.",
        tech: ["SIEM", "Penetration Testing", "Nmap", "Wireshark", "Burp Suite"]
    }
];

export const articles = [
    {
        id: 1,
        title: "Breaking Things Legally: TryHackMe Advent of Cyber",
        description: "My journey through TryHackMe's Advent of Cyber challenge, exploring ethical hacking, penetration testing techniques, and hands-on cybersecurity learning.",
        date: "2024",
        platform: "Medium",
        tags: ["TryHackMe", "Ethical Hacking", "CTF", "Cybersecurity"],
        link: "https://medium.com/@eshwar.desetty03/breaking-things-legally-tryhackme-advent-of-cyber-77a093f73578"
    }
];

// The first `featuredCount` projects show by default; the rest sit behind "Show all".
export const featuredCount = 6;

export const projects = [
    {
        id: 1,
        title: "EV Charging Product Security Assessment",
        category: "Product Security",
        period: "Oct 2026",
        summary: "Played attacker against an electric car charger and found 6 ways it fell short of European security rules.",
        description: "Mapped out how someone could attack an EV charging station, then checked it against 13 areas of a European security standard for connected devices. Found 6 gaps, from weak logins and encryption to risky software updates and exposed services, and matched each one to the fix the rules expect.",
        tech: ["ETSI EN 303 645", "EN 18031", "OCPP", "Threat Modeling", "IoT Security"],
        links: { github: "", demo: "" }
    },
    {
        id: 2,
        title: "HazLook, U.S. Coast Guard HAZMAT Guardrails",
        category: "AI Safety",
        period: "Oct 2026 to present",
        summary: "A HAZMAT lookup for Coast Guard inspectors that shows its source for every answer and works with no internet.",
        description: "Inspectors ask a question and get an answer backed by the exact paragraph of federal law, out of 1,304 of them. Anything that can't be traced to a source gets cut. Tested on 60 questions: 92% of citations right, never an answer without a source, and all 10 off-topic questions politely turned down. Works fully offline as an iPhone app and a website.",
        tech: ["Retrieval", "Citation Validation", "Offline-First", "49 CFR", "Evaluation"],
        links: { github: "", demo: "" }
    },
    {
        id: 3,
        title: "MedTech Security Compliance Checker",
        category: "Cloud Compliance",
        period: "Oct 2026",
        summary: "A scheduled check that spots 5 kinds of risky cloud settings and says which health privacy rule each one breaks.",
        description: "Runs on its own in the cloud, looks across storage, networks, access and databases for settings that could leave data exposed, and ties every finding to a HIPAA safeguard. Sends an alert, saves a report and keeps a record of everything it found. Built with Claude Code (Opus 5.5).",
        tech: ["AWS Lambda", "Python", "HIPAA", "DynamoDB", "SNS"],
        links: { github: "", demo: "" }
    },
    {
        id: 4,
        title: "Muster, AI Compliance Automation",
        category: "GRC Automation",
        period: "Sep 2026 to present",
        summary: "Takes the grind out of compliance audits by collecting the proof automatically, with a manager signing off at the end.",
        description: "Audits usually mean chasing people for evidence. Muster gathers it for SOC 2 and NIST CSF on its own, works out who owns each control, has protections against being tricked by malicious instructions, and nothing is final until a manager approves it.",
        tech: ["SOC 2", "NIST CSF", "LLM Workflows", "Prompt Injection Guardrails", "Python"],
        links: { github: "", demo: "" }
    },
    {
        id: 5,
        title: "LLM Vulnerability Discovery & Triage",
        category: "Research, CyLab / SEI",
        period: "Sep 2026 to present",
        summary: "Research on whether AI can find security bugs in code better than traditional scanners.",
        description: "Research at CMU's CyLab and SEI. A two step AI pipeline hunts for security bugs, a second check confirms them, and each one gets ranked by how serious it is. Then it goes head to head with standard code scanners on accuracy and false alarms.",
        tech: ["Self Hosted LLMs", "SAST", "Vulnerability Triage", "Benchmarking"],
        links: { github: "", demo: "" }
    },
    {
        id: 6,
        title: "Security Pulse",
        category: "Security Awareness",
        period: "Aug 2026",
        summary: "Security training people might actually enjoy: a one minute scenario a day instead of a yearly slideshow.",
        description: "Every day, employees get one short scenario that fits their role, across 6 topics like phishing and social engineering. Security teams write and approve content through a 4 step review, and leaders see team trends without anyone's individual answers being exposed. A phone app for employees, a web portal for admins. Built with Claude Code and OpenAI Codex, each reviewing the other's work.",
        tech: ["Flutter", "Next.js", "FastAPI", "PostgreSQL", "OIDC", "Security Awareness"],
        links: { github: "", demo: "" }
    },
    {
        id: 7,
        title: "Agentic AI Security & Governance",
        category: "AI Governance",
        period: "Apr 2026",
        summary: "Rules of the road for AI that can take actions on its own.",
        description: "Practical security requirements for AI agents: when a human should step in, how to keep a record of what the AI did, how to keep it in check while it runs, and how to protect the data it touches.",
        tech: ["AI Governance", "Agentic AI", "Runtime Controls", "Auditability"],
        links: { github: "", demo: "" }
    },
    {
        id: 8,
        title: "ThreatLens",
        category: "Vulnerability Intelligence",
        period: "Feb 2026 to Aug 2026",
        summary: "Helps security teams decide which weaknesses to fix first by connecting the dots across 4 sources.",
        description: "Open source tool that puts known vulnerabilities, how attackers use them, which controls stop them and how to detect them all in one place, instead of four.",
        tech: ["NVD", "MITRE ATT&CK", "NIST 800-53", "Sigma", "RAG", "REST APIs"],
        links: { github: "", demo: "" }
    },
    {
        id: 9,
        title: "LLM Security Evaluation & Observability",
        category: "AI Governance",
        period: "Nov 2025 to Jan 2026",
        summary: "Reviewed 38 AI runs for signs of tampering and kept 3 unsafe models out of production.",
        description: "Built a flight recorder for AI, so every decision is logged and can be audited later. Used it to review 38 runs for signs of manipulation, which kept 3 vulnerable models from going live.",
        tech: ["OpenTelemetry", "Arize Phoenix", "Llama 3", "LLM Security", "Python"],
        links: { github: "https://github.com/OffensiveSage/LLM-Observability-Audit", demo: "" }
    },
    {
        id: 10,
        title: "Cyber Threat Intelligence: Energy Sector",
        category: "Threat Intelligence",
        period: "Aug 2025 to Sep 2025",
        summary: "Looked at a Fortune 500 energy company the way an attacker would, then designed the team to defend it.",
        description: "Used public information to map who might target the company and how, focused on the systems that keep the power grid running, and designed an 11 role threat intelligence team to keep watch.",
        tech: ["OSINT", "MITRE ATT&CK", "SCADA/OT", "Threat Intelligence"],
        links: { github: "", demo: "" }
    },
    {
        id: 11,
        title: "SimplySecure",
        category: "Endpoint Compliance",
        period: "Personal project",
        summary: "A Mac app that checks whether your laptop is locked down, and whether you'd fall for a phishing phone call.",
        description: "Checks app permissions, disk encryption, updates and browser safety, uses AI to flag risky privacy policies, and runs practice phishing calls with an AI voice so people learn to spot the real thing.",
        tech: ["SwiftUI", "macOS Security", "Gemini API", "AI Phishing Simulation"],
        links: { github: "https://github.com/OffensiveSage/SimplySecure", demo: "" }
    },
    {
        id: 12,
        title: "XRPL Guardrails",
        category: "Supply Chain Security",
        period: "Personal project",
        summary: "A safety check that stops risky code before any crypto transaction goes through.",
        description: "Before a transaction runs on the XRP Ledger, it confirms every software package is the expected, untouched version with no known critical vulnerabilities, and blocks the transaction if not.",
        tech: ["TypeScript", "XRP Ledger", "Supply Chain Security", "npm audit", "SHA-256"],
        links: { github: "https://github.com/OffensiveSage/xrpl-guardrails", demo: "" }
    },
    {
        id: 13,
        title: "Change Healthcare Ransomware Attack",
        category: "Incident Analysis",
        period: "Case study",
        summary: "How one missing login check led to a $2.3B attack on US healthcare, and how to stop it happening again.",
        description: "Traced the ransomware attack that hit 15 billion healthcare transactions back to a missing extra login step (MFA), then wrote a plan to prevent a repeat, built on zero trust and HIPAA.",
        tech: ["Threat Intelligence", "HIPAA", "Zero-Trust", "Incident Response"],
        links: { github: "", demo: "" }
    },
    {
        id: 14,
        title: "AI Security Research",
        category: "LLM Security",
        period: "Research",
        summary: "Teaching AI to notice when someone is trying to trick it.",
        description: "A machine learning system that spots prompt injection attacks on AI language models in real time, isolates them and cleans up after them, then tested by attacking it on purpose.",
        tech: ["Machine Learning", "LLM Security", "Threat Modeling", "Adversarial Testing"],
        links: { github: "", demo: "" }
    }
];

export const education = [
    {
        id: 1,
        school: "Carnegie Mellon University",
        college: "Heinz College",
        location: "Pittsburgh, PA",
        degree: "Master of Science in Information Security Policy & Management",
        period: "Aug 2025 to May 2027",
        // Shown in the "At CMU" grid on the featured card
        highlights: [
            { label: "Research", detail: "CyLab / SEI: self hosted LLM vulnerability discovery and triage" },
            { label: "Teaching", detail: "Graduate Assistant for Cyber Threat Intel and for Linux and Open Source" },
            { label: "Network Defense", detail: "IT Lab Assistant: 6 AWS workshops and 7 exploit challenges for 50+ fellows" },
            { label: "Leadership", detail: "Elected Student Representative for the ISPM cohort" },
            { label: "Community", detail: "Carnegie AI Safety (CASI), BSides CTF contributor" },
        ],
    },
    {
        id: 2,
        school: "Vellore Institute of Technology",
        college: "",
        location: "Bhopal, India",
        degree: "Bachelor in Computer Science and Engineering, Cybersecurity and Digital Forensics",
        period: "Aug 2021 to Aug 2025",
        highlights: [],
    }
];
