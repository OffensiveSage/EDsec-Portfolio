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
        description: "Joined Information Security as an intern and was kept on as a student worker. Built a Python and SQL NIS2 evidence repository mapping 150+ requirements to controls across 12 domains, including OT/ICS, cutting evidence collection for a Big 4-led audit from 2 weeks to 2 days. Assessed 300+ business processes and presented 40+ prioritized risks to security leadership, routed 25+ technology requests through SAP LeanIX security intake, coordinated secure decommissioning of 15+ applications, answered SIG and CAIQ security questionnaires, and integrated enterprise applications with Okta SSO over SAML and OIDC. Won the Best Intern Award (team of 6) for the AI Learning Twin, a RAG system over lab and clinical data.",
        tech: ["NIS2", "Python & SQL", "SAP LeanIX", "Okta SSO", "ServiceNow", "RAG"]
    },
    {
        id: 2,
        role: "AI Security Engineer",
        company: "U.S. Coast Guard",
        period: "08/2026 - Present",
        description: "Collaborated with the U.S. Coast Guard R&D Center through Hacking for Defense (H4D) to make sure a container inspector never acts on a wrong HAZMAT answer, deploying guardrails that check every sentence against 1,304 cited federal regulation paragraphs and refuse to guess, hitting 92% citation accuracy with zero uncited answers on inspectors' own devices.",
        tech: ["AI Guardrails", "Retrieval", "Evaluation Design", "49 CFR", "Swift", "JavaScript"]
    },
    {
        id: 3,
        role: "Graduate Teaching Assistant",
        company: "Carnegie Mellon University",
        period: "01/2026 - Present",
        description: "Teaching assistant for 95-844 Cyber Threat Intelligence and 95-799 Linux and Open Source at Heinz College. Earlier, supported a graduate product management course: hosted weekly office hours, graded and administered Canvas for 40+ students, and guided student projects.",
        tech: ["Threat Intelligence", "Linux", "Teaching", "Canvas LMS"]
    },
    {
        id: 4,
        role: "CMU Student Representative, ISPM",
        company: "Carnegie Mellon University",
        period: "01/2026 - Fall 2026",
        description: "Selected as Student Representative for the ISPM cohort at Heinz College. Gather feedback from students, help shape events and programming, and support connection within the cohort to enhance the student experience.",
        tech: ["Leadership", "Student Advocacy", "Event Planning", "Community Building"]
    },
    {
        id: 5,
        role: "IT Lab Assistant, Network Defense",
        company: "Carnegie Mellon University",
        period: "06/2026 - 08/2026",
        description: "Delivered 6 hands-on cloud security workshops for 50+ fellows in an AWS lab (VPC, IAM, CloudTrail) with segmented subnets, firewalls and Active Directory, and designed 7 exploit development challenges, from stack overflows and ROP chains to SUID escalation and ASLR, NX and canary bypasses, with a 95% full completion rate.",
        tech: ["AWS", "Network Defense", "Exploit Development", "Active Directory"]
    },
    {
        id: 6,
        role: "Founding Engineer",
        company: "Stealth Health Tech Startup",
        period: "01/2026 - 04/2026",
        description: "Sole engineer on an AWS-hosted health app in production. Implemented HIPAA security requirements for PHI, including authentication, authorization, least privilege, encryption at rest and audit logs, and gated every release with SAST, dependency and secrets scans.",
        tech: ["AWS", "HIPAA", "SAST", "Secrets Scanning", "Secure SDLC"]
    },
    {
        id: 7,
        role: "Project Management Officer",
        company: "CredXO",
        period: "06/2024 - 06/2025",
        description: "Coordinated engineering workflows for 12-15 member development team at blockchain-based fintech startup. Enforced security and operational policies including repository access controls and confidential data handling protocols. Supported Shark Tank INDIA pitch preparation.",
        tech: ["Project Management", "Security Policies", "Blockchain", "Fintech"]
    },
    {
        id: 8,
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
        title: "EV Charging Product Security Assessment",
        category: "Product Security",
        period: "Oct 2026",
        summary: "An OCPP charge point stack tested against 13 ETSI EN 303 645 areas, with 6 gaps mapped to EN 18031.",
        description: "Threat modeled an OCPP charge point stack and tested 13 ETSI EN 303 645 provision areas. Documented 6 security gaps across authentication, TLS, firmware updates, exposed services, logging and input validation, each mapped to EN 18031 controls.",
        tech: ["ETSI EN 303 645", "EN 18031", "OCPP", "Threat Modeling", "IoT Security"],
        links: { github: "", demo: "" }
    },
    {
        id: 2,
        title: "HazLook, U.S. Coast Guard HAZMAT Guardrails",
        category: "AI Safety",
        period: "Oct 2026 to present",
        summary: "Offline 49 CFR HAZMAT lookup where every answer is traceable to the exact regulation.",
        description: "Retrieval over 1,304 cited 49 CFR paragraphs plus a rule engine of 38 tested rules. A citation validator removes any sentence that does not trace to its source paragraph. Measured on 60 questions: 92% citation accuracy, 0% uncited answers, 10 of 10 out-of-scope questions declined. Runs fully offline as an iPhone app and a website.",
        tech: ["Retrieval", "Citation Validation", "Offline-First", "49 CFR", "Evaluation"],
        links: { github: "", demo: "" }
    },
    {
        id: 3,
        title: "MedTech Security Compliance Checker",
        category: "Cloud Compliance",
        period: "Oct 2026",
        summary: "A scheduled AWS Lambda that flags 5 classes of cloud misconfiguration and maps them to HIPAA safeguards.",
        description: "Serverless Python checker on AWS SAM that scans S3, security groups, IAM, RDS and CloudTrail for misconfigurations, maps every finding to a HIPAA safeguard, alerts through SNS, writes reports to S3 and keeps an audit trail in DynamoDB, with 8 tests using moto. Built with Claude Code (Opus 5.5).",
        tech: ["AWS Lambda", "Python", "HIPAA", "DynamoDB", "SNS"],
        links: { github: "", demo: "" }
    },
    {
        id: 4,
        title: "Muster, AI Compliance Automation",
        category: "GRC Automation",
        period: "Sep 2026 to present",
        summary: "LLM workflows that collect SOC 2 and NIST CSF audit evidence, with guardrails and manager sign off.",
        description: "Automates SOC 2 and NIST CSF audit evidence collection and compliance reporting. LLM workflows map controls to owners, with prompt injection guardrails, output validation and a manager sign off step before anything is final.",
        tech: ["SOC 2", "NIST CSF", "LLM Workflows", "Prompt Injection Guardrails", "Python"],
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
        title: "Security Pulse",
        category: "Security Awareness",
        period: "Aug 2026",
        summary: "One-minute daily security scenarios that replace annual training, with governance built in.",
        description: "Mobile-first security awareness platform with a Flutter app, a Next.js admin portal and a FastAPI API on PostgreSQL and Redis. Employees answer one role-aware scenario a day across 6 topics, including phishing and social engineering. Security teams publish content through a 4-stage approval workflow (Draft, In Review, Approved, Published) with 3 roles (analyst, approver, admin), audit events and privacy-safe aggregate analytics. OIDC sign-in and 4 CI pipelines. Built with Claude Code and OpenAI Codex, each reviewing the other's work.",
        tech: ["Flutter", "Next.js", "FastAPI", "PostgreSQL", "OIDC", "Security Awareness"],
        links: { github: "", demo: "" }
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
        title: "ThreatLens",
        category: "Vulnerability Intelligence",
        period: "Feb 2026 to Aug 2026",
        summary: "Connects NVD CVEs to MITRE ATT&CK, NIST 800-53 controls and Sigma detections to rank what to fix first.",
        description: "Open source vulnerability intelligence platform that unifies 4 security sources through REST APIs and RAG. Correlates NVD CVEs with MITRE ATT&CK techniques, NIST 800-53 controls and Sigma detection logic in one analysis workflow.",
        tech: ["NVD", "MITRE ATT&CK", "NIST 800-53", "Sigma", "RAG", "REST APIs"],
        links: { github: "", demo: "" }
    },
    {
        id: 9,
        title: "LLM Security Evaluation & Observability",
        category: "AI Governance",
        period: "Nov 2025 to Jan 2026",
        summary: "38 LLM traces analysed for injection and compromise; 3 vulnerable models kept out of production.",
        description: "Auditable AI pipeline using Llama 3 and Arize Phoenix for model observability and decision transparency, with a forensic flight recorder built on OpenTelemetry. Analysed 38 LLM traces for injection and compromise and kept 3 vulnerable models out of production.",
        tech: ["OpenTelemetry", "Arize Phoenix", "Llama 3", "LLM Security", "Python"],
        links: { github: "https://github.com/OffensiveSage/LLM-Observability-Audit", demo: "" }
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
        title: "SimplySecure",
        category: "Endpoint Compliance",
        period: "Personal project",
        summary: "A macOS app that checks permissions, encryption and updates, and runs AI voice phishing drills.",
        description: "macOS endpoint compliance and awareness tool built in SwiftUI. Checks app permissions, FileVault encryption, OS updates and browser security, uses Gemini and Perplexity APIs for privacy policy risk analysis, and runs AI voice phishing simulations for security awareness.",
        tech: ["SwiftUI", "macOS Security", "Gemini API", "AI Phishing Simulation"],
        links: { github: "https://github.com/OffensiveSage/SimplySecure", demo: "" }
    },
    {
        id: 12,
        title: "XRPL Guardrails",
        category: "Supply Chain Security",
        period: "Personal project",
        summary: "Preflight checks that block vulnerable dependencies before any XRP Ledger transaction runs.",
        description: "Engineered a TypeScript wrapper and preflight system for XRP Ledger transactions, enforcing dependency pinning, SHA-256 lockfile integrity checks, and npm audit policies to block critical vulnerabilities before sensitive blockchain actions execute.",
        tech: ["TypeScript", "XRP Ledger", "Supply Chain Security", "npm audit", "SHA-256"],
        links: { github: "https://github.com/OffensiveSage/xrpl-guardrails", demo: "" }
    },
    {
        id: 13,
        title: "Change Healthcare Ransomware Attack",
        category: "Incident Analysis",
        period: "Case study",
        summary: "Root-cause analysis of a $2.3B attack on 15B healthcare transactions, plus the zero-trust plan to prevent it.",
        description: "Analyzed the $2.3B ransomware attack affecting 15 billion healthcare transactions, identifying missing MFA as the root cause and developing a threat intelligence report with HIPAA-aligned zero-trust and incident response recommendations.",
        tech: ["Threat Intelligence", "HIPAA", "Zero-Trust", "Incident Response"],
        links: { github: "", demo: "" }
    },
    {
        id: 14,
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
