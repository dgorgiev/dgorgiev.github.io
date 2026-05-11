(function () {
    "use strict";

    const data = window.SITE_DATA;
    if (!data) {
        console.error("SITE_DATA not found. Did assets/js/data.js load?");
        return;
    }

    function el(tag, attrs = {}, children = []) {
        const node = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) {
            if (k === "class") node.className = v;
            else if (k === "text") node.textContent = v;
            else if (v !== undefined && v !== null) node.setAttribute(k, String(v));
        }
        for (const child of children) {
            if (child === null || child === undefined) continue;
            node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
        }
        return node;
    }

    function safeUrl(url) {
        // allow http(s), mailto, tel, and relative paths
        try {
            if (url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) return url;
            const u = new URL(url, window.location.origin);
            const ok = ["http:", "https:", "mailto:", "tel:"].includes(u.protocol);
            return ok ? u.toString() : "#";
        } catch {
            return "#";
        }
    }

    function renderLinkbar(links) {
        const linkbar = document.getElementById("linkbar");
        const items = [];

        (links || []).forEach((l, i) => {
            if (i > 0) items.push(el("span", { class: "sep", text: "·" }));
            const url = l.url || "";
            items.push(
                url
                    ? el("a", {
                        href: safeUrl(url),
                        text: l.label,
                        target: url.startsWith("http") ? "_blank" : null,
                        rel: url.startsWith("http") ? "noopener noreferrer" : null
                    })
                    : el("span", { text: l.label })
            );
        });

        linkbar.replaceChildren(...items);
    }

    function renderBullets(bullets) {
        if (!Array.isArray(bullets) || bullets.length === 0) return null;
        return el("ul", { class: "entry-bullets" }, bullets.map((b) => el("li", { text: b })));
    }

    function renderText(text) {
        if (!text || typeof text !== "string") return null;
        return el("p", { class: "entry-text", text });
    }

    function renderEducationItem(item) {
        const header = el("div", { class: "entry-header" }, [
            el("p", { class: "entry-title", text: item.institution }),
            el("p", { class: "entry-date", text: item.date || "" })
        ]);

        const subtitle = el("p", { class: "entry-subtitle", text: item.degree || "" });
        const text = renderText(item.text);
        const bullets = renderBullets(item.bullets);

        return el("div", { class: "entry" }, [header, subtitle, text, bullets]);
    }

    function renderExperienceItem(item) {
        const header = el("div", { class: "entry-header" }, [
            el("p", { class: "entry-title", text: item.role }),
            el("p", { class: "entry-date", text: item.date || "" })
        ]);

        const subtitle = el("p", { class: "entry-subtitle", text: item.org || "" });
        const text = renderText(item.text);
        const bullets = renderBullets(item.bullets);

        return el("div", { class: "entry" }, [header, subtitle, text, bullets]);
    }

    function renderResearchItem(item) {
        const header = el("div", { class: "entry-header" }, [
            el("p", { class: "entry-title", text: item.role }),
            el("p", { class: "entry-date", text: item.date || "" })
        ]);

        const subtitle = el("p", { class: "entry-subtitle", text: item.org || "" });
        const text = renderText(item.text);
        const bullets = renderBullets(item.bullets);

        const links =
            Array.isArray(item.links) && item.links.length
                ? el(
                    "div",
                    { class: "project-links" },
                    item.links.map((lnk) =>
                        el("a", {
                            href: safeUrl(lnk.url),
                            text: lnk.label,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        })
                    )
                )
                : null;

        return el("div", { class: "entry" }, [header, subtitle, links, text, bullets]);
    }

    function renderProjectItem(p) {
        const titleEl =
            Array.isArray(p.links) && p.links.length
                ? el("a", {
                    href: safeUrl(p.links[0].url),
                    text: p.title,
                    target: "_blank",
                    rel: "noopener noreferrer"
                })
                : el("span", { text: p.title });

        const header = el("div", { class: "entry-header" }, [
            el("p", { class: "entry-title" }, [titleEl]),
            el("p", { class: "entry-date", text: p.date || "" })
        ]);

        // Skills highlight (as plain text line, like your sketch)
        const skillsLine =
            Array.isArray(p.skills) && p.skills.length
                ? el("p", { class: "project-skills", text: p.skills.join(", ") })
                : null;

        // If multiple links exist, show them simply on one line
        const links =
            Array.isArray(p.links) && p.links.length > 1
                ? el(
                    "div",
                    { class: "project-links" },
                    p.links.map((lnk) =>
                        el("a", {
                            href: safeUrl(lnk.url),
                            text: lnk.label,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        })
                    )
                )
                : null;

        const text = renderText(p.text);
        const bullets = renderBullets(p.bullets);

        return el("div", { class: "entry" }, [header, skillsLine, links, text, bullets]);
    }

    function renderSkills(rows) {
        const skillsList = document.getElementById("skillsList");
        const nodes = (rows || []).map((r) =>
            el("div", { class: "skill-row" }, [
                el("span", { class: "skill-label", text: `${r.label}: ` }),
                el("span", { text: (r.items || []).join(", ") })
            ])
        );
        skillsList.replaceChildren(...nodes);
    }

    // ----- Apply content -----
    document.title = `${data.profile.name}`;
    document.getElementById("name").textContent = data.profile.name;
    document.getElementById("about").textContent = data.profile.about;

    renderLinkbar(data.profile.links);


    const educationList = document.getElementById("educationList");
    educationList.replaceChildren(...(data.education || []).map(renderEducationItem));

    const experienceList = document.getElementById("experienceList");
    experienceList.replaceChildren(...(data.experience || []).map(renderExperienceItem));

    const researchList = document.getElementById("researchList");
    researchList.replaceChildren(...(data.research || []).map(renderResearchItem));

    const projectsList = document.getElementById("projectsList");
    projectsList.replaceChildren(...(data.projects || []).map(renderProjectItem));

    renderSkills(data.technicalSkills);

    const year = new Date().getFullYear();
    document.getElementById("footerText").textContent =
        (data.footer || "").replace("{year}", String(year));
})();
