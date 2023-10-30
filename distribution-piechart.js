const pieSections = document.querySelectorAll('.recharts-sector');
const tooltipWrapper = document.querySelector('.recharts-tooltip-wrapper');

function showInformation(sectionName) {
    if (sectionName === 'in liquidity') {
        tooltipWrapper.innerHTML = '94% in Liquidity';
    } else if (sectionName === 'not staked') {
        tooltipWrapper.innerHTML = '6% not staked';
    }
    // Show the tooltip
    tooltipWrapper.style.visibility = 'visible';
}

function hideTooltip() {
    // Hide the tooltip
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
