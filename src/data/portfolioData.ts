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
    { category: "Governance, Risk & Compliance", items: ["Risk Assessments", "Security Policy Drafting", "Control Mapping", "Audit Evidence Support"] },
    { category: "Frameworks & Standards", items: ["NIST CSF", "ISO 27001", "PCI DSS", "HIPAA", "GDPR", "OWASP Top 10"] },
    { category: "Security Operations", items: ["Log Monitoring & Triage", "Incident Response", "Vulnerability Assessment", "Splunk & ELK", "Burp Suite & Nessus", "Wireshark", "Nmap & Suricata"] },
    { category: "Engineering & OT", items: ["Python & Bash", "PowerShell", "Linux", "YARA Rules", "ICS & SCADA", "Network Segmentation"] },
];

export const certifications = [
    "CISSP (Candidate)",
    "CompTIA Security+ (Candidate)",
    "Google Bits and Bytes of Computer Networking",
];

export const experiences = [
    {
        id: 1,
        role: "CMU Student Representative, ISPM",
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
        title: "Muster, AI Compliance Automation",
        category: "GRC Automation",
        period: "Sep 2026 to present",
        summary: "LLM workflows that collect SOC 2 and NIST CSF audit evidence, with guardrails and manager sign off.",
        description: "Automates SOC 2 and NIST CSF audit evidence collection and compliance reporting. LLM workflows map controls to owners, with prompt injection guardrails, output validation and a manager sign off step before anything is final.",
        tech: ["SOC 2", "NIST CSF", "LLM Workflows", "Prompt Injection Guardrails", "Python"],
        links: { github: "", demo: "" }
    },
    {
        id: 2,
        title: "EV Charging Product Security Assessment",
        category: "Product Security",
        period: "Oct 2026",
        summary: "An OCPP charge point stack tested against 13 ETSI EN 303 645 areas, with 6 gaps mapped to EN 18031.",
        description: "Threat modeled an OCPP charge point stack and tested 13 ETSI EN 303 645 provision areas. Documented 6 security gaps across authentication, TLS, firmware updates, exposed services, logging and input validation, each mapped to EN 18031 controls.",
        tech: ["ETSI EN 303 645", "EN 18031", "OCPP", "Threat Modeling", "IoT Security"],
        links: { github: "", demo: "" }
    },
    {
        id: 3,
        title: "ThreatLens",
        category: "Vulnerability Intelligence",
        period: "Feb 2026 to Aug 2026",
        summary: "Connects NVD CVEs to MITRE ATT&CK, NIST 800-53 controls and Sigma detections to rank what to fix first.",
        description: "Open source vulnerability intelligence platform that unifies 4 security sources through REST APIs and RAG. Correlates NVD CVEs with MITRE ATT&CK techniques, NIST 800-53 controls and Sigma detection logic in one analysis workflow.",
        tech: ["NVD", "MITRE ATT&CK", "NIST 800-53", "Sigma", "RAG", "REST APIs"],
        links: { github: "", demo: "" }
    },
    {
        id: 4,
        title: "U.S. Coast Guard, Secure AI Decision System",
        category: "AI Safety",
        period: "Sep 2026 to present",
        summary: "An offline AI workflow that grounds HAZMAT decisions in cited 49 CFR regulations.",
        description: "Offline AI workflow for HAZMAT decisions, grounded in 49 CFR. Combines evidence retrieval, direct regulatory citations and output validation so every recommendation is traceable to the rule behind it.",
        tech: ["49 CFR", "Offline AI", "Evidence Retrieval", "Output Validation"],
        links: { github: "", demo: "" }
    },
    {
        id: 5,
        title: "LLM Vulnerability Discovery & Triage",
        category: "Research, CyLab / SEI",
        period: "Sep 2026 to present",
        summary: "A two stage self hosted LLM pipeline, benchmarked against SAST on precision, recall and false positives.",
        description: "Research at CyLab and SEI. A two stage self hosted LLM pipeline that automates vulnerability discovery, independent adjudication and severity ranking, benchmarked against SAST baselines on precision, recall and false positive rate.",
        tech: ["Self Hosted LLMs", "SAST", "Vulnerability Triage", "Benchmarking"],
        links: { github: "", demo: "" }
    },
    {
        id: 6,
        title: "LLM Security Evaluation & Observability",
        category: "AI Governance",
        period: "Nov 2025 to Jan 2026",
        summary: "38 LLM traces analysed for injection and compromise; 3 vulnerable models kept out of production.",
        description: "Auditable AI pipeline using Llama 3 and Arize Phoenix for model observability and decision transparency, with a forensic flight recorder built on OpenTelemetry. Analysed 38 LLM traces for injection and compromise and kept 3 vulnerable models out of production.",
        tech: ["OpenTelemetry", "Arize Phoenix", "Llama 3", "LLM Security", "Python"],
        links: { github: "https://github.com/OffensiveSage/LLM-Observability-Audit", demo: "" }
    },
    {
        id: 7,
        title: "Agentic AI Security & Governance",
        category: "AI Governance",
        period: "Apr 2026",
        summary: "Practical security requirements for agentic AI: oversight, auditability, runtime controls and data protection.",
        description: "Defined governance requirements for agentic AI spanning human oversight, auditability, runtime controls, data protection and platform responsibility, turning emerging AI risks into practical security requirements.",
        tech: ["AI Governance", "Agentic AI", "Runtime Controls", "Auditability"],
        links: { github: "", demo: "" }
    },
    {
        id: 8,
        title: "SimplySecure",
        category: "Endpoint Compliance",
        period: "Personal project",
        summary: "A macOS app that checks permissions, encryption and updates, and runs AI voice phishing drills.",
        description: "macOS endpoint compliance and awareness tool built in SwiftUI. Checks app permissions, FileVault encryption, OS updates and browser security, uses Gemini and Perplexity APIs for privacy policy risk analysis, and runs AI voice phishing simulations for security awareness.",
        tech: ["SwiftUI", "macOS Security", "Gemini API", "AI Phishing Simulation"],
        links: { github: "https://github.com/OffensiveSage/SimplySecure", demo: "" }
    },
    {
        id: 9,
        title: "XRPL Guardrails",
        category: "Supply Chain Security",
        period: "Personal project",
        summary: "Preflight checks that block vulnerable dependencies before any XRP Ledger transaction runs.",
        description: "Engineered a TypeScript wrapper and preflight system for XRP Ledger transactions, enforcing dependency pinning, SHA-256 lockfile integrity checks, and npm audit policies to block critical vulnerabilities before sensitive blockchain actions execute.",
        tech: ["TypeScript", "XRP Ledger", "Supply Chain Security", "npm audit", "SHA-256"],
        links: { github: "https://github.com/OffensiveSage/xrpl-guardrails", demo: "" }
    },
    {
        id: 10,
        title: "Cyber Threat Intelligence: Energy Sector",
        category: "Threat Intelligence",
        period: "Aug 2025 to Sep 2025",
        summary: "OSINT-led threat analysis of a Fortune 500 energy company, mapped with MITRE ATT&CK.",
        description: "Threat analysis for a Fortune 500 critical infrastructure company: 6 Priority Intelligence Requirements, threat actors mapped with MITRE ATT&CK, OSINT across CVE/NVD and E-ISAC advisories for SCADA/OT exposure, and a fusion center design with 11 roles.",
        tech: ["OSINT", "MITRE ATT&CK", "SCADA/OT", "Threat Intelligence"],
        links: { github: "", demo: "" }
    },
    {
        id: 11,
        title: "Change Healthcare Ransomware Attack",
        category: "Incident Analysis",
        period: "Case study",
        summary: "Root-cause analysis of a $2.3B attack on 15B healthcare transactions, plus the zero-trust plan to prevent it.",
        description: "Analyzed the $2.3B ransomware attack affecting 15 billion healthcare transactions, identifying missing MFA as the root cause and developing a threat intelligence report with HIPAA-aligned zero-trust and incident response recommendations.",
        tech: ["Threat Intelligence", "HIPAA", "Zero-Trust", "Incident Response"],
        links: { github: "", demo: "" }
    },
    {
        id: 12,
        title: "AI Security Research",
        category: "LLM Security",
        period: "Research",
        summary: "An ML framework to detect, isolate and remediate prompt injection in LLMs.",
        description: "Developed a machine learning threat detection framework for real-time detection, isolation, and remediation of prompt injection vulnerabilities in LLMs, validating attack mitigation controls through adversarial testing and threat modeling.",
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
            { label: "Community", detail: "PPP Hacking Team, Carnegie AI Safety (CASI), BSides CTF contributor" },
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
