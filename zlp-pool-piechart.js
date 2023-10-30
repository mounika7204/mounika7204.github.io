const pieSections = document.querySelectorAll('.recharts-sector');
const tooltipWrapper = document.querySelector('.recharts-tooltip-wrapper');

function showInformation(sectionName) {
    if (sectionName === 'ETH') {
        tooltipWrapper.innerHTML = '50.49% ETH';
    } else if (sectionName === 'USDC') {
        tooltipWrapper.innerHTML = '49.5% UDSC';
    }
    tooltipWrapper.style.visibility = 'visible';
}

function hideTooltip() {
    tooltipWrapper.style.visibility = 'hidden';
}

pieSections.forEach(section => {
    section.addEventListener('click', function () {
        const sectionName = section.getAttribute('name');
        showInformation(sectionName);
    });

    section.addEventListener('mouseenter', function () {
        const sectionName = section.getAttribute('name');
        showInformation(sectionName);
    });

    section.addEventListener('mouseleave', function () {
        hideTooltip();
    });
});
