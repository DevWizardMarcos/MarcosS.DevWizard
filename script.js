const aboutImg = document.getElementById('about-img');

const aboutImgHover = document.createElement('img');
aboutImgHover.src = 'img/img-transicao.jpg'; 
aboutImgHover.alt = 'Sobre mim hover';
aboutImgHover.className = 'about-img about-img-hover';
aboutImg.parentElement.appendChild(aboutImgHover);

let imagemFixa = false;

aboutImg.parentElement.addEventListener('mouseenter', () => {
  if (!imagemFixa) {
    aboutImgHover.classList.remove('fade-out');
    aboutImgHover.classList.add('fade-in');
  }
});

aboutImg.parentElement.addEventListener('mouseleave', () => {
  if (!imagemFixa) {
    aboutImgHover.classList.remove('fade-in');
    aboutImgHover.classList.add('fade-out');
  }
});

aboutImg.parentElement.addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeInImg' && !imagemFixa) {
    imagemFixa = true;
    aboutImgHover.classList.remove('fade-in');
    aboutImgHover.style.opacity = 1; 
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  navList.classList.add("active");
  closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navList.classList.remove("active");
  closeMenu.classList.remove("active");
});

const projetos = [
  {
    titulo: "DeadPool A Ultima Aventura",
    descricao:
      "Landing page temática, responsiva, feita com Bootstrap. Foco em design e experiência do usuário.",
    imagem: "img/deadpool.png",
    link: "https://devwizardmarcos.github.io/Deadpool-Ultima-Aventura-O-Fim-do-Jogo/",
  },
  {
    titulo: "Projeto H 🎃",
    descricao:
      "Site interativo de Halloween. Animações, áudio e efeitos em CSS/JS para engajamento.",
    imagem: "img/porjeto h.png",
    link: "https://devwizardmarcos.github.io/HalloweenInit/",
  },
  {
    titulo: "Cão e Gato",
    descricao:
      "Site institucional para clínica veterinária. Layout moderno, responsivo e profissional.",
    imagem: "img/Landing Page Completa Pet Shop.png",
    link: "https://devwizardmarcos.github.io/Amigo-Fiel/",
  },
  {
    titulo: "Projetos Python Mini Cursos",
    descricao:
      "Repositório com exemplos práticos de Python usados em treinamentos e workshops.",
    imagem: "img/projetos python.png",
    link: "https://github.com/DevWizardMarcos/Exemplos-de-Mini-Curso-Em-Python",
  },
  {
    titulo: "Projeto ReactSavory",
    descricao:
      "App React para cardápio digital. Login animado, cards de pratos e integração com API.",
    imagem: "img/ReactSavory.png",
    link: "https://github.com/DevWizardMarcos/ReactSavory-/tree/main",
  },
  
  {
    titulo: "Projetos Python",
    descricao:
      "Projetos autorais e de alunos em Python. Foco em automação, lógica e aplicações reais.",
    imagem: "img/new mage.png",
    link: "https://github.com/DevWizardMarcos/ListaProjetosMonitorMs",
  },
 
 
 
  // {
  //   titulo: "Projeto Cep",
  //   descricao:
  //     "Um projeto que consome uma API de CEP, onde o usuário pode buscar informações sobre um determinado CEP.",
  //   imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
  //   link: "",
  // },
  // {
  //   titulo: "Projeto Cep",
  //   descricao:
  //     "Um projeto que consome uma API de CEP, onde o usuário pode buscar informações sobre um determinado CEP.",
  //   imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
  //   link: "",
  // },






  // {
  //   titulo: "Projeto Cep",
  //   descricao:
  //     "Um projeto que consome uma API de CEP, onde o usuário pode buscar informações sobre um determinado CEP.",
  //   imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
  //   link: "",
  // }
];

const container = document.getElementById("galeiriaProjetos");
const track = container.querySelector(".carousel-track");

let cardsHTML = "";
projetos.forEach((projeto) => {
  cardsHTML += `
    <article class="project-card">
      <div class="project-image" style="background-image: url('${projeto.imagem}');"></div>
      <div class="project-info">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" class="project-link">Ver Detalhes</a>
      </div>
    </article>
  `;
});

track.innerHTML = cardsHTML + cardsHTML;
const linguagens = [
  { nome: "HTML", url: "https://cdn.simpleicons.org/html5/E34F26" },
  { nome: "CSS", url: "https://cdn.simpleicons.org/css3/1572B6" },
  { nome: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { nome: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { nome: "PHP", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Light.svg" },
  { nome: "MySQL", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Light.svg" },
  { nome: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { nome: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { nome: "Bootstrap", url: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { nome: "Sass", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sass.svg" },
  { nome: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { nome: "Linux", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Linux-Light.svg" },
  { nome: "Firebase", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Firebase-Light.svg" },
  { nome: "GitHub", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Light.svg" },
  { nome: "Flask", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Flask-Light.svg" },
  { nome: "Figma", url: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Figma-Light.svg" },
  { nome: "VSCode", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
];

const marketing = [
  "LinkedIn",
  "Estratégia",
  "SEO",
  "E-mail marketing",
  "Copywriting",
  "Análise de dados"
];
function renderCarousel(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => {
    if (typeof item === "string") {
      // Renderização de marketing
      return `
        <div class="project-card">
          <div class="project-info">
            <h3>${item}</h3>
          </div>
        </div>`;
    } else {
      return `
        <div class="project-card">
          <div class="project-info" style="text-align: center;">
            <img src="${item.url}" alt="${item.nome} logo" height="52" style="margin: 8px;" />
            <h3 style="font-size: 14px; margin-top: 8px;">${item.nome}</h3>
          </div>
        </div>`;
    }
  }).join('');
}
renderCarousel(linguagens, "carousel-linguagens");
renderCarousel(marketing, "carousel-marketing");


 const timelineItems = document.querySelectorAll('.timeline-item');
  const descBox = document.getElementById('desc-box');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      descBox.textContent = item.dataset.desc;
      timelineItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  if (timelineItems.length > 0) {
    timelineItems[0].click();
  }

    const cards = document.querySelectorAll('.course-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });

       VanillaTilt.init(document.querySelectorAll(".course-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
