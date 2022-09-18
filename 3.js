let accordion = document.querySelector(".accordion-homepage");
let sectionChild = document.createElement("section");
sectionChild.className = "parent";
sectionChild.innerHTML ='<h3 role="button" tabindex="0" aria-expanded="false" aria-label="My New FAQs">My New FAQs<svg class="up" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg><svg class="down" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg></h3>';
accordion.appendChild(sectionChild);
