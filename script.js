function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    const isChecked = card.previousElementSibling.checked;

    console.log(`Toggling card: ${cardId}`)

    // Toggle the checked state
    card.previousElementSibling.checked = !isChecked;

    if (!isChecked) {
        // Add class to trigger animation for unchecked state
        card.classList.add('unchecked');

        // Remove the class after the animation completes
        setTimeout(() => {
            card.classList.remove('unchecked');
        }, 600);
    }
}
