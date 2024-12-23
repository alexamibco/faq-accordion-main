const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  let header = item.querySelector(".accordion__item--title");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let text = item.querySelector(".accordion__item--text");
    if (item.classList.contains("open")) {
      text.style.height = `${text.scrollHeight}px`;
    } else {
      text.style.height = "0";
    }
  });
});
