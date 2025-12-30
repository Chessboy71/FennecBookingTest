# Plants E-commerce Mobile App

- A high-fidelity, mobile-first e-commerce application built for a technical assessment. This project simulates a real-world production task, focusing on component modularity, state management, and smooth user experience using Next.js and Tailwind CSS.

## 🚀 [Live Demo](https://fennecbooking-test.vercel.app/)

## 🛠️ Tech Stack

- Framework: Next.js 14 (App Router)

- Styling: Tailwind CSS (Mobile-first approach)

- State Management: Zustand

- Animations: Framer Motion _(Minimal use)_

- Language: TypeScript

Package Manager: pnpm

## 📁 Architecture & Folder Structure

The project follows a modular "Feature-based" architecture to ensure scalability and readability:

- `/public`: Houses all static assets including SVGs and product images.

- `src/app/(routes)`: Uses Next.js Route Groups to organize pages.

- `/cart`: Contains the cart page and local components like CartCheckout.

- `/products/[id]`: Dynamic routing for individual product details.

- `src/app/components`: Global Components: Shared UI elements like Button, NavigationBar, and PageHeader.

- Feature Components: Scoped components (e.g., products/ProductCard) to keep the root component folder clean.

- `src/app/store`: Centralized state management using Zustand to handle the global cart logic.

- `src/app/utils`: Helper functions and static dummy data.

## 🧠 Key Decisions & Assumptions

1. **State Management with Zustand**
   I chose `Zustand` over React Context for the global cart because of its minimal boilerplate and better performance with frequent updates (like quantity increments). It allows for a clean separation of business logic from the UI.

2. **Component Design**

- **Atomic Thinking**: Highly reusable components like `Button.tsx` and `FilterList.tsx` were abstracted to ensure consistency across the app.
- **Performance**: Utilized Next.js Image component for optimized asset loading.

3. **Navigation**
   Used a floating `NavigationBar` and `PageHeaderWithNavigation` to mimic a native iOS feel, ensuring the "Back" and "Cart" actions are always intuitive for the user.

4. **Animations (Bonus)**
   Didn't have enough time to implement everything using framer motion, used minimally in a few component at first only.

## ⚙️ Setup Instructions

```bash

    git clone https://github.com/Chessboy71/FennecBookingTest.git
    cd technical-test
```

2. **Install dependencies**:

```bash
    pnpm install
```

3. Run **the development server**:

```bash
    pnpm dev
```

4. **Open the app**: Navigate to http://localhost:3000. Use Chrome DevTools (Cmd+Shift+M) and set the view to iPhone 12/13/14 for the intended experience, There is also a decent desktop experience inspired by the mobile layout.

## 📝 Final Notes

- **Mobile-Only**: This application is optimized specifically for mobile viewports as per the design requirements, with minimal desktop and no tablets experience.

- **Static Data**: All product data is mocked within utils or local constants to simulate a real API response.
