import { getHistory } from "./readCard.js";
import data from '../data.json' assert {type: 'json'};

let cards = data.cards;

export const renderViewHistory = () => {
    let readCards = getHistory();
    let content = `
    <div id="history-header-top">
        <h2 id="history-header-title">Recent Cards</h2>
    </div>
    <div class="recent-card-container">
    `;
    if (readCards?.length > 0) readCards.forEach(card => {
        let cardData = cards[card.cardId];
        content += `
        <div class ="recent-card" >
            <div class="recent-card-img">
                <img src=".${cardData.src}.png" alt="Card image">
            </div>
            <div class="recent-card-info">
                <h3>${cardData.name}</h3>
                <p>Date viewed: ${card.lastUpdate}</p>
            </div>
            <div id="viewHistoryClickMe">
                <img src="./assets/icons/icons8-info-68.png" alt="info-icon">
            </div>
        </div>
        `;
    });
    return content + '</div>';
};
