# ShopHub - Ecommerce React Application

## 📋 Project Overview

ShopHub is a modern e-commerce application built with React that allows users to browse products, authenticate, manage a shopping cart, and checkout. The project demonstrates React best practices including context API for state management, React Router for navigation, and React Hook Form for form validation.


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

## 🏗️ Project Architecture

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

## 🚀Getting Started

# Installation

# Clone the repository
git clone <repo-url>

# Navigate to project
cd Ecommerce_React

# Install dependencies
npm install

# Start development server
npm start

## Available Scripts

npm start          # Run development server
npm run build      # Build for production
npm run preview    # Preview production build



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

## 🔄 Data Flow

## Authentication Flow

User inputs credentials
          ↓
Auth.jsx form submission
          ↓
useAuth() hook calls signUp/login
          ↓
AuthContext updates user state
          ↓
localStorage saves user email
          ↓
User redirected to home page
          ↓
Navbar displays user email & logout button



## Cart Flow

User clicks "Add to Cart" on ProductCard
          ↓
useCart() hook calls addToCart()
          ↓
CartContext updates cartItems state
          ↓
Cart count updates in Navbar
          ↓
User can view/edit cart on Checkout page
          ↓
User places order & cart clears


## ⚠️ Known Limitations

No Backend API - Uses mock data and localStorage only
No Password Encryption - Passwords not hashed (use only for development)
No Real Authentication - Accepts any email/password combination
No Payment Processing - Checkout is UI only
No User Database - Data not persistent across devices
No Email Verification - No confirmation emails
No Order Tracking - No order history

