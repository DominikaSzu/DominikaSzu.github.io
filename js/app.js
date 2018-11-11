const wrapper = document.querySelector(".wrapper");
showMe = () => wrapper.classList.add("show-me");

document.addEventListener("scroll", showMe);
