import data from '../data.json' assert {type: 'json'};
// import { renderCardDetails, handleEvents as cardDetailsHandleEvents } from './card_details.js';



export const renderAllCards = () => {
    return `<div class="container" id="container"></div>`;
}

export const handleEvents = () => {
    const innerContent = document.getElementById('container');
    let finalHTML = ``;
    data.cards.forEach(e => {
        finalHTML += `
        <div class="cardTarot flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${e.src + `.png`}" alt="card"/>
            </div>
            <div class="card--info flip-card-back">
                <span class="card--name">Name: ${e.name}</span>
                <span class="card--keywords">Attributes: ${e.keyword}</span>
                <span id="card--more_details_${e.id}" class="card--more_details">More details</span>
            </div>
            </div>
        </div>
        `;
    }); 

    innerContent.innerHTML = finalHTML + `
    <div class = "sticky">
        <div id="modal-overlay_2" class="modal-overlay"></div>
        <div id="modal-wrapper_2" class="modal-wrapper">
            <div class="modal-top">
            <img id="close-modal_2" style="width: 60px; height: 60px; cursor: pointer;" src="./assets/icons/icons8-close-91.png"
                alt="close-icon" />
            </div>
            <div class="modal-content" id="modal-content_2"></div>
        </div>
    </div>
        `;

    const modalOverlay = document.getElementById('modal-overlay_2');
    const modalWrapper = document.getElementById('modal-wrapper_2');
    const modalContent = document.getElementById('modal-content_2');

    function renderContent(content, cb) {
        return () => {
            modalOverlay.classList.add('show');
            modalWrapper.classList.add('show');

            // replace console.log with render content logic
            modalContent.innerHTML = content;

            // this function is optional
            cb?.();
        }
    }

    function closeModal(cb) {
        modalOverlay.classList.remove('show');
        modalWrapper.classList.remove('show');

        // For readCard
        modalWrapper.classList.remove('readCard-modal-wrapper-show');

        cb?.();
    }

    const closeModalBtn = document.getElementById('close-modal_2');
    closeModalBtn.addEventListener('click', closeModal);

    // click outside modal => hide
    window.onclick = function (event) {
        if (modalOverlay.classList.contains('show') && modalWrapper.classList.contains('show')) {
            if (event.target === modalOverlay) 
                closeModal();
        }
    }

    for (let i = 1; i <= 78; i++) 
    {
        const card = document.getElementById(`card--more_details_${i}`);

        card.addEventListener('click', renderContent(
        `
            <div class="card_details" id="card_details">
            </div>
        `,
        () => 
        {
            const card_details = data.cards.find(x => Number(x.id) === Number(i)).detail;
            document.getElementById('card_details').innerHTML = card_details;
        }
        ));
    }
}