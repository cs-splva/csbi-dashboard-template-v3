//var $ = window.CustomJQuery

function showPageNavigation(show) {
	var divs = document.getElementsByClassName("sfx_outer-nav-container_1322");
	var displayValue = show ? "" : "none";
	for (var i = 0; i < divs.length; i++) {
		var div = divs[i];
		div.style.display = displayValue;
	}
}

function monitorDivTextChange() {
    const targetDiv = document.querySelector('.sfx_label_1114');

    if (!targetDiv) {
        console.error('The div with class "sfx_label_1114" does not exist.');
        return;
    }

    const handleTextChange = (newText) => {
        if (newText === 'Viewing') {
            showPageNavigation(false);
        } else if (newText === 'Editing') {
            showPageNavigation(true);
        }
    };

    const observeTextChanges = () => {
        const observer = new MutationObserver(mutationsList => {
            mutationsList.forEach(mutation => {
                if (mutation.type === 'childList') {
                    const newText = mutation.target.textContent.trim();
                    handleTextChange(newText);
                }
            });
        });

        observer.observe(targetDiv, { childList: true, subtree: true });
    };

    observeTextChanges();
    handleTextChange(targetDiv.textContent.trim());
}

monitorDivTextChange();