var typingEffect = new Typed(".multitext", {
    strings: ["Coder", "Gamer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

// Function to update skill levels
function updateSkillLevels() {
    // Example skill levels (you can set these dynamically based on your application logic)
    const skillLevels = {
        html: 90, // Example: HTML skill is 90%
        css: 85, // Example: CSS skill is 85%
        js: 70, // Example: JavaScript skill is 80%
        c: 86, // Example: C skill is 75%
        cpp: 80, // Example: C++ skill is 70%
        python: 85, // Example: Python skill is 85%
        dsa: 60 // Example: DSA skill is 80%
    };

    // Loop through each skill and update the corresponding progress bar width
    Object.keys(skillLevels).forEach(skill => {
        const skillElement = document.querySelector(`.skill-level-bar.${skill}`);
        if (skillElement) {
            skillElement.style.width = `${skillLevels[skill]}%`;
        }
    });
}

// Simulate delay and then update skill levels (2 seconds delay here)
setTimeout(() => {
    updateSkillLevels();
}, 2000); // Adjust the delay as needed