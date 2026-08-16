@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
    --blue: #1597ff;
    --blue-dark: #0877d1;
    --blue-light: #eaf6ff;

    --text: #16324f;
    --text-light: #66788a;

    --white: #ffffff;
    --background: #f8fbff;

    --border: #e7eef5;

    --shadow: 0 20px 50px rgba(39, 100, 150, 0.10);

    --radius: 24px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    background: var(--white);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: min(1150px, 92%);
    margin: auto;
}


/* ================= HEADER ================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.92);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(231, 238, 245, 0.8);
}

.nav {
    height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-circle {
    width: 46px;
    height: 46px;

    border-radius: 50%;

    background: var(--blue-light);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--blue);

    font-size: 20px;
}

.logo span,
.logo strong {
    display: block;
}

.logo span {
    font-size: 12px;
    color: var(--text-light);
}

.logo strong {
    font-size: 17px;
}

.menu {
    display: flex;
    gap: 32px;
}

.menu a {
    font-size: 14px;
    font-weight: 500;

    color: var(--text-light);

    transition: 0.25s ease;
}

.menu a:hover {
    color: var(--blue);
}

.nav-whatsapp {
    padding: 12px 18px;

    background: var(--blue);
    color: white;

    border-radius: 12px;

    font-size: 13px;
    font-weight: 600;

    display: flex;
    gap: 8px;
    align-items: center;

    transition: 0.25s ease;
}

.nav-whatsapp:hover {
    background: var(--blue-dark);
    transform: translateY(-2px);
}


/* ================= HERO ================= */

.hero {
    background:
        radial-gradient(
            circle at 15% 20%,
            rgba(21, 151, 255, 0.10),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #ffffff,
            #f6fbff
        );

    padding: 95px 0 90px;

    overflow: hidden;
}

.hero-content {
    display: grid;

    grid-template-columns:
        1.1fr
        0.9fr;

    gap: 70px;

    align-items: center;
}

.small-title {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    background: var(--blue-light);

    color: var(--blue);

    padding: 8px 13px;

    border-radius: 50px;

    font-size: 12px;

    font-weight: 700;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(42px, 5vw, 70px);

    line-height: 1.06;

    letter-spacing: -3px;

    max-width: 650px;
}

.hero h1 span {
    color: var(--blue);
}

.hero-text > p {
    max-width: 570px;

    margin-top: 24px;

    color: var(--text-light);

    font-size: 17px;
}

.hero-buttons {
    display: flex;

    flex-wrap: wrap;

    gap: 14px;

    margin-top: 32px;
}

.btn-primary,
.btn-secondary {
    padding: 15px 22px;

    border-radius: 13px;

    font-size: 14px;

    font-weight: 700;

    display: inline-flex;

    align-items: center;

    gap: 9px;
}

.btn-primary {
    background: var(--blue);

    color: white;

    box-shadow:
        0 12px 25px
        rgba(21, 151, 255, 0.23);
}

.btn-primary:hover {
    background: var(--blue-dark);
    transform: translateY(-2px);
}

.btn-secondary {
    border: 1px solid var(--border);
    background: white;
}

.btn-secondary:hover {
    border-color: var(--blue);
    color: var(--blue);
}

.hero-features {
    display: flex;

    flex-wrap: wrap;

    gap: 22px;

    margin-top: 35px;
}

.hero-features div {
    display: flex;

    align-items: center;

    gap: 7px;

    font-size: 12px;

    color: var(--text-light);
}

.hero-features i {
    color: var(--blue);
}


/* HERO CARD */

.hero-card {
    min-height: 440px;

    border-radius: 35px;

    background:
        linear-gradient(
            145deg,
            #dbf2ff,
            #f6fcff
        );

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

    overflow: hidden;

    box-shadow: var(--shadow);
}

