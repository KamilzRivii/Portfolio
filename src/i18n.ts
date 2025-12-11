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
        frontend: "Frontend",
        ux: "UX",
        features: "Features",
        in_progress: "⭐ In Progress",
        view_github: "View on GitHub",
        view_live: "View Live Project",
        projects: {
          breathe: "A mobile application for meditation and mindfulness practices. Features guided breathing exercises, meditation timers, and progress tracking to help users improve their mental wellbeing.",
          lofi: "A mobile application for streaming and listening to lofi music. The app integrates with Spotify’s API to fetch tracks and playlists, offering users a smooth and relaxing listening experience. Features include audio playback, custom playlists, and a modern UI with animations.",
          b2b: "A comprehensive sales management system for B2B companies, providing tools for lead management, sales tracking, and customer relationship management. The focus was on building a robust frontend interface with clear data visualization and user-friendly workflows.",
          dart: "A mobile application for dart players to keep track of scores and monitor progress during matches. The app supports multiple players, automatically updates points, and provides a clear history of score changes throughout the game.",
          portfolioAga: "A modern, fully responsive portfolio website built with Next.js and TypeScript, showcasing data visualization expertise and Power BI development skills. Features dynamic project management with Firebase, comprehensive testing suite, and an intuitive user experience with custom circular navigation."
        },   
        titles: {
          breathe: "Breathe - Mobile Meditation App",
          lofi: "LofiMusic - Chill Beats Player",
          b2b: "B2B - Sales Platform",
          dart: "DartApp - Score Tracker",
          portfolioAga: "Portfolio Aga"
        },
        viewgithub: "View on GitHub",
        viewlive: "View Live Project",
        viewmobile: "View Live Mobile Project",
        about1: "Hello! My name is Kamil and I am a front-end developer specializing in JavaScript. I develop my knowledge and skills through various types of projects and courses. My additional asset that helps me with programming is my extensive mathematical knowledge and my previous experience as a data analyst.",
        about2: "I have been working as a Frontend Developer for the past 2.5 years in a sales company where I build and maintain web applications. Earlier in my career, I worked as a digital analyst in a data processing company, which gave me strong analytical skills. This combination of programming and analytical experience allows me to approach projects with both technical precision and a business-oriented mindset.",
        about3: "As a mid-level specialist with 2.5 years of professional experience in programming and testing I achieved many varius skills. I have programmed in jQuery, Vanilla JS and React, successfully completing many programming tasks and contributing to various projects. This experience has allowed me to strengthen my technical expertise, collaborate effectively within teams, and deliver high-quality code.",
        about4: "In addition to my professional work, I base my personal projects on React, with a particular focus on React Native. I plan to further develop my career in the direction of mobile development and the use of artificial intelligence. In my free time, I build mobile applications with React Native, which allows me to continuously expand my skills and explore innovative technologies.",
        aboutme: "About Me",
        INTERMEDIATE: "INTERMEDIATE",
        JUNIOR: "JUNIOR",
        intermediate: "Intermediate",
        junior: "Junior",
        total: "Total",
        whoami: "Who am I?",
        experience: "Experience",
        nowadays: "Nowadays",
        future: "Future",
        levels: "Levels",
        intouch: "GET IN TOUCH",
        contactinfo: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.",
        freelance: "Open to freelance projects and full-time opportunities",
        responsetime: "RESPONSE TIME",
        hours: "Usually within 24-48 hours",
        AVAILABILITY: "AVAILABILITY",
        contactlinks: {
          linkedindesc: "Connect with me professionally",
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
        frontend: "Frontend",
        ux: "UX",
        features: "Funkcje",
        in_progress: "⭐ W trakcie",
        view_github: "Zobacz na GitHub",
        view_live: "Zobacz projekt online",
        projects: {
          breathe: "Mobilna aplikacja do medytacji i praktyk uważności. Zawiera ćwiczenia oddechowe, timery medytacji oraz śledzenie postępów, aby wspierać dobrostan psychiczny użytkowników.",
          lofi: "Mobilna aplikacja do streamowania i słuchania muzyki lofi. Integruje się z API Spotify, aby pobierać utwory i playlisty, oferując użytkownikom relaksujące doświadczenie. Funkcje obejmują odtwarzanie audio, własne playlisty i nowoczesny interfejs z animacjami.",
          b2b: "Kompleksowy system zarządzania sprzedażą dla firm B2B, oferujący narzędzia do zarządzania leadami, śledzenia sprzedaży i relacji z klientami. Skupiono się na stworzeniu solidnego interfejsu frontendowego z czytelną wizualizacją danych i intuicyjnymi procesami.",
          dart: "Mobilna aplikacja dla graczy w darta do liczenia punktów i śledzenia przebiegu rozgrywek. Obsługuje wielu graczy, automatycznie aktualizuje wyniki i zapewnia przejrzystą historię zmian punktacji.",
          portfolioAga: "Nowoczesna, w pełni responsywna witryna internetowa z portfolio, zbudowana w oparciu o Next.js i TypeScript, prezentująca wiedzę z zakresu wizualizacji danych i rozwoju Power BI. Oferuje dynamiczne zarządzanie projektami z wykorzystaniem Firebase, kompleksowy zestaw testów oraz intuicyjny interfejs użytkownika z niestandardową, cykliczną nawigacją."
        },
        titles: {
          breathe: "Breathe - Aplikacja do Medytacji",
          lofi: "LofiMusic - Odtwarzacz Chill Beats",
          b2b: "B2B - Platforma Sprzedażowa",
          dart: "DartApp - Licznik Punktów",
          portfolioAga: "Portfolio Aga"
        },
        viewgithub: "Zobacz na GitHub",
        viewlive: "Zobacz Projekt Online",
        viewmobile: "Zobacz Projekt Online W Trybie Mobile",
        about1: "Cześć! Nazywam się Kamil i jestem front-end developerem specjalizującym się w JavaScript. Rozwijam swoją wiedzę i umiejętności poprzez różnego rodzaju projekty i kursy. Moim dodatkowym atutem, który pomaga mi w programowaniu, jest rozległa wiedza matematyczna i wcześniejsze doświadczenie jako analityk danych.",
        about2: "Od 2,5 roku pracuję jako Frontend Developer w firmie sprzedażowej, gdzie tworzę i utrzymuję aplikacje webowe. Wcześniej pracowałem jako analityk cyfrowy w firmie zajmującej się przetwarzaniem danych, co pozwoliło mi rozwinąć silne umiejętności analityczne. Te doświadczenia umożliwia mi realizację projektów z techniczną precyzją oraz biznesowym podejściem.",
        about3: "Jako mid-frontend developer z 2,5-letnim doświadczeniem zawodowym w programowaniu i testowaniu zdobyłem wiele umiejętności. Programowałem z wykorzystaniem jQuery, czystego JavaScriptu oraz React'a, z powodzeniem realizując liczne zadania i uczestnicząc w różnych projektach. To doświadczenie pozwala mi wzmocnić wiedzę techniczną, współpracować w zespołach oraz dostarczać wysokiej jakości kod.",
        about4: "Oprócz mojej pracy zawodowej, moje projekty osobiste opieram na React, ze szczególnym naciskiem na React Native. Planuję dalej rozwijać swoją karierę w kierunku tworzenia aplikacji mobilnych i wykorzystania sztucznej inteligencji. W wolnym czasie buduję aplikacje mobilne za pomocą React Native, co pozwala mi nieustannie poszerzać moje umiejętności i eksplorować innowacyjne technologie.",
        aboutme: "O Mnie",
        whoami: "Kim jestem?",
        experience: "Doświadczenie",
        future: "Przyszłość",
        nowadays: "Obecnie",
        INTERMEDIATE: "ŚREDNIOZAAWANSOWANY",
        JUNIOR: "POCZĄTKUJĄCY",
        intermediate: "Średniozaawansowany",
        junior: "Początkujący",
        total: "Razem",
        levels: "Poziomy",
        intouch: "SKONTAKTUJ SIĘ ZE MNĄ",
        contactinfo: "Zawsze jestem otwarty na omówienie nowych projektów, kreatywnych pomysłów lub możliwości bycia częścią Twojej wizji. Zapraszam do kontaktu poprzez dowolną z poniższych platform.",
        freelance: "Otwarty na projekty freelance oraz oferty pracy na pełen etat",
        responsetime: "CZAS ODPOWIEDZI",
        hours: "Zazwyczaj w ciągu 24-48 godzin",
        AVAILABILITY: "DOSTĘPNOŚĆ",
        contactlinks: {
          linkedindesc: "Połącz się ze mną przez LinkedIn",
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
