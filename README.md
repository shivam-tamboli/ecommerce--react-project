# ShopHub - Ecommerce React Application

A modern e-commerce web application built with React, Vite, and React Router.

## Features

- **Product Catalog** - Browse 8 tech products with images, prices, and descriptions
- **Shopping Cart** - Add/remove items, update quantities, view totals
- **User Authentication** - Sign up and login functionality using localStorage
- **Checkout** - Order summary with cart management
- **Product Details** - Individual product pages with detailed information
- **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **React Hook Form** - Form handling
- **localStorage** - Data persistence

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar with auth controls
│   └── ProductCard.jsx   # Product display card
├── context/
│   ├── AuthContext.jsx   # Authentication state management
│   └── CartContext.jsx   # Shopping cart state management
├── data/
│   └── products.js       # Product data
├── pages/
│   ├── Auth.jsx          # Login/Signup page
│   ├── Checkout.jsx      # Cart and checkout page
│   ├── Home.jsx          # Home page with product grid
│   └── ProductDetails.jsx # Product detail page
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Browse Products** - View all products on the home page
2. **View Details** - Click "View Details" to see full product information
3. **Add to Cart** - Click "Add to Cart" to add items
4. **Manage Cart** - Go to Cart to update quantities or remove items
5. **Checkout** - Review your order and place it
6. **Authentication** - Sign up/login to save your session

## API Reference

### AuthContext

- `user` - Current logged-in user object or null
- `signUp(email, password)` - Register new user
- `login(email, password)` - Authenticate user
- `logout()` - End user session

### CartContext

- `cartItems` - Array of cart items with quantities
- `addToCart(productId)` - Add item to cart
- `removeFromCart(productId)` - Remove item from cart
- `updateQuantity(productId, quantity)` - Update item quantity
- `getCartTotal()` - Calculate cart total
- `getCartItemsWithProducts()` - Get cart items with full product data
- `clearCart()` - Empty the cart

## Data Flow

### Authentication Flow

1. User inputs credentials in Auth.jsx form
2. useAuth() hook calls signUp/login
3. AuthContext updates user state
4. localStorage saves user email
5. User redirected to home page
6. Navbar displays user email & logout button


### Cart Flow

1. User clicks "Add to Cart" on ProductCard
2. useCart() hook calls addToCart()
3. CartContext updates cartItems state
4. Cart count updates in Navbar
5. User can view/edit cart on Checkout page
6. User places order & cart clears

## Known Limitations

- No Backend API - Uses mock data and localStorage only
- No Password Encryption - Passwords not hashed (use only for development)
- No Real Authentication - Accepts any email/password combination
- No Payment Processing - Checkout is UI only
- No User Database - Data not persistent across devices
- No Email Verification - No confirmation emails
- No Order Tracking - No order history

## License


