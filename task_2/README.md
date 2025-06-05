# Task 2: Hamburger Menu Slide-Down Glitch Fix at 768px

## Project Structure

```
project/
├── index.html       // Navigation layout with hamburger menu
└── styles.css       // Styles including media queries and transitions
```

## Task Description

The goal is to fix a "ghosting" or glitch effect that occurs exactly at 768px viewport width in a responsive navigation menu. The menu should slide down smoothly when opened and slide back up when closed.

### Current Issue

- At exactly 768px viewport width, the menu behaves erratically or animates unexpectedly
- The glitch may be related to:
  - The transition on transform
  - Default positioning or layout behavior at the breakpoint
  - Overlapping desktop and mobile styles

### Required Files

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Nav</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav class="nav">
      <button class="hamburger" id="menuBtn">Menu</button>
      <ul class="menu" id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>

    <script>
      const btn = document.getElementById("menuBtn");
      const menu = document.getElementById("menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("open");
      });
    </script>
  </body>
</html>
```

#### Original styles.css

```css
/* styles.css */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #fff;
    transform: translateY(-150%);
    transition: 0.3s ease;
  }

  .menu.open {
    transform: translateY(0);
  }
}
```

## Task Requirements

1. Analyze the root cause of the glitch at exactly 768px
2. Create a patched version of styles.css that fixes the glitch
3. Do not modify the HTML structure
4. Only provide the corrected styles.css with a comment at the top: `/* patched styles.css */`

## Expected Behavior

- The menu should slide down smoothly when opened (when .open class is added)
- The menu should slide back up smoothly when closed
- No glitch or erratic behavior at 768px viewport width
