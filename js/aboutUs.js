import data from '../data.json' assert { type: "json" };

export function renderMembers() {
    let listMemberHTML = '';
    data.members.forEach(({ name, image }) => {
        listMemberHTML += `
        <div class="swiper-slide card">
        <div class="card-content">
          <div class="image">
            <img src="${image}" alt="">
          </div>
          <div class="media-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
          </div>
          <div class="name-profession">
            <span class="name">${name}</span>
            <span class="profession">Web developer</span>
          </div>
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="button">
            <button class="aboutMe">About Me</button>
            <button class="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      `
    });
    let finalHTML = `
     <h1 class="heading"><span>meet </span>OUR TEAM</h1>
      
      <div class="about-list">
        <div class="list">
          <div class="swiper mySwiper container">
            <div class="swiper-wrapper content">
              ${listMemberHTML}
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
     
      <div data-aos="fade-up" class="comments">
        <form id="idForm">
          <h3>GET IN TOUCH </h3>
          <input type="text" id="name" placeholder="Your Name">
          <small class="error"></small>
          <input type="text" id="email" placeholder="Email id">
          <small class="error"></small>
          <textarea id="message" rows="4" placeholder="Comments"></textarea>
          <small class="error"></small>
          <button type="submit" id="submitForm">Send</button>
          <p id="success"></p>
        </form>
    </div>
    `

    return finalHTML;

}

export function handleEvents() {
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const success = document.querySelector("#success");
    const errorNodes = document.querySelectorAll(".error");
    const idForm = document.getElementById('idForm')
    //validate data
    idForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        clearMessage();
        let errorFlag = false;
        if (nameInput.value.length < 1) {
            errorNodes[0].innerText = "Name cannot be blank";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }
        if (!emailIsValid(email.value)) {
            errorNodes[1].innerText = "Invalid email adress";
            email.classList.add("error-border");
            errorFlag = true;
        }
        if (message.value.length < 1) {
            errorNodes[2].innerText = 'Please enter message';
            message.classList.add('error-border')
            errorFlag = true;

        }
        if (!errorFlag) {

            alert("Cảm ơn đóng góp của bạn");
            idForm.reset();
        }

    }

    //clear error / success messages
    function clearMessage() {
        for (let i = 0; i < errorNodes.length; i++) {
            errorNodes[i].innerText = ""
        }
        success.innerText = "";
        nameInput.classList.remove('error-border');
        email.classList.remove("error-border");
        message.classList.remove('error-border')
    }
    function emailIsValid(email) {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(email);

    }
}
