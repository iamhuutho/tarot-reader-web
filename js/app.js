import { renderReadingCardContent, handleEvents } from "./readCard.js";
import {
    renderMembers,
    handleEvents as aboutUsHandleEvents,
} from "./aboutUs.js";
import {
    renderRefAndDis,
    handleEvents as refAndDisHandleEvents,
} from "./referencesAndDisclaimer.js";
import {
    renderViewHistory
} from "./viewHistory.js";
import { renderAllCards, handleEvents as allCardsHandleEvents } from './gallery.js';

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
particlesJS(
    "particles-js",

    {
        particles: {
            number: {
                value: 800,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 3,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 2.5,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
        config_demo: {
            hide_card: true,
            background_color: "#000000",
            background_image: "./images/landing-page-bg.jpg",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
        },
    }
);

export const modalOverlay = document.getElementById("modal-overlay");
export const modalWrapper = document.getElementById("modal-wrapper");
export const modalContent = document.getElementById("modal-content");

function renderContent(content, cb) {
    return () => {
        modalOverlay.classList.add("show");
        modalWrapper.classList.add("show");

        // replace console.log with render content logic
        modalContent.innerHTML = content;

        // this function is optional
        cb?.();
    };
}

function closeModal(cb) {
    modalOverlay.classList.remove("show");
    modalWrapper.classList.remove("show");

    // For readCard
    modalWrapper.classList.remove("readCard-modal-wrapper-show");
    // For ref and disclaim
    modalWrapper.classList.remove("Disclaimer_and_References");
    modalContent.classList.remove("Disclaimer_and_References-content");

    cb?.();
}

const closeModalBtn = document.getElementById("close-modal");
closeModalBtn.addEventListener("click", closeModal);

// click outside modal => hide
window.onclick = function (event) {
    if (
        modalOverlay.classList.contains("show") &&
        modalWrapper.classList.contains("show")
    ) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    }
};

// Main code
const aboutUsBtn = document.getElementById("aboutUs");
const readCardBtn = document.getElementById("readNew");
const Read_Disclaimer_and_References = document.getElementById(
    "Read-Disclaimer-and-References"
);
const viewHistory = document.getElementById("viewHistory");
const view_all_cards = document.getElementById('gallery');

readCardBtn.addEventListener(
    "click",
    renderContent(renderReadingCardContent(), handleEvents)
);

Read_Disclaimer_and_References.addEventListener(
    "click",
    renderContent(renderRefAndDis(), refAndDisHandleEvents)
)

aboutUsBtn.addEventListener(
    "click",
    renderContent(renderMembers(), aboutUsHandleEvents)
);
viewHistory.addEventListener(
    "click",
    () => {
        const historyContent = renderViewHistory();
        renderContent(historyContent)();
    }
);

view_all_cards.addEventListener('click', renderContent(
  renderAllCards(), 
  allCardsHandleEvents
));
