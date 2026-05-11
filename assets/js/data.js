/* Single source of truth for your content.
   Update arrays below; the page will re-render automatically. */

window.SITE_DATA = {
    profile: {
        name: "David Gorgiev",
        links: [
            // Rendered as: email · github · linkedin · cv
            { label: "david [dot] gorgiev [at] epfl [dot] ch", url: "" },
            { label: "GitHub", url: "https://github.com/dgorgiev" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/dgorgiev/" }
            //{ label: "cv", url: "assets/YourName_CV.pdf" } // add the PDF file if you want
        ],
        about:
            "I'm a computer science student at EPFL. My interest and work spans signal processing, machine learning, embedded systems, and quantum computing."
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
                "Implement services of the on-board computer (Linux) of a 3U CubeSat launching in 2027 in collaboration with ESA.",
                "Design and implement telecommands scheduling and execution in C++ with F prime framework.",
                "Collaborate with other poles to coordinate work and communicate architecture decisions."
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
                "Improve qubit fidelity at runtime by introducing a graph algorithm that routes qubits based on most reliable path.",
                "Analyze and compare complexity and gains of algorithms. Simulate circuits using STIM, in C++ and Python."
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
                "Developed firmware in C++ for a dual-microcontroller architecture (Arduino Mega + ESP32-S3) with real-time motor control, sensor integration, and a custom inter-device communication protocol ensuring synchronized, reliable operation.",
                "Integrated and orchestrated heterogeneous hardware components (stepper motors, servo, IR sensors, dispensers, power systems), implementing calibration, and fault-tolerant control.",
                "Built a Java desktop app that slices any 3D model into LEGO pieces and generates a custom G-code to feed control instructions to the printer."
            ]
        },
        {
            title: "RNA Folding with Quantum ML | Hackathon at CERN",
            date: "Oct 2025",
            skills: ["Qiskit", "Python", "Quantum ML"],
            links: [
                { label: "link", url: "https://github.com/dgorgiev/rna-folding-genq2025" }
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
            links: [
                { label: "link", url: "https://github.com/dgorgiev/dkvs-storage" }
            ],
            bullets: [
                "Implemented a distributed key-value storage system in C, utilizing UDP for network communication.",
                "Implemented rapid parallel data queries and insertions across multiple servers, ensuring reliability through a majority voting consensus algorithm."
            ]
        },
        {
            title: "RISC-V Processor Design",
            date: "Oct 2024",
            skills: ["Verilog", "x86 Assembly", "Linux"],
            links: [
                { label: "link", url: "https://github.com/dgorgiev/risc-v-sim" }
            ],
            bullets: [
                "Implemented a RISC-V CPU using Verilog and assembly supporting instruction parsing, scheduling, execution, and interrupts.",
                "Written 100+ testbenches with SystemVerilog, assembly and GTKWave to debug and test edge cases."
            ]
        }
    ],

    technicalSkills: [
        { label: "Languages", items: ["Python", "C", "C++, Java, Scala, Verilog, Assembly, SQL"] },
        { label: "Libraries", items: ["PyTorch, Qiskit, QuTiP, NumPy, SciPy"] },
        { label: "Frameworks", items: ["F Prime"] },
        { label: "Tools", items: ["Git, Fusion 360, STIM, Wireshark"] },
        { label: "Platforms", items: ["Linux"] }
    ],

    footer: "© {year} David Gorgiev"
};
