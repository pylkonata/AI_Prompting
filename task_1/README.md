# # Task: Recreate Pricing Cards in React (Tailwind + TypeScript)

**🎯 Goal:**
Recreate the pricing cards UI (as seen in the provided image) into a reusable React component using TypeScript and TailwindCSS.

---

**📁 Component Name:**
`PricingCard.tsx`

---

**🧩 Props Definition:**

```ts
interface PricingCardProps {
  plan: string; // Name of the plan (e.g., "Standard")
  price: string; // Price string (e.g., "$100")
  features: string[]; // List of features (e.g., ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"])
  isFeatured?: boolean; // Optional flag to highlight a plan (e.g., "Pro" plan is highlighted)
}
```

---

**📐 UI Requirements:**

1. **Layout:**

   - Stack cards **horizontally** on desktop (≥ 640px) and **vertically** on mobile (< 640px).
   - Center-aligned title "Pricing" above the cards.

2. **Interactivity:**

   - On desktop: add hover shadow effect (`hover:shadow-xl`).
   - Allow full keyboard navigation with `focus:ring` styles (`focus:outline-none focus:ring-2 focus:ring-offset-2` etc.).

3. **Styling:**

   - Use **TailwindCSS only**. No inline styles.
   - Use **bigger font and darker background** for the `isFeatured` plan.
   - Ensure uniform spacing, rounded corners, and clean UI.
   - Use Tailwind's `bg`, `text`, `p`, `m`, `rounded`, and `shadow` utilities as needed.

4. **Responsiveness:**

   - Ensure responsive padding, margin, and stacking behavior using `sm:`, `md:`, `lg:` prefixes.

---

**🧾 Expected Output:**
Return **only** the `.tsx` file content wrapped in `tsx` code fences.

---

**📎 Attached Design Reference:**
You've provided the image visually showing 3 plans:

- **Standard (\$100)**
- **Pro (\$200)** → featured
- **Expert (\$500)**
