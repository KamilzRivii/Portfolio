import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About Me",
        skills: "Skills",
        contact: "Contact",
        specialization: "Specialization",
        location: "Location",
        work_together: "Let's work together!",
        hello: "Hello!",
        name: "I'm Kamil Przybyła",
        my_works: "My Works",
        download: "Download CV",
        check_projects: "Portfolio",
        frontend: "Frontend Development",
        testing: "Testing & QA",
        cicd: "CI/CD & Workflow",
        data: "Data & Monitoring",
        mobile: "Mobile Development",
        languages: "Languages",
        ux: "UX",
        features: "Features",
        in_progress: "⭐ In Progress",
        projects: {
          breathe: "A mobile application for meditation and mindfulness practices. Features guided breathing exercises, meditation timers, and progress tracking to help users improve their mental wellbeing.",
          lofi: "A mobile application for streaming and listening to lofi music. The app integrates with Spotify’s API to fetch tracks and playlists, offering users a smooth and relaxing listening experience. Features include audio playback, custom playlists, and a modern UI with animations.",
          dailyFocus: "A habit tracker mobile application designed to help users build and maintain daily habits. The app features local data persistence, daily reset logic, one-time reminders, and a minimalistic user interface to ensure a seamless user experience.",
          b2b: "A comprehensive sales management system for B2B companies, providing tools for lead management, sales tracking, and customer relationship management. The focus was on building a robust frontend interface with clear data visualization and user-friendly workflows.",
          portfolioAga: "A modern, fully responsive portfolio website built with Next.js and TypeScript, showcasing data visualization expertise and Power BI development skills. Features dynamic project management with Firebase, comprehensive testing suite, and an intuitive user experience with custom circular navigation."
        },   
        titles: {
          breathe: "Breathe - Mobile Meditation App",
          lofi: "LofiMusic - Chill Beats Player",
          dailyFocus: "DailyFocus - Habit Tracker App",
          b2b: "B2B - Sales Platform",
          portfolioAga: "Portfolio Aga"
        },
        viewgithub: "View on GitHub",
        viewlive: "View Live Project",
        viewmobile: "View Live Mobile Project",
        about1: "QA Automation Engineer with 3.5+ years of professional experience in software quality and front-end development. I build and maintain end-to-end test suites in Playwright + TypeScript, run them in Jenkins CI pipelines, and combine automation with thorough manual, exploratory and API testing.",
        about2: "My developer background in React, JavaScript and TypeScript lets me read the code I test, write maintainable test frameworks and communicate with developers in their own language. I contribute to code reviews and understand the full software delivery cycle from both sides.",
        about3: "A background in mathematics and data analysis helps me find edge cases, analyse test results and build reports from data using MongoDB and Grafana. I bring structured thinking to test coverage and quality metrics that go beyond surface-level validation.",
        about4: "I work in Agile/Scrum teams, actively use AI tools in daily QA and development work, and speak fluent English (B2). I thrive in remote, collaborative environments built on trust, ownership and clear communication.",
        aboutme: "About Me",
        INTERMEDIATE: "INTERMEDIATE",
        JUNIOR: "JUNIOR",
        intermediate: "Intermediate",
        junior: "Junior",
        total: "Total",
        categories: "Categories",
        whoami: "Who am I?",
        experience: "Tech Stack",
        nowadays: "Data & Analysis",
        future: "How I Work",
        intouch: "GET IN TOUCH",
        contactinfo: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.",
        freelance: "Open to freelance projects and full-time opportunities",
        responsetime: "RESPONSE TIME",
        hours: "Usually within 24-48 hours",
        AVAILABILITY: "AVAILABILITY",
        contactlinks: {
          gmaildesc: "Send me an email"
        }
      }
    },
    pl: {
      translation: {
        home: "Start",
        portfolio: "Portfolio",
        about: "O mnie",
        skills: "Umiejętności",
        contact: "Kontakt",
        specialization: "Specjalizacja",
        location: "Lokalizacja",
        work_together: "Pracujmy razem!",
        hello: "Cześć!",
        name: "Jestem Kamil Przybyła",
        my_works: "Moje Prace",
        download: "Pobierz CV",
        check_projects: "Portfolio",
        frontend: "Frontend Development",
        testing: "Testowanie & QA",
        cicd: "CI/CD & Workflow",
        data: "Dane & Monitoring",
        mobile: "Mobile Development",
        languages: "Języki",
        ux: "UX",
        features: "Funkcje",
        in_progress: "⭐ W trakcie",
        projects: {
          breathe: "Mobilna aplikacja do medytacji i praktyk uważności. Zawiera ćwiczenia oddechowe, timery medytacji oraz śledzenie postępów, aby wspierać dobrostan psychiczny użytkowników.",
          lofi: "Mobilna aplikacja do streamowania i słuchania muzyki lofi. Integruje się z API Spotify, aby pobierać utwory i playlisty, oferując użytkownikom relaksujące doświadczenie. Funkcje obejmują odtwarzanie audio, własne playlisty i nowoczesny interfejs z animacjami.",
          dailyFocus: "Aplikacja mobilna do śledzenia nawyków, zaprojektowana, aby pomóc użytkownikom budować i utrzymywać codzienne nawyki. Aplikacja oferuje lokalne przechowywanie danych, logikę codziennego resetu, jednorazowe przypomnienia oraz minimalistyczny interfejs użytkownika dla płynnego doświadczenia.",
          b2b: "Kompleksowy system zarządzania sprzedażą dla firm B2B, oferujący narzędzia do zarządzania leadami, śledzenia sprzedaży i relacji z klientami. Skupiono się na stworzeniu solidnego interfejsu frontendowego z czytelną wizualizacją danych i intuicyjnymi procesami.",
          portfolioAga: "Nowoczesna, w pełni responsywna witryna internetowa z portfolio, zbudowana w oparciu o Next.js i TypeScript, prezentująca wiedzę z zakresu wizualizacji danych i rozwoju Power BI. Oferuje dynamiczne zarządzanie projektami z wykorzystaniem Firebase, kompleksowy zestaw testów oraz intuicyjny interfejs użytkownika z niestandardową, cykliczną nawigacją."
        },
        titles: {
          breathe: "Breathe - Aplikacja do Medytacji",
          lofi: "LofiMusic - Odtwarzacz Chill Beats",
          dailyFocus: "DailyFocus - Aplikacja do Śledzenia Nawyków",
          b2b: "B2B - Platforma Sprzedażowa",
          portfolioAga: "Portfolio Aga"
        },
        viewgithub: "Zobacz na GitHub",
        viewlive: "Zobacz Projekt Online",
        viewmobile: "Zobacz Projekt Online W Trybie Mobile",
        about1: "QA Automation Engineer z ponad 3,5-letnim doświadczeniem zawodowym w zapewnianiu jakości oprogramowania i front-end developmencie. Tworzę i utrzymuję kompleksowe zestawy testów E2E w Playwright + TypeScript, uruchamiam je w pipeline'ach Jenkins CI i łączę automatyzację z rzetelnym testowaniem manualnym, eksploracyjnym i API.",
        about2: "Moje doświadczenie developerskie w React, JavaScript i TypeScript pozwala mi czytać testowany kod, pisać utrzymywalne frameworki testowe i rozmawiać z developerami ich własnym językiem. Uczestniczę w code review i rozumiem pełny cykl dostarczania oprogramowania z obu perspektyw.",
        about3: "Wykształcenie matematyczne i doświadczenie w analizie danych pomagają mi znajdować przypadki brzegowe, analizować wyniki testów i budować raporty z danych przy użyciu MongoDB i Grafany. Wnoszę strukturalne myślenie do pokrycia testowego i metryk jakości wykraczających poza powierzchowną walidację.",
        about4: "Pracuję w zespołach Agile/Scrum, aktywnie wykorzystuję narzędzia AI w codziennej pracy QA i developerskiej, biegle posługuję się językiem angielskim (B2). Sprawdzam się w zdalnych, opartych na współpracy środowiskach zbudowanych na zaufaniu, odpowiedzialności i klarownej komunikacji.",
        aboutme: "O Mnie",
        whoami: "Kim jestem?",
        experience: "Stack Technologiczny",
        future: "Jak pracuję",
        nowadays: "Dane i Analiza",
        INTERMEDIATE: "ŚREDNIOZAAWANSOWANY",
        JUNIOR: "POCZĄTKUJĄCY",
        intermediate: "Średniozaawansowany",
        junior: "Początkujący",
        total: "Razem",
        categories: "Kategorie",
        intouch: "SKONTAKTUJ SIĘ ZE MNĄ",
        contactinfo: "Zawsze jestem otwarty na omówienie nowych projektów, kreatywnych pomysłów lub możliwości bycia częścią Twojej wizji. Zapraszam do kontaktu poprzez dowolną z poniższych platform.",
        freelance: "Otwarty na projekty freelance oraz oferty pracy na pełen etat",
        responsetime: "CZAS ODPOWIEDZI",
        hours: "Zazwyczaj w ciągu 24-48 godzin",
        AVAILABILITY: "DOSTĘPNOŚĆ",
        contactlinks: {
          gmaildesc: "Wyślij mi e-mail"
        }
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
