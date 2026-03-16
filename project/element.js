
// ==============================
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    // ---- Counters ----
    const counters = document.querySelectorAll(".stat-number");

    const startCounter = (counter, delay = 0) => {
        const target = +counter.getAttribute("data-target");
        const prefix = counter.getAttribute("data-prefix")||"";
        const suffix = counter.getAttribute("data-suffix")||"";

        let count = 0;
        const duration = 2000; // مدة الأنيميشن بالملي ثانية
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // 0-1
            count = target * (1 - Math.pow(1 - progress, 2)); // ease-out

            if(suffix==="T" || suffix==="B"){
 
                counter.textContent = prefix + count.toFixed(1) + suffix;

            }
            else{

            counter.textContent = prefix + Math.floor(count) + suffix;

            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                // bounce effect
                let bounce = target * 1.05;
                counter.textContent = prefix + Math.floor(bounce) + suffix;
                setTimeout(() => {
                    counter.textContent = prefix + target + suffix;
                }, 150);
            }
        };

        setTimeout(() => requestAnimationFrame(updateCount), delay);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                startCounter(entry.target, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));

    // ---- Sections ----
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px) scale(0.95)";
        section.style.transition = 'opacity 0.6s ease ${(index * 0.2)}s, transform 0.6s ease ${(index * 0.2)}s, box-shadow 0.3s ease';

        // Hover effect
        section.addEventListener("mouseenter", () => {
            section.style.transform = "translateY(0) scale(1.02)";
            section.style.boxShadow = "0 15px 30px rgba(38, 88, 253, 0.15)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.transform = "translateY(0) scale(1)";
            section.style.boxShadow = "none";
        });
    });

    // Scroll animation with parallax
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0) scale(1)";
            } else {
                const offset = Math.min(50, (windowHeight - sectionTop) / 10);
                section.style.transform = 'translateY(${offset}px) scale(0.95)';
            }
        });
     });
});



       