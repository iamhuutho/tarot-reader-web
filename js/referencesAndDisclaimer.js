import data from '../data.json' assert {type: 'json'};
import { modalWrapper, modalContent } from './app.js';

let vid = data.resources;
console.log(vid);
export const renderRefAndDis = () => {
    return `
        <div >
            <p class = "Introduction"> What is the tarot ? </p>
            <div class = "prefix">
                The Tarot is a symbolic map of consciousness that encompasses our journey through life, both spiritually and practically.
            </div> 
            <div class = "content">
                Tarot reading is the practice of divining wisdom and guidance through a specific spread (or layout) of Tarot cards. However, contrary to popular belief, the cards do not simply tell your fortune, and one does not have to be a psychic to give Tarot readings. The cards are meant to provide insight into the innermost truths of your higher self. In other words, the cards provide an evolved awareness of what you already know deep within. The origin of the Tarot is unknown, but we do have documented references of Tarot card use back to fourteenth century Europe. The Tarot has been used as an oracle, in the basic form we know today, since the beginning of the seventeenth century.  
            </div>
        </div>
        <br>
        <div >
            <p class = "Introduction"> The Meaning of the Tarot </p>
            <div class = "content">
                There are 22 cards of the Major Arcana, which divulge greater secrets, and 56 cards of the Minor Arcana, which divulge lesser secrets and are further divided into four suits. The suits of the Minor Arcana include Wands, Swords, Cups, and Pentacles. The fourteen cards in each suit are numbered Ace through Ten, plus the Court Cards: Page (Princess), Knight (Prince), Queen, and King. Decks can vary some in naming. The suits and the individual cards are not always called the same thing, but their core meanings are fairly universal. For example, in some decks, the Knight equates to the King and not the Prince. Most decks come with a booklet you can use to get familiar with its specifics. The Minor Arcana of the Tarot symbolize daily aspects of life, giving insight into our challenges, talents, opportunities, and experience of ups and downs. Each suit represents an element: Wands are Fire, Swords are Air, Cups are Water, and Pentacles are Earth. The suits can reflect attitude and temperament, such as a fiery person or someone who is “up in the air” or “down to earth.” Determining a card’s significance is dependent upon the question, the reader, the person receiving the reading, and the placement of other cards in the spread. The Major Arcana are numbered 0 through 21, starting with The Fool, and ending with The World. These cards align with the milestones of life’s story or The Hero’s Journey which can be explored further with Joseph Campbell’s book “The Hero With a Thousand Faces.” In this sense, the cards of the Major Arcana represent the 22 inevitable phases or passages of every journey, which we’ll all encounter during our lives (not necessarily in this order). It’s also possible for these phases to repeat themselves, and recur multiple times throughout one’s life, creating a cyclical nature in which there is no true beginning or end.
            </div>
        </div>
        <div >
            <p class = "Introduction"> Disclaimer </p>
            <div class = "content">
                This has been prepared as our grand project of the course, including all the details related to our topics as well as our views regarding the project. Through this project, we believe that we will provide the overview of these topics, thereby transmitting the basic function of the program. Lastly, it is a great pleasure for us to have a chance to approach and grasp the useful knowledge of these topics. Hopefully, this project will bring a splendid experience to the users, which can satisfy us for our struggle for this project.
            </div>
        </div>
        <div class="Disclaimer_and_References-content" id="Disclaimer_and_References-content">
        </div>
        <div class="resources" id="resources">
            <iframe id="resources-item" src="https://www.youtube.com/embed/-phaUChto9o?autoplay=0&mute=1"
                frameborder="1"></iframe>
            <iframe id="resources-item" src="https://www.youtube.com/embed/9nVZ1cDL4Kc?autoplay=0&mute=1"
                frameborder="1"></iframe>
            <iframe id="resources-item" src="https://www.youtube.com/embed/4-CjXCKwj2I?autoplay=0&mute=1"
                frameborder="1"></iframe>
            <iframe id="resources-item" src="https://www.youtube.com/embed/47nKtmHBp40?autoplay=0&mute=1"
                frameborder="1"></iframe>
        </div>
    `
}

export const handleEvents = () => {
    modalWrapper.classList.add('Disclaimer_and_References');
    modalContent.classList.add('Disclaimer_and_References-content');
}