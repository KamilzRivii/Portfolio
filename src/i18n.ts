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
          dart: "A mobile application for dart players to keep track of scores and monitor progress during matches. The app supports multiple players, automatically updates points, and provides a clear history of score changes throughout the game."
        },   
        titles: {
          breathe: "Breathe - Mobile Meditation App",
          lofi: "LofiMusic - Chill Beats Player",
          b2b: "B2B - Sales Platform",
          dart: "DartApp - Score Tracker"
        },
        viewgithub: "View on GitHub",
        viewlive: "View Live Project",
        about1: "Hello! My name is Kamil and I am a front-end developer specializing in JavaScript. I develop my knowledge and skills through various types of projects and courses. My additional asset that helps me with programming is my extensive mathematical knowledge and my previous experience as a data analyst.",
        about2: "My professional experience includes work in the data processing, security, and analysis industry, where I gained experience in solving business problems and providing proposed solutions, working on many projects, and mastering English to the C1/C2 degree.",
        about3: "Currently, I work as a Front-End Developer. I am no longer a beginner but a mid-level specialist with 2.5 years of professional experience as a Front-End Developer and Manual Tester. I have programmed in jQuery, Vanilla JavaScript and ReactJS on the front end, successfully completing many programming tasks and contributing to various projects. This experience has allowed me to strengthen my technical expertise, collaborate effectively within teams, and deliver high-quality solutions in real-world business environments.",
        about4: "In addition to my professional work, I base my personal projects on React, with a particular focus on React Native. I plan to further develop my career in the direction of mobile development and the use of artificial intelligence. In my free time, I build mobile applications with React Native, which allows me to continuously expand my skills and explore innovative technologies.",
        aboutme: "About Me",
        INTERMEDIATE: "INTERMEDIATE",
        JUNIOR: "JUNIOR",
        intermediate: "Intermediate",
        junior: "Junior",
        total: "Total",
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
          dart: "Mobilna aplikacja dla graczy w darta do liczenia punktów i śledzenia przebiegu rozgrywek. Obsługuje wielu graczy, automatycznie aktualizuje wyniki i zapewnia przejrzystą historię zmian punktacji."
        },
        titles: {
          breathe: "Breathe - Aplikacja do Medytacji",
          lofi: "LofiMusic - Odtwarzacz Chill Beats",
          b2b: "B2B - Platforma Sprzedażowa",
          dart: "DartApp - Licznik Punktów"
        },
        viewgithub: "Zobacz na GitHub",
        viewlive: "Zobacz Projekt Online",
        about1: "Cześć! Nazywam się Kamil i jestem front-end developerem specjalizującym się w JavaScript. Rozwijam swoją wiedzę i umiejętności poprzez różnego rodzaju projekty i kursy. Moim dodatkowym atutem, który pomaga mi w programowaniu, jest rozległa wiedza matematyczna i wcześniejsze doświadczenie jako analityk danych.",
        about2: "Moje doświadczenie zawodowe obejmuje pracę w branży przetwarzania danych, bezpieczeństwa i analizy, gdzie zdobyłem doświadczenie w rozwiązywaniu problemów biznesowych i proponowaniu rozwiązań, pracując nad wieloma projektami oraz opanowując język angielski na poziomie C1/C2.",
        about3: "Obecnie pracuję jako Front-End Developer. Nie jestem już początkującym, lecz specjalistą na poziomie średniozaawansowanym z 2,5-letnim doświadczeniem zawodowym jako Front-End Developer i Tester Manualny. Programowałem w jQuery, Vanilla JavaScript oraz ReactJS na froncie, z powodzeniem realizując wiele zadań programistycznych i przyczyniając się do różnych projektów. To doświadczenie pozwoliło mi wzmocnić moją wiedzę techniczną, efektywnie współpracować w zespołach i dostarczać wysokiej jakości rozwiązania w rzeczywistych środowiskach biznesowych.",
        about4: "Oprócz mojej pracy zawodowej, moje projekty osobiste opieram na React, ze szczególnym naciskiem na React Native. Planuję dalej rozwijać swoją karierę w kierunku tworzenia aplikacji mobilnych i wykorzystania sztucznej inteligencji. W wolnym czasie buduję aplikacje mobilne za pomocą React Native, co pozwala mi nieustannie poszerzać moje umiejętności i eksplorować innowacyjne technologie.",
        aboutme: "O Mnie",
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
