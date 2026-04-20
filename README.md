# ZenType

> *A minimalist typing experience powered by wisdom.*

ZenType is a browser-based typing practice app that serves you a fresh random quote each session. Type it out character by character, track your accuracy, and come back tomorrow for more wisdom — with a daily cap of 10 quotes to keep things intentional.

---

## ✨ Features

- **Random quotes** — fetched live from the [API Ninjas Quotes API](https://api-ninjas.com/api/quotes)
- **Real-time feedback** — characters highlight green on correct keystrokes and orange/red on mistakes
- **Backspace support** — fix mistakes as you go
- **Correct / Wrong counter** — see your accuracy at a glance in the dashboard
- **Daily quote limit** — 10 quotes per day, reset at midnight, tracked via `localStorage`
- **Blur reveal** — quotes start blurred; click *Start Typing* to reveal and begin
- **Theme toggle** — switch between a dark default theme and a vibrant blue/green theme
- **Custom typography** — rendered in elegant *EB Garamond*

---

## 🚀 Getting Started

No build step required — ZenType is plain HTML, CSS, and JavaScript.

1. **Clone the repository**
   ```bash
   git clone https://github.com/theguy1234567/ZenType.git
   cd ZenType
   ```

2. **Open in your browser**
   ```bash
   open index.html
   # or just double-click index.html in your file manager
   ```

That's it. No npm, no bundler, no dependencies to install.

---

## 🎮 How to Use

1. The page loads with a blurred quote and a **Start Typing** button.
2. Click **Start Typing** to reveal the quote and begin.
3. Type the quote using your keyboard — each character lights up as you go:
   - 🟦 **Aqua / Blue** — correct keystroke
   - 🟡 **Orange / Red** — wrong keystroke
4. Press **Backspace** to undo the last character.
5. Finish the quote and a new one loads automatically.
6. Once you've completed **10 quotes** for the day, ZenType rests until tomorrow.
7. Click the **Theme** button in the dashboard to toggle between the dark and light-accent themes.

---

## 📁 Project Structure

```
ZenType/
├── index.html   # App markup
├── app.js       # All game logic (quote fetching, typing engine, theme toggle)
├── style.css    # Theming, layout, and character state styles
└── fonts/
    └── EBGaramond.otf
```

---

## 🛠️ Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Markup     | HTML5                              |
| Styling    | CSS3 (custom properties / themes)  |
| Logic      | Vanilla JavaScript (ES2017+)       |
| Quotes API | [API Ninjas](https://api-ninjas.com/api/quotes) |
| Font       | EB Garamond                        |
| Storage    | `localStorage` (daily progress)    |

---

## 🌙 Themes

| Theme      | Background  | Dashboard       | Correct   | Wrong              |
|------------|-------------|-----------------|-----------|---------------------|
| Default    | `#1f1f1f`   | Dark grey       | Aqua      | Orange (`#f5a905`)  |
| New Theme  | `#7494ea`   | Bright green    | `#44ccff` | Red (`#ff4242`)     |

---

## 📜 License

This project is open source. Feel free to fork, remix, and make it your own.

---

<p align="center">made with love &copy;</p>
