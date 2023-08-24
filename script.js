const paragraphTextarea = document.getElementById('hobbiesParagraph');
const paragraphCard = document.getElementById('paragraphCard');

paragraphTextarea.addEventListener('input', function() {
    const desiredHeight = paragraphTextarea.scrollHeight + 'px';
    paragraphTextarea.style.height = desiredHeight;
    paragraphCard.style.height = 'auto'; // Reset card's height to auto
    paragraphCard.style.height = paragraphCard.scrollHeight + 'px'; // Set card's height to adjusted height
});
