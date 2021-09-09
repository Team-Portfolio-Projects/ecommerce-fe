App Overview

This will be a full-stack e-commerce application complete with user authentication (via oAuth) and some measure of analytics provided to admin level users. Generic users will be able to search for and filter from a list of products (retrieved either from a 3rd party API or from a set of randomly seeded data) and “purchase” those products.

Please see the application’s tech stack below:

Frontend -  Reactjs /
Backend - Express Mongoose/ Node / oAuth
DB - Mongo

User Stories
As a user I would like to browse products(MVP)
As a user, I would like to be able to view products using filters (BRONZE)
As a user, I would like to be able to purchase products (MVP)
As a user, I would like to be able to see my purchase history(SILVER)
As a user, I would like to be able to search for products(GOLD)
As a user, I would like to see ratings and reviews for products(BRONZE)



Please see intended models below:

Models:
USER{
Id: 128
Username: string required
Password: string required
Purchased:[ ]
}
Product{
Item: string
Category: string
Price: number
Rating ?
Size ? dependent on what the product is
}
CART{
Products:[ ]
}
Components:
APIFile
App
Login
Nav
ProductGrid
Product details
Cart/Checkout
Analytics
