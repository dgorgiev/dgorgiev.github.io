/* Single source of truth for your content.
   Update arrays below; the page will re-render automatically. */

window.SITE_DATA = {
    profile: {
        name: "David Gorgiev",
        links: [
            // Rendered as: email · github · linkedin · cv
            { label: "david.gorgiev@epfl.ch", url: "mailto:david.gorgiev@epfl.ch" },
            { label: "GitHub", url: "https://github.com/dgorgiev" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/dgorgiev/" }
            //{ label: "cv", url: "assets/YourName_CV.pdf" } // add the PDF file if you want
        ],
        about:
            "I'm a computer science student at EPFL. My interest and work spans computer architecture, quantum computing, signal processing and machine learning."
    },


    education: [
        {
            institution: "EPFL",
            degree: "BSc Computer Science",
            date: "2022 - 2026",
            text: "GPA: 5.12/6.00"
        }
        //{
        //    institution: "EPFL",
        //    degree: "MSc Electrical and Electronics Engineering",
        //    date: "2026 - 2028",
        //    text: "Specialization in Information Technologies and Signal Processing"
        //}
    ],

    experience: [
        {
            role: "Software Engineer",
            org: "EPFL Spacecraft Team",
            date: "Feb 2026 - Present",
            bullets: [
                "Implementing core services of the Flight Software: telecommand handling and scheduling, command execution, internal communication protocol; using C++ and NASA’s F Prime framework.",
                "Developing critical software robust against errors caused by radiations.",
                "Collaborating with ESA experts through Fly Your Satellite Design Booster program and passed all design reviews."
            ]
        }
    ],

    research: [
        {
            role: "Undergraduate Researcher",
            org: "Advanced Quantum Architecture Laboratory, EPFL",
            date: "Feb 2026 - Present",
            bullets: [
                "Mapping and scheduling quantum circuits on distributed cores with logical qubits encoded using surface code.",
                "Improve routing algorithm of qubits during execution.",
                "Simulation and benchmarking using STIM."
            ]
        }
    ],

    projects: [
        {
            title: "Automated 3D Printer",
            date: "Sep 2025 - Dec 2025",
            skills: ["C++", "Java", "JavaFX", "Fusion 360"],
            links: [
                { label: "link", url: "https://github.com/epfl-cs358/2025fa-mklego" }
            ],
            bullets: [
                "Built a Java desktop application that automatically slices any 3D models into LEGO structure and generates a custom gcode for instructions to the printer.",
                "Implemented C++  firmware stack that coordinates motor control, brick dispensing, and precise placement.",
                "Designed a dual-microcontroller architecture separating real-time motor control from high-level logic and sensing to ensure reliability and extensibility. "
            ]
        },
        {
            title: "RNA Folding with Quantum ML | Hackathon at CERN",
            date: "Oct 2025",
            skills: ["Qiskit", "Python", "Quantum ML"],
            links: [
                { label: "link", url: "https://github.com/your-username/rna-folding-genq2025" }
            ],
            bullets: [
                "Built a hybrid quantum-classical pipeline integrating quantum sampling running on IonQ quantum computer, using Python, Qiskit, and ViennaRNA.",
                "Analyzed thousands of quantum samples to extract and ranked the most energetically optimal RNA configurations."
            ]
        },
        {
            title: "Heart Disease Prediction & Skin Lesion Classification",
            date: "May 2025",
            skills: ["Python", "PyTorch", "NumPy"],
            links: [
                { label: "link", url: "https://github.com/AACioffi/IMLProj2025" }
            ],
            bullets: [
                "Implemented core ML algorithms – Logistic Regression, KNN, and K-Means Clustering – to predict heart disease levels using a real-world medical dataset (297 patients, 13 features).",
                "Designed and trained deep learning models (MLP and CNN) using PyTorch for image-based skin lesion classification using the DermaMNIST dataset (9,012 images across 7 categories).",
                "Achieved strong test accuracy through hyperparameter tuning and feature normalization. Optimized architectures and learning rates to improve diagnostic accuracy and F1-score."
            ]
        },
        {
            title: "Distributed Storage System",
            date: "Feb 2025 - May 2025",
            skills: ["C", "Network protocols"],
            bullets: [
                "Implemented a distributed key-value storage system in C, utilizing UDP for network communication.",
                "Implemented rapid parallel data queries and insertions across multiple servers, ensuring reliability through a majority voting consensus algorithm."
            ]
        },
        {
            title: "RISC-V Processor Design",
            date: "Oct 2024",
            skills: ["Verilog", "x86 Assembly", "Linux"],
            bullets: [
                "Implemented an x86 RISC-V processor in Verilog and assembly supporting instructions parsing, scheduling, execution and interrupts.",
                "Verified correctness using assembly tests, testbench, and waveform debugging."
            ]
        }
    ],

    technicalSkills: [
        { label: "Languages", items: ["Python", "C", "C++, Java, Scala, Verilog, Assembly"] },
        { label: "Libraries", items: ["PyTorch, Qiskit, QuTiP, NumPy, SciPy"] },
        { label: "Frameworks", items: ["F Prime"] },
        { label: "Tools", items: ["Git, Fusion 360, STIM, Wireshark"] },
        { label: "Platforms", items: ["Linux"] }
    ],

    footer: "© {year} David Gorgiev"
};
