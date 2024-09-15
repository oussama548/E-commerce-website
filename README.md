# E-Commerce Website

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [JavaScript Functionality](#javascript-functionality)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This project is an e-commerce website template that provides a foundation for building an online store. It includes features such as product browsing, user authentication and shopping cart functionality, it also uses local storage
to store user data and cridentials (email,password,added products,....) , It is considered as a good learning experience to master frontend developement with JavaScript. 

## Features

**-Visually Appealing interface:** Using modern CSS to style the website 
**- User authentication (Sign Up and Sign In):** used local storage to store the user cookies so that he doesn't need to sign-in in the next time (no backend used , just frontend)
**- Product browsing by category (Men's and Women's products):** Section to search for both men and women clothes-> T-shirts , Shoes,Accessories,Trousers,Skirts,....
**- Product details page:** It displays information about the products and enables you to add it to your card in order to buy it later
**- Shopping cart functionality:** Enables you to add,delete and lookup for your purchased products , each user has its own card
**- Newsletter sign-up:** user authentication with JavaScript and storing data in local Storage (not safe option but it's good for learning purposes)
**- Contact form:**It tells the users about our shop and determine its location using Google Map API

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Map API
- Local Storage for data persistence
  

## Project Structure

The project consists of multiple HTML pages and a JavaScript file:

- `home.html`: The main landing page
- `shop.html`: The general shopping page
- `menPro.html`, `womenPro.html`: Category-specific product pages
- `signin.html`, `signup.html`: User authentication pages
- `card.html`: Shopping cart page
- `contact.html`: Contact form page
- `script.js`: Contains all the JavaScript functionality
- `style.css`: For the website styling

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/Oussama548/ecommerce-website.git
   ```
2. Navigate to the project directory:
   ```
   cd ecommerce-website
   ```
3. Open `home.html` in your web browser to view the website.

## Usage

- Browse products by navigating through the various category pages.
- Click on a product to view its details.
- Add products to your cart by clicking the shopping cart icon on a product.
- Sign up for an account or sign in to an existing account.
- View and manage your shopping cart.
- Use the contact form to send messages (requires sign-in).

## JavaScript Functionality

The `script.js` file contains all the JavaScript functionality for the website. Here's an overview of its main features:

1. **User Authentication**: Handles user sign-up and sign-in processes, storing user data in Local Storage.
2. **Product Management**: Allows adding products to the cart and viewing product details.
3. **Shopping Cart**: Manages the user's shopping cart, allowing addition and removal of items.
4. **Category Navigation**: Handles the display and hiding of category lists on product pages.
5. **Form Validation**: Validates user input for email and password during sign-up and sign-in.
6. **Data Persistence**: Uses Local Storage to maintain user data and shopping cart information across sessions.

## Contributing

- The website is 90% completed , the products prictures need to be updated and some anchor tags are yet without the href-
- Feel Free to contribute in this project by: 1. updating the pictures and anchor tags
                                              2. add backend functionalities for user authentification

  
