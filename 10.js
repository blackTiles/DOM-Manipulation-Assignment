let btn = document.querySelector(".landing-top .btn-cta-big .login-btn-text");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "transparent";
});
