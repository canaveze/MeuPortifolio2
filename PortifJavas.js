document.addEventListener('DOMContentLoaded', function() {
    // Traduções
const translations = {
    'pt-BR': {
        'home': 'Início',
        'about': 'Sobre',
        'projects': 'Projetos',
        'volunteer': 'Voluntariados',
        'contact': 'Contato',
        'heroTitle': 'Olá, eu sou a <span>Beatriz Canaveze</span>',
        'heroSubtitle': 'Estudante de Engenharia de Computação',
        'heroText': 'Apaixonada por tecnologia, estou sempre em busca de aprender para inovar.',
        'cvButton': 'Baixar meu currículo',
        'aboutTitle': 'Sobre <span>Mim</span>',
        'aboutWho': 'Quem sou eu?',
        'aboutText1': 'Estudante de Engenharia de Computação e apaixonada por tecnologia. Gosto de criar soluções práticas que façam a diferença no dia a dia das pessoas. Tenho experiência com desenvolvimento web, Power Platform, Salesforce e projetos de inovação.',
        'aboutText2': 'Estou sempre em busca de aprender mais e aplicar meus conhecimentos de forma criativa e útil.',
        'skillsTitle': 'Minhas Habilidades',
        'projectsTitle': 'Meus <span>Projetos</span>',
        'volunteerTitle': 'Meus <span>Voluntariados</span>',
        'contactTitle': 'Vamos <span>Conversar</span>',
        'contactText': 'Estou sempre aberta a novas oportunidades e colaborações. Se você tem um projeto em mente ou quer bater um papo, me envie uma mensagem!',
        'formName': 'Nome',
        'formEmail': 'Email',
        'formMessage': 'Mensagem',
        'formButton': 'Enviar Mensagem',
        'timelineTitle': 'Histórico de Carreira',
        'project1Title': 'Iniciação Científica',
        'project1Desc': 'Projeto Rota2030 de inovação em segurança veicular em parceria com Stellantis.',
        'project2Title': 'Maratona de Programação',
        'project2Desc': 'Promovida pela Facens foi uma competição com resolução de problemas.',
        'project3Title': 'Xadrez',
        'project3Desc': 'Jogo de xadrez para treino de front-end.',
        'project4Title': 'Damas',
        'project4Desc': 'Jogo de damas para treinar programação em Python, pelo terminal.',
        'volunteer1Title': 'Projeto Pescar',
        'volunteer1Desc': 'Capacitação de jovens em vulnerabilidade para o mercado de trabalho.',
        'volunteer2Title': 'EcoGinc 2023',
        'volunteer2Desc': 'Engajamento comunitário e compromisso com o meio ambiente em escolas.',
        'volunteer3Title': 'Luvas Paralímpicas',
        'volunteer3Desc': 'Desenvolvimento de luvas adaptadas para os atletas paralímpicos.',
        'volunteer4Title': 'MUN',
        'volunteer4Desc': 'Simulação de Assembleia da ONU com uma temática e discuções.',
        'volunteer5Title': 'Associação Nova Geração',
        'volunteer5Desc': 'Auxiliar na cozinha e dando aulas de inglês para as crianças',
        'job1Title': 'Desenvolvedora Salesforce e Power Plataform',
        'job1Desc': 'Estágio | Chemyunion',
        'job2Title': 'Professora Autônoma',
        'job2Desc': 'Aulas particulares de inglês',
        'job3Title': 'Gestão de projetos e Marketing',
        'job3Desc': 'Estágio | Facens: Laboratório de Inovação Social',
        'job4Title': 'Professora de Inglês',
        'job4Desc': 'CLT | CNA Idiomas',
        'footerText': '&copy; <span id="year"></span> Beatriz Canaveze. Todos os direitos reservados.',
        'tagADAS': 'ADAS',
        'tagECU': 'ECU',
        'tagCANBus': 'CAN Bus',
        'tagHILSIL': 'HIL/SIL',
        'tagPython': 'Python',
        'tagBOCA': 'BOCA',
        'tagLinux': 'Linux',
        'tagHTML': 'HTML',
        'tagCSS': 'CSS',
        'tagJavascript': 'Javascript',
        'tagWave': 'Wave',
        'tagJson': 'Json',
        'project5Title': 'Conversor de Moeda',
        'project5Desc': 'Site para converter 5 tipos de moedas, com valores em tempo real',

        
        // Tags dos Voluntariados
        'tagMicrosoft': 'Microsoft',
        'tagRedesSociais': 'Redes Sociais',
        'tagDidatica': 'Didática',
        'tagGestao': 'Gestão',
        'tagTreinamento': 'Treinamento',
        'tagImpressao3D': 'Impressão 3D',
        'tagModelagem': 'Modelagem',
        'tagOrganizacao': 'Organização',
        'tagPolitica': 'Política',
        'tagEstudo': 'Estudo',
        'tagCozinha': 'Cozinha',
        'tagLimpeza': 'Limpeza',
        'tagIngles': 'Inglês',
        //formaçao academica
        'FormacaoAcademica': 'Formação Acadêmica',
        'facens': 'Centro Universitário Facens',
        'facensDesc': 'Engenharia da Computação | 2023 - 2027 | Noite', // ← CORRIGIDO
        'trailheadDesc': 'Estudos do Salesforce |'

        },
    'en': {
        'home': 'Home',
        'about': 'About',
        'projects': 'Projects',
        'volunteer': 'Volunteering',
        'contact': 'Contact',
        'heroTitle': 'Hello, I am <span>Beatriz Canaveze</span>',
        'heroSubtitle': 'Computer Engineering Student',
        'heroText': 'Passionate about technology, I am always looking to learn in order to innovate.',
        'cvButton': 'Download my resume',
        'aboutTitle': 'About <span>Me</span>',
        'aboutWho': 'Who am I?',
        'aboutText1': 'Computer Engineering student and technology enthusiast. I enjoy creating practical solutions that make a difference in people\'s daily lives. I have experience with web development, Power Platform, Salesforce and innovation projects.',
        'aboutText2': 'I\'m always looking to learn more and apply my knowledge in creative and useful ways.',
        'skillsTitle': 'My Skills',
        'projectsTitle': 'My <span>Projects</span>',
        'volunteerTitle': 'My <span>Volunteering</span>',
        'contactTitle': 'Let\'s <span>Talk</span>',
        'contactText': 'I\'m always open to new opportunities and collaborations. If you have a project in mind or just want to chat, send me a message!',
        'formName': 'Name',
        'formEmail': 'Email',
        'formMessage': 'Message',
        'formButton': 'Send Message',
        'timelineTitle': 'Career History',
        'project1Title': 'Scientific Research',
        'project1Desc': 'Rota2030 project for innovation in vehicle safety in partnership with Stellantis.',
        'project2Title': 'Programming Marathon',
        'project2Desc': 'Promoted by Facens, it was a problem-solving competition.',
        'project3Title': 'Chess',
        'project3Desc': 'Chess game for front-end training.',
        'project4Title': 'Checkers',
        'project4Desc': 'Checkers game to practice Python programming, via terminal.',
        'volunteer1Title': 'Pescar Project',
        'volunteer1Desc': 'Training of vulnerable youth for the job market.',
        'volunteer2Title': 'EcoGinc 2023',
        'volunteer2Desc': 'Community engagement and commitment to the environment in schools.',
        'volunteer3Title': 'Paralympic Gloves',
        'volunteer3Desc': 'Development of adapted gloves for Paralympic athletes.',
        'volunteer4Title': 'MUN',
        'volunteer4Desc': 'UN Assembly simulation with a theme and discussions.',
        'volunteer5Title': 'New Generation Association',
        'volunteer5Desc': 'Helping in the kitchen and teaching English to children',
        'job1Title': 'Salesforce and Power Platform Developer',
        'job1Desc': 'Internship | Chemyunion',
        'job2Title': 'Private Tutor',
        'job2Desc': 'Private English lessons',
        'job3Title': 'Project Management and Marketing',
        'job3Desc': 'Internship | Facens: Social Innovation Lab',
        'job4Title': 'English Teacher',
        'job4Desc': 'CLT | CNA Language School',
        'footerText': '&copy; <span id="year"></span> Beatriz Canaveze. All rights reserved.',
        'tagADAS': 'ADAS',
        'tagECU': 'ECU',
        'tagCANBus': 'CAN Bus',
        'tagHILSIL': 'HIL/SIL',
        'tagPython': 'Python',
        'tagBOCA': 'BOCA',
        'tagLinux': 'Linux',
        'tagHTML': 'HTML',
        'tagCSS': 'CSS',
        'tagJavascript': 'Javascript',
        'tagWave': 'Wave',
        'tagJson': 'Json',
        'tagMicrosoft': 'Microsoft',
        'tagRedesSociais': 'Social Media',
        'tagDidatica': 'Teaching',
        'tagGestao': 'Manager',
        'tagTreinamento': 'Training',
        'tagImpressao3D': '3D Printing',
        'tagModelagem': 'Modeling',
        'tagOrganizacao': 'Organization',
        'tagPolitica': 'Politics',
        'tagEstudo': 'Study',
        'tagCozinha': 'Kitchen',
        'tagLimpeza': 'Cleaning',
        'tagIngles': 'English',
        //formacao academica
        'FormacaoAcademica': 'Academic Education',
        'facens': 'Facens University Center',
        'facensDesc': 'Computer Engineering | 2023 - 2027 | Night',
        'trailheadDesc': 'Salesforce Studies |',

        'project5Title': 'Currency Converter',
        'project5Desc': 'Website to convert 5 types of currencies with real-time values',
    
        }
};

    // Adicionar identificadores únicos para cada tag
    function initializeTags() {
        // Para tags de projetos
        document.querySelectorAll('.project-tags .tag').forEach((tag, index) => {
            tag.setAttribute('data-tag-id', `project-tag-${index}`);
        });
        
        // Para tags de voluntariados
        document.querySelectorAll('.volunteer-tags .tag').forEach((tag, index) => {
            tag.setAttribute('data-tag-id', `volunteer-tag-${index}`);
        });
    }

    // Função para traduzir tags baseada em seus IDs
    function translateTags(lang) {
        const content = translations[lang];
        
        // Mapeamento dos IDs das tags para as chaves de tradução
        const tagMappings = {
            // Tags dos projetos
            'project-tag-0': 'tagADAS',
            'project-tag-1': 'tagECU',
            'project-tag-2': 'tagCANBus',
            'project-tag-3': 'tagHILSIL',
            'project-tag-4': 'tagPython',
            'project-tag-5': 'tagBOCA',
            'project-tag-6': 'tagLinux',
            'project-tag-7': 'tagHTML',
            'project-tag-8': 'tagCSS',
            'project-tag-9': 'tagJavascript',
            'project-tag-10': 'tagWave',
            'project-tag-11': 'tagJson',
            'project-tag-12': 'tagPython',
            'project-tag-13': 'tagWave',    
            'project-tag-14': 'tagJson',   
            
            // Tags dos voluntariados
            'volunteer-tag-0': 'tagMicrosoft',
            'volunteer-tag-1': 'tagRedesSociais',
            'volunteer-tag-2': 'tagDidatica',
            'volunteer-tag-3': 'tagDidatica',
            'volunteer-tag-4': 'tagGestao',
            'volunteer-tag-5': 'tagTreinamento',
            'volunteer-tag-6': 'tagImpressao3D',
            'volunteer-tag-7': 'tagModelagem',
            'volunteer-tag-8': 'tagGestao',
            'volunteer-tag-9': 'tagOrganizacao',
            'volunteer-tag-10': 'tagPolitica',
            'volunteer-tag-11': 'tagEstudo',
            'volunteer-tag-12': 'tagCozinha',
            'volunteer-tag-13': 'tagLimpeza',
            'volunteer-tag-14': 'tagIngles'
        };
        
        // Traduzir tags dos projetos
        document.querySelectorAll('.project-tags .tag').forEach(tag => {
            const tagId = tag.getAttribute('data-tag-id');
            if (tagId && tagMappings[tagId] && content[tagMappings[tagId]]) {
                tag.textContent = content[tagMappings[tagId]];
            }
        });
        
        // Traduzir tags dos voluntariados
        document.querySelectorAll('.volunteer-tags .tag').forEach(tag => {
            const tagId = tag.getAttribute('data-tag-id');
            if (tagId && tagMappings[tagId] && content[tagMappings[tagId]]) {
                tag.textContent = content[tagMappings[tagId]];
            }
        });
    }

    // Função COMPLETA para mudar o idioma
    function changeLanguage(lang) {
        // Atualizar botões de idioma
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            }
        });

        const content = translations[lang];

        const formacaoElement = document.querySelector('[data-translate="FormacaoAcademica"]');
        const facensElement = document.querySelector('[data-translate="facens"]');
        const facensDescElement = document.querySelector('[data-translate="facensDesc"]');
        const trailheadElement = document.querySelector('[data-translate="trailheadDesc"]');
        
        if (formacaoElement) formacaoElement.textContent = content['FormacaoAcademica'];
        if (facensElement) facensElement.textContent = content['facens'];
        if (facensDescElement) facensDescElement.textContent = content['facensDesc'];
        if (trailheadElement) trailheadElement.textContent = content['trailheadDesc'];

        
        // Navegação
        document.querySelector('nav ul li a[href="#home"]').textContent = content['home'];
        document.querySelector('nav ul li a[href="#about"]').textContent = content['about'];
        document.querySelector('nav ul li a[href="#projects"]').textContent = content['projects'];
        document.querySelector('nav ul li a[href="#volunteer"]').textContent = content['volunteer'];
        document.querySelector('nav ul li a[href="#contact"]').textContent = content['contact'];
        
        // Hero Section
        document.querySelector('.hero-content h1').innerHTML = content['heroTitle'];
        document.querySelector('.hero-content .typewriter').textContent = content['heroSubtitle'];
        document.querySelector('.hero-content p:not(.typewriter)').textContent = content['heroText'];
        document.querySelector('.hero-content .cta-button').textContent = content['heroButton'];
                                // Atualizar o botão de download do currículo
                const cvButton = document.querySelector('.cta-button');
                if (cvButton) {
                    cvButton.textContent = content['cvButton'];
                    
                    // Configurar o link de download correto baseado no idioma
                    const cvDownload = document.getElementById('cv-download');
                    if (cvDownload) {
                        if (lang === 'pt-BR') {
                            cvDownload.href = './download/cv_pt.pdf';
                            cvDownload.download = 'Curriculum_Beatriz_Canaveze.pdf';
                        } else {
                            cvDownload.href = './download/cv_en.pdf';
                            cvDownload.download = 'Curriculum_Beatriz_Canaveze.pdf';
                        }
                    }
                }
        
        // Sobre Mim
        document.querySelector('.about .section-title').innerHTML = content['aboutTitle'];
        document.querySelector('.about-text h3').textContent = content['aboutWho'];
        document.querySelectorAll('.about-text p')[0].textContent = content['aboutText1'];
        document.querySelectorAll('.about-text p')[1].textContent = content['aboutText2'];
        document.querySelector('[data-translate="skillsTitle"]').textContent = content['skillsTitle'];
        
        // Projetos
        document.querySelector('.projects .section-title').innerHTML = content['projectsTitle'];
        
        // Atualizar títulos e descrições dos projetos
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            const titleElement = card.querySelector('h3');
            const descElement = card.querySelector('p');
            
            if (titleElement && descElement) {
                titleElement.textContent = content[`project${index+1}Title`];
                descElement.textContent = content[`project${index+1}Desc`];
            }
        });
        
        // Voluntariados
        document.querySelector('.volunteer .section-title').innerHTML = content['volunteerTitle'];
        
        // Atualizar títulos e descrições dos voluntariados
        const volunteerCards = document.querySelectorAll('.volunteer-card');
        volunteerCards.forEach((card, index) => {
            const titleElement = card.querySelector('h3');
            const descElement = card.querySelector('p');
            
            if (titleElement && descElement) {
                titleElement.textContent = content[`volunteer${index+1}Title`];
                descElement.textContent = content[`volunteer${index+1}Desc`];
            }
        });
        
        // Contato
        document.querySelector('.contact .section-title').innerHTML = content['contactTitle'];
        document.querySelector('.contact p').textContent = content['contactText'];
        document.querySelector('.contact-form label[for="name"]').textContent = content['formName'];
        document.querySelector('.contact-form label[for="email"]').textContent = content['formEmail'];
        document.querySelector('.contact-form label[for="message"]').textContent = content['formMessage'];
        document.querySelector('.contact-form .submit-btn').textContent = content['formButton'];
        
        // Timeline
        document.querySelector('.timeline-header h3').textContent = content['timelineTitle'];
        
        // Atualizar histórico de carreira
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const titleElement = item.querySelector('h4');
            const descElement = item.querySelector('p');
            
            if (titleElement && descElement) {
                titleElement.textContent = content[`job${index+1}Title`];
                descElement.textContent = content[`job${index+1}Desc`];
            }
        });
        
        // Footer
        document.querySelector('.copyright').innerHTML = content['footerText'];
        
        // Traduzir as tags
        translateTags(lang);
    }

    // Inicializar
    initializeTags();
    changeLanguage('pt-BR');
    
    // Adicionar event listeners para os botões de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });


    // Event listeners para os botões de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Cursor Personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Atraso para o cursor seguidor
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Efeitos de hover no cursor
    document.querySelectorAll('a, button, .skill, .project-card, .volunteer-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
            cursorFollower.style.backgroundColor = 'rgba(237, 100, 100, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.backgroundColor = 'transparent';
        });
    });

    // Animação de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de revelação ao scroll
    const revealElements = document.querySelectorAll('.hero-content, .about-content, .projects-grid, .contact-form');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Configuração inicial para elementos reveláveis
    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Atualizar ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Efeito de máquina de escrever - Versão Corrigida
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent.trim();
        element.textContent = '';
        element.style.borderRight = '3px solid var(--primary)';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                element.style.borderRight = 'none';
            }
        }, 100);
    });

    // Efeito de flutuação aleatória para os skills
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        // Posição inicial aleatória
        skill.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        
        skill.addEventListener('mouseenter', () => {
            // Animação aleatória no hover
            const rotation = Math.random() * 20 - 10;
            const translation = Math.random() * 10 - 5;
            skill.style.transform = `rotate(${rotation}deg) translateY(${translation}px)`;
            skill.style.backgroundColor = 'var(--secondary)';
        });
        
        skill.addEventListener('mouseleave', () => {
            // Volta à posição inicial
            skill.style.transform = 'rotate(0deg) translateY(0)';
            skill.style.backgroundColor = 'var(--primary)';
        });
    });

    // Formulário de contato (simulação)
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {

        // Isso será substituído pelo envio real do FormSubmit
        alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
        contactForm.reset();
    });

    // Timeline de Empregos
    const jobsToggle = document.querySelector('.jobs-toggle');
    const jobsTimeline = document.querySelector('.jobs-timeline');
    const closeTimeline = document.querySelector('.close-timeline');

    if (jobsToggle && jobsTimeline) {
        jobsToggle.addEventListener('click', () => {
            jobsTimeline.classList.add('active');
            jobsToggle.classList.add('hidden'); // Esconde o botão
            document.body.style.overflow = 'hidden';
        });
        
        closeTimeline.addEventListener('click', () => {
            jobsTimeline.classList.remove('active');
            jobsToggle.classList.remove('hidden'); // Mostra o botão
            document.body.style.overflow = '';
        });
        
        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!jobsTimeline.contains(e.target) && e.target !== jobsToggle) {
                jobsTimeline.classList.remove('active');
                jobsToggle.classList.remove('hidden'); // Mostra o botão
                document.body.style.overflow = '';
            }
        });
    }
});