const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact us",

    home_title:
      "A private architecture studio focused on residential and commercial design.",
    home_desc:
      "Founded in Tashkent, the studio works on residential and commercial projects with a focus on context, function, and clarity.",
    view_projects: "View all projects",

    our_team: "OUR TEAM",

    founder_architect: "Founder / Architect",
    architect_designer: "Architect / Designer",

    projects_title: "Projects of Public and Industrial Purpose",
    view_btn: "View",

    address_text: "Bukhara, Uzbekistan",
    back_btn: "Back",
  },

  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_projects: "Проекты",
    nav_contact: "Контакты",

    home_title:
      "Частная архитектурная студия, специализирующаяся на жилых и коммерческих проектах.",
    home_desc:
      "Основанная в Ташкенте, студия работает над жилыми и коммерческими проектами с упором на контекст, функциональность и ясность.",
    view_projects: "Посмотреть проекты",

    our_team: "НАША КОМАНДА",

    founder_architect: "Основатель / Архитектор",
    architect_designer: "Архитектор / Дизайнер",

    projects_title: "Проекты общественного и производственного назначения",
    view_btn: "Смотреть",

    address_text: "Бухара, Узбекистан",
    back_btn: "Назад",
  },

  uz: {
    nav_home: "Bosh sahifa",
    nav_about: "Biz haqimizda",
    nav_projects: "Loyihalar",
    nav_contact: "Aloqa",

    home_title:
      "Turar-joy va tijorat dizayniga ixtisoslashgan xususiy arxitektura studiyasi.",
    home_desc:
      "Toshkentda tashkil etilgan studiya kontekst, funksionallik va aniqlikka e’tibor qaratadi.",
    view_projects: "Barcha loyihalarni ko‘rish",

    our_team: "BIZNING JAMOA",

    founder_architect: "Asoschi / Arxitektor",
    architect_designer: "Arxitektor / Dizayner",

    projects_title: "Jamoat va ishlab chiqarish loyihalari",
    view_btn: "Ko‘rish",

    address_text: "Buxoro, O‘zbekiston",
    back_btn: "Ortga",
  },
};

const langSelect = document.querySelector(".lang");

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// Load saved language on page load
const savedLang = localStorage.getItem("lang") || "ru";
setLanguage(savedLang);

// Only add event listener if selector exists
if (langSelect) {
  langSelect.value = savedLang;
  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}