.washing-machine {
    width: 210px;
    height: 210px;

    border-radius: 50%;

    background: white;

    display: flex;

    align-items: center;

    justify-content: center;

    box-shadow:
        0 25px 50px
        rgba(40, 126, 190, 0.14);

    color: var(--blue);

    font-size: 60px;

    animation: floating 4s ease-in-out infinite;
}

.hero-card-text {
    position: absolute;

    bottom: 40px;

    left: 40px;
}

.hero-card-text span {
    font-size: 13px;
    color: var(--text-light);
}

.hero-card-text h2 {
    font-size: 30px;
}

.hero-card-text p {
    font-size: 13px;
    color: var(--text-light);
}

.bubble {
    position: absolute;

    border-radius: 50%;

    border: 2px solid
        rgba(255, 255, 255, 0.9);
}

.bubble-1 {
    width: 55px;
    height: 55px;

    top: 60px;
    right: 60px;
}

.bubble-2 {
    width: 25px;
    height: 25px;

    top: 130px;
    right: 120px;
}

.bubble-3 {
    width: 80px;
    height: 80px;

    bottom: 60px;
    right: 40px;
}


/* ================= SECTIONS ================= */

.section {
    padding: 105px 0;
}

.section-header {
    text-align: center;

    max-width: 650px;

    margin: 0 auto 55px;
}

.section-header span,
.section-label {
    color: var(--blue);

    font-size: 12px;

    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: 1px;
}

.section-header h2,
.about-text h2 {
    font-size: clamp(32px, 4vw, 48px);

    line-height: 1.15;

    margin-top: 10px;

    letter-spacing: -1.5px;
}

.section-header p {
    color: var(--text-light);

    margin-top: 15px;

    font-size: 15px;
}


/* ================= SERVICES ================= */

.services {
    background: var(--background);
}

.services-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.service-card {
    background: white;

    padding: 30px;

    border-radius: var(--radius);

    border: 1px solid var(--border);

    transition: 0.3s ease;
}

.service-card:hover {
    transform: translateY(-7px);

    box-shadow: var(--shadow);

    border-color: transparent;
}

.service-icon {
    width: 54px;
    height: 54px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 16px;

    background: var(--blue-light);

    color: var(--blue);

    font-size: 21px;

    margin-bottom: 22px;
}

.service-card h3 {
    font-size: 18px;
}

.service-card p {
    margin-top: 10px;

    color: var(--text-light);

    font-size: 13px;
}


/* ================= ABOUT ================= */

.about-grid {
    display: grid;

    grid-template-columns:
        0.85fr
        1.15fr;

    gap: 80px;

    align-items: center;
}

.about-image {
    min-height: 470px;

    border-radius: 35px;

    background:
        linear-gradient(
            145deg,
            #eef9ff,
            #f8fcff
        );

    display: flex;

    justify-content: center;

    align-items: center;

    position: relative;

    overflow: hidden;
}

.about-circle {
    width: 240px;
    height: 240px;

    border-radius: 50%;

    background: white;

    display: flex;

    align-items: center;

    justify-content: center;

    color: var(--blue);

    font-size: 70px;

    box-shadow:
        0 30px 60px
        rgba(24, 116, 175, 0.13);
}

.about-bubble {
    position: absolute;

    border-radius: 50%;

    border: 2px solid
        rgba(21, 151, 255, 0.12);
}

.b1 {
    width: 70px;
    height: 70px;

    top: 45px;
    left: 45px;
}

.b2 {
    width: 34px;
    height: 34px;

    right: 50px;
    top: 90px;
}

.b3 {
    width: 90px;
    height: 90px;

    right: 50px;
    bottom: 45px;
}

.about-text h2 span {
    color: var(--blue);
}

.about-text > p {
    color: var(--text-light);

    margin-top: 20px;

    font-size: 15px;
}

.about-items {
    margin-top: 30px;

    display: flex;

    flex-direction: column;

    gap: 20px;
}

.about-items > div {
    display: flex;

    gap: 13px;
}

