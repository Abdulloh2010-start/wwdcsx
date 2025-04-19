const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

function showOnly(pageToShow) {
  [page1, page2, page3].forEach(page => {
    page.classList.remove("active", "hidden");
    if (page !== pageToShow) {
      page.classList.add("hidden");
    } else {
      page.classList.add("active");
    }
  });
}

function animatePage1() {
  showOnly(page1);

  new Typed("#title1", {
    strings: ["TEXT GRADIENTS"],
    typeSpeed: 50,
    showCursor: false
  });
  setTimeout(() => {
    new Typed("#typed1", {
      strings: ["Make your headlines stand out"],
      typeSpeed: 40,
      showCursor: false
    });
  }, 1000);
  setTimeout(animatePage2, 4000);
}

function animatePage2() {
  showOnly(page2);
  new Typed("#title2", {
    strings: ["Design is intelligence made visible"],
    typeSpeed: 50,
    showCursor: false
  });
  setTimeout(() => {
    new Typed("#typed2", {
      strings: ["Design is intelligence made visible Interaction design isn’t merely a matter of aesthetic choice; rather, it is based on an understanding of users and cognitive principles."],
      typeSpeed: 50,
      showCursor: false
    });
  }, 1);
  setTimeout(animatePage3, 15000);
}

function animatePage3() {
  showOnly(page3);
  setTimeout(() => {
  new Typed("#title3", {
    strings: ["Netflix"],
    typeSpeed: 10,
    showCursor: false
  });
  }, 1000);
  setTimeout(() => {
    new Typed("#typed3", {
      strings: ["Splash Screen"],
      typeSpeed: 40,
      showCursor: false
    });
  }, 1000);
}

animatePage1();