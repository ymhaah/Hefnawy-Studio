# 🌟 Project Style Guide

## 🎨 Main Colors

-   `Background  (Light Mode)`: hsla(210, 5%, 92%, 1) (--bg-clr-light)
-   `Background  (Dark Mode)`: hsla(220, 7%, 8%, 1) (--bg-clr-dark)
-   `Text  (Light Mode)`: hsla(0, 0%, 100%, 1) (--txt-clr-light)
-   `Text  (Dark Mode)`: hsla(225, 7%, 12%, 1) (--txt-clr-dark)
-   `primary (Light Mode)`: hsla(232, 79%, 59%, 1) (--clr-blue)
-   `primary (Dark Mode)`: hsla(231, 65%, 51%, 1) (--clr-dark-blue)
-   `Error`: hsla(0, 68%, 47%, 1) (--clr-red)
-   `Success`: hsla(120, 68%, 47%, 1) (--clr-green)

### 📌 Notes

-   All colors are defined in HSL format and use hsla() for opacity control.
-   Variables are structured to allow easy theme switching.
-   Ensure text contrast meets accessibility guidelines for readability.

---

## 🔠 Typography

### Font Families

-   `Inter` (--ff-inter): Sans-serif, main font
-   `Playfair` (--ff-playfair): Serif, elegant style
-   `Modern Society` (--ff-modern_society): Display font, used for Studio logo
-   `Rakkas` (--ff-rakkas): Display font, used for Hefnawy logo
-   `Diwani` (--ff-Diwani): Display font, for cool artistic elements

### Font Sizes

-   `Small` (--fs-sm): 12px
-   `Base` (--fs-base): 17px
-   `Medium` (--fs-md): 20px
    `Large` (--fs-lg): 35px
-   `Extra Large` (--fs-xl): 150px
-   `XXL` (--fs-xxl): 250px
-   `XXXL` (--fs-xxxl): 300px

---

## 📐 Layout

-   highest z-index: 1000
-   gap, margin, padding: 1.25rem -> gap-5
-   section gap, margin, padding: 5rem -> pt-20 pb-20

<!-- ### Container

-   `Container Width`: 95%

---

## 📏 Grid

### Grid

-   `Grid Template`: 2x2 (repeat(2, 2fr))
-   `Grid Gap`: 1rem

---

## 📏 Flex

### Flex

-   `Flex Direction`: row
-   `Flex Wrap`: nowrap
-   `Flex Align Items`: center
-   `Flex Align Content`: center

### Flex For Phone

-   `Flex Direction`: column
-   `Flex Wrap`: wrap
-   `Flex Align Items`: start
-   `Flex Align Content`: start

---

## 📏 Button

Buttons are used to trigger actions or navigate to different pages. They are typically used in forms, navigation menus, or other interactive elements.

### Button Sizes

-   `Small`: max-content
-   `Base`: max-content

### Button Colors

-   `Primary`: hsla(232, 79%, 59%, 1) (--clr-blue)
-   `Contrast`: hsla(0, 0%, 100%, 1) (--txt-clr-light)
-   `Mono`: hsla(220, 7%, 8%, 1) (--bg-clr-dark)

### Button Styles

-   `Button`: width: fit-content; height: fit-content; max-width: 100%; display: inline-flex; flex: 0 1 auto; justify-content: center; align-items: center; vertical-align: middle; text-align: center; white-space: nowrap; overflow: hidden; appearance: button; padding: max(0.85em, 0.85rem) max(2em, 2rem); user-select: none; cursor: pointer; text-decoration: none; text-transform: capitalize; font-weight: 900; font-size: var(--fs-base); line-height: 1; border-radius: var(--radius); background-color: var(--accent-clr, hsla(0, 0%, 100%, 0)); color: var(--btn-txt-clr, hsl(220, 13%, 5%)); box-shadow: var(--shadow); -webkit-mask-image: -webkit-radial-gradient(white, black); transition: transform var(--time-fast) var(--animation); --focus-shadow: inset 0px -0.4rem 0 var(--accent-shadow-clr);
-   `Button:hover`: opacity: 0.8;
-   `Button:active`: transform: scale(0.95); box-shadow: 0 1px 4px -1px var(--shadow);
-   `Button:not(:last-child)`: margin-right: 1rem; margin-top: 0;
-   `Button:has(img, svg)`:
-   `Button:where(:hover, :active):not(:has(img, svg))`:
-   `Button:has(img, svg):where(:hover, :active)`:
-   `Button:where(:hover, :active):not(:has(img, svg))`:
-   `Button:has(img, svg):where(:hover, :active)`:

---

## 📏 Avatar

Avatars are used to represent a user or entity in a visually appealing and recognizable way. They are typically used in user profiles, chat interfaces, or other contexts where a visual representation of a user is important.

### 📏 Avatar -->