.about-items > div > i {
    color: var(--blue);

    margin-top: 4px;
}

.about-items strong {
    font-size: 14px;
}

.about-items p {
    font-size: 12px;

    color: var(--text-light);

    margin-top: 3px;
}


/* ================= CTA ================= */

.cta {
    padding: 55px 0;

    background:
        linear-gradient(
            135deg,
            #0788ef,
            #29a8ff
        );

    color: white;
}

.cta-content {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;
}

.cta-content span {
    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 1px;

    opacity: 0.85;
}

.cta h2 {
    font-size: clamp(30px, 4vw, 43px);

    margin-top: 4px;

    letter-spacing: -1px;
}

.cta p {
    margin-top: 4px;

    opacity: 0.9;
}

.btn-white {
    background: white;

    color: var(--blue);

    padding: 16px 22px;

    border-radius: 13px;

    font-size: 14px;

    font-weight: 800;

    display: inline-flex;

    gap: 9px;

    align-items: center;

    white-space: nowrap;
}

.btn-white:hover {
    transform: translateY(-2px);
}


/* ================= CONTACT ================= */

.contact {
    background: var(--background);
}

.contact-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.contact-card {
    background: white;

    border: 1px solid var(--border);

    border-radius: 24px;

    padding: 35px;

    text-align: center;
}

.contact-card > i {
    font-size: 28px;

    color: var(--blue);

    margin-bottom: 18px;
}

.contact-card h3 {
    font-size: 18px;
}

.contact-card p {
    font-size: 13px;

    color: var(--text-light);

    margin: 8px 0 15px;
}

.contact-card a {
    color: var(--blue);

    font-size: 13px;

    font-weight: 700;
}


/* ================= FOOTER ================= */

.footer {
    background: #102b45;

    color: white;

    padding-top: 45px;
}

.footer-content {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding-bottom: 35px;
}

.footer h3 {
    font-size: 18px;
}

.footer p {
    color: rgba(255,255,255,0.65);

    font-size: 13px;

    margin-top: 5px;
}

.footer-social a {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background: rgba(255,255,255,0.08);

    color: white;

    transition: 0.25s ease;
}

.footer-social a:hover {
    background: var(--blue);
}

.copyright {
    text-align: center;

    border-top: 1px solid
        rgba(255,255,255,0.08);

    padding: 20px;

    color: rgba(255,255,255,0.5);

    font-size: 11px;
}


/* ================= FLOATING WHATSAPP ================= */

.floating-whatsapp {
    width: 58px;
    height: 58px;

    position: fixed;

    right: 22px;
    bottom: 22px;

    z-index: 999;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #25d366;

    color: white;

    font-size: 27px;

    box-shadow:
        0 12px 30px
        rgba(37, 211, 102, 0.3);

    transition: 0.25s ease;
}

.floating-whatsapp:hover {
    transform: scale(1.08);
}


/* ================= ANIMATION ================= */

@keyframes floating {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

}


/* ================= RESPONSIVE ================= */

@media (max-width: 950px) {

    .menu {
        display: none;
    }

    .hero-content,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .hero-card {
        min-height: 370px;
    }

    .services-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .contact-grid {
        grid-template-columns:
            1fr;
    }

}

@media (max-width: 650px) {

    .nav {
        height: 70px;
    }

    .nav-whatsapp {
        padding: 10px 12px;

        font-size: 11px;
    }

    .hero {
        padding: 70px 0;
    }

    .hero h1 {
        font-size: 43px;

        letter-spacing: -2px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
        justify-content: center;
    }

    .hero-features {
        flex-direction: column;

        gap: 10px;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .about-image {
        min-height: 330px;
    }

    .about-circle {
        width: 180px;
        height: 180px;

        font-size: 50px;
    }

    .cta-content {
        flex-direction: column;

        align-items: flex-start;
    }

    .btn-white {
        width: 100%;

        justify-content: center;
    }

    .footer-content {
        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

}
