# LMS(Learning Management System )

This repository contains the source code and implementation of a Learning Management System (LMS) developed using the MERN stack (MongoDB, Express.js, React, Node.js) along with Tailwind CSS and DaisyUI for styling, Cloudinary for managing media, and Razorpay for subscription management.

## VIDEO 

https://youtu.be/T8YZitqdlEY

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Subscription Management](#subscription-management)
- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [Further-Support](#further-support)

## Overview

The Learning Management System (LMS) is a web-based application that facilitates the management and delivery of educational content and training materials. It allows administrators to create courses, manage users, and track progress. Users can access courses, view content, and complete assessments. Additionally, it offers subscription management through Razorpay, allowing users to purchase and cancel subscriptions.

## Features

- User authentication and authorization
- Course creation, modification, and deletion
- Content upload and management using Cloudinary
- User enrollment in courses
- Course progress tracking
- Interactive user interface using React and Tailwind CSS
- Subscription management with Razorpay

## Installation

 Clone the project 

```bash
https://github.com/Chaitanya-05/Equality-Eclipse_044.git
```

### Setup instruction  for Frontend

1. Move into the directory

```bash
cd Client
```
2. install  dependenices

```bash
npm install
```
3.  run the server

```bash
npm run dev
```

### Setup instruction  for Backend

1. Move into the directory

```bash
cd Server
```
2. install  dependenices

```bash
npm install
```
3.  run the server

```bash
npm run dev
```
4.  Set up environment variables:
   Create a `.env` file in the `server` directory and add the following:

```bash
    PORT = <Port number >
    MONGODB_URL=<Connection_LINK>
    JWT_SECRET = <YOUR_LONG_JWT_SECRET>
    JWT_EXPIRY = <JWT_EXPIRY>

    FRONTEND_URL = <YOUR_FRONTEND_WEBSITE_URL>

    CONTACT_US_EMAIL = <YOUR_CONTACT_US_EMAIL>

    CLOUDINARY_CLOUD_NAME = <YOUR_CLOUDINARY_CLOUD_NAME>
    CLOUDINARY_API_KEY = <YOUR_CLOUDINARY_API_KEY>
    CLOUDINARY_API_SECRET = <YOUR_CLOUDINARY_API_SECRET>

    SMTP_HOST = <YOUR_SMTP_HOST>
    SMTP_PORT = <YOUR_SMTP_POST>
    SMTP_USERNAME = <YOUR_SMTP_USERNAME>
    SMTP_PASSWORD = <YOUR_SMTP_PASSWORD>
    SMTP_FROM_EMAIL = <YOUR_SMTP_FROM_EMAIL>

    RAZORPAY_KEY_ID = <YOUR_RAZORPAY_KEY>
    RAZORPAY_SECRET = <YOUR_RAZORPAY_SECRET>
    RAZORPAY_PLAN_ID = <YOUR_RAZORPAY_PLAN_ID>
```

## Subscription Management

- Users can purchase subscriptions for accessing premium content or features.
- Implement a subscription management interface that allows users to:
  - View available subscription plans
  - Select and purchase a subscription plan via Razorpay
  - Cancel an existing subscription


## Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [Cloudinary](https://cloudinary.com/) account and API credentials
- [Razorpay](https://razorpay.com/) account and API credentials

<h2 align="center">Author</h2>

- **GitHub**: [Chaitanya Dakhale](https://github.com/Chaitanya-05)
- **LinkedIn**: [Chaitanya	Dakhale](https://www.linkedin.com/in/chaitanyadakhale/)

- **GitHub**: [Soumyadeep Dutta](https://github.com/soumyadeepdutta7)
- **LinkedIn**: [Soumyadeep Dutta](https://www.linkedin.com/in/soumyadeep-dutta-b142581a1/)

- **GitHub**: [Amrit Pal](https://github.com/Amrit-786)
- **LinkedIn**: [Amrit Pal	](https://www.linkedin.com/in/amrit-pal-singh-18a072252)

## Further-Support

If you encounter any issues or have questions, feel free to raise them as GitHub issues, and we'll be happy to assist you.


<h2 align="center">Include screenshots as necessary.</h2>

![image](https://github.com/Chaitanya-05/Equality-Eclipse_044/blob/main/Client/src/Assets/Screenshot/1.png)


