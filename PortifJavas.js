document.addEventListener('DOMContentLoaded', function() {
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
    // e.preventDefault(); ← REMOVA ISSO

    // Isso será substituído pelo envio real do FormSubmit
    // alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
    // contactForm.reset();
});

// Timeline de Empregos
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