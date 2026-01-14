document.addEventListener("DOMContentLoaded", () => {
  let para = document.getElementById("para");
  let authorElem = document.getElementById("author");
  let paraContainer = document.querySelector(".main-container");
  let removeBlurBtn = document.getElementById("reaveal-btn");
  let correctCountElem = document.getElementById("correctCount");
  let wrongCountElem = document.getElementById("wrongCount");
  let quoteCountElem = document.getElementById("quoteCount");
  let ThemeBtn = document.getElementById("ThemeBtn");
  let letter;
  let quote_len = 0;
  let isLoading = false;
  let isTyping = 0;
  let author;
  let key_count = 0;
  let correct_count = 0;
  let wrong_count = 0;
  let quote_count = Number(localStorage.getItem("quote_count")) || 0;
  let stored_date = localStorage.getItem("lastQuoteDate");

  const daily_limit = 10;

  let today_date = new Date().toDateString();
  quoteCountElem.innerText = `Quote:${quote_count}/${daily_limit}`;

  //logic to reset quote_count daily
  if (stored_date !== today_date) {
    quote_count = 0;
    localStorage.setItem("quote_count", quote_count);
    localStorage.setItem("lastQuoteDate", today_date);
  }

  //fetching quote from api
  const getQuote = async () => {
    isLoading = true;
    try {
      let data = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
        method: "GET",
        headers: {
          "X-Api-Key": "ePSzPYu3sJSa/+vYOneGbw==8s0XvesR68DaPvQr",
        },
      });

      let res = await data.json();
      const quote = res[0].quote;
      author = res[0].author;
      para.textContent = "";
      authorElem.textContent = author;

      for (const char of quote) {
        let spanElement = document.createElement("span");
        spanElement.textContent = char;
        para.appendChild(spanElement);
      }
      console.log(quote);

      letter = para.querySelectorAll("span");
      quote_len = letter.length;
      isLoading = false;

      return quote;
    } catch (error) {
      console.error(error);
    }
  };

  if (quote_count < daily_limit) {
    getQuote().then(() => {
      removeBlurBtn.style.display = "block";
    });
  } else {
    removeBlurBtn.style.display = "none";
    paraContainer.style.filter = "none";
    para.textContent = "More widom Tomorrow";
    authorElem.innerHTML = `ZenType`;
  }

  removeBlurBtn.addEventListener("click", () => {
    paraContainer.style.filter = "none";
    removeBlurBtn.style.display = "none";
    isTyping = true;
  });

  addEventListener("click", (event) => {
    if (event.target == document.body) {
      if (quote_count < daily_limit) {
        paraContainer.style.filter = "blur(10px)";
        removeBlurBtn.style.display = "block";
        isTyping = false;
      } else {
        return;
      }
    }
  });
  let Themeidx = 0;
  ThemeBtn.addEventListener("click", () => {
    if (Themeidx === 0) {
      document.body.classList.add("newTheme");
      Themeidx = 1;
    } else {
      document.body.classList.remove("newTheme");
      document.body.classList.add("default");
      Themeidx = 0;
    }
  });

  addEventListener("keydown", async (event) => {
    if (isLoading) return;
    if (isTyping == 0) return;

    if (event.key === letter[key_count].textContent) {
      letter[key_count].classList.remove("wrong");
      letter[key_count].classList.add("correct");
      correct_count += 1;
      key_count += 1;
    } else if (event.key === "Backspace") {
      if (key_count === 0) {
        key_count == 0;
      } else {
        key_count -= 1;
      }
      letter[key_count].classList.remove("wrong", "correct");
    } else if (event.key === "Shift") {
    } else {
      letter[key_count].classList.remove("correct");
      letter[key_count].classList.add("wrong");
      key_count += 1;
      wrong_count += 1;
    }
    correctCountElem.innerHTML = `Correct: ${correct_count}`;
    wrongCountElem.innerText = `Wrong: ${wrong_count}`;

    if (key_count >= quote_len) {
      quote_count += 1;

      localStorage.setItem("quote_count", quote_count);
      quoteCountElem.innerText = `Quote:${quote_count}/${daily_limit}`;

      key_count = 0;
      correct_count = 0;
      wrong_count = 0;

      if (quote_count < daily_limit) {
        key_count = 0;
        await getQuote();
      } else {
        isTyping = 0;
        correct_count = 0;
        wrong_count = 0;
        para.textContent = "More widom Tomorrow";
      }
    }
    console.log(event.key);
    console.log(key_count);
  });
});
