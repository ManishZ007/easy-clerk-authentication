## 🖼️<a href="demo-project-img">Demo of Project</a>

![alt text](https://github.com/ManishZ007/easy-clerk-authentication/blob/main/demo.png)

## 🧾Easy Access Contents

1. 🖼️[Demo of Project](#demo-project-img)
2. 🙋‍♂️[Introduction](#introduction)
3. 🤩[Quick Start](#quick-start)
4. ⚙️[Tech Stack](#teck-stack)
5. ⭐[Features](#features)
6. 🎊[Moral of Story](#moral-of-story)


## 🙋‍♂<a href="introduction">Introduction</a>

**Authentication Starter Kit with Clerk and MongoDB**

This repository offers a complete authentication solution using Clerk and MongoDB, designed to seamlessly integrate into your Next.js projects. It provides everything you need for user registration, login, and session management, so you don't have to build an authentication system from scratch.




## 🤩<a href="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the repository and start building**

```bash
git clone https://github.com/ManishZ007/easy-clerk-authentication.git
cd easy-clerk-authentication
```

**Installation**
Install the project dependencies using npm

```bash
npm install
```

**Set Up Environment Variables**
create a file called .env.loacl in your root root project and add this content in it

```bash

# create clerk account and get this stuff
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

# this is by default use
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

#insert global mongodb url
MONGODB_URL=

```
replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/)

**Running The Project**

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## ⚙️<a href="teck-stack">Teck Stack</a>

- Next.js
- Typescript
- MongoDB
- Clerk
- Shadcn
- TailwindCSS


## ⭐<a href="features">Features</a>

- Pre-built Authentication: No need to set up authentication—this repository has you covered.
- Database Actions: Easily integrate and manage multiple database actions within your project.
- Clerk Events: Utilize Clerk events to optimize and customize your project's authentication flow.
- Dark and Light Theme Toggle: A built-in theme toggle button allows you to switch between dark and light modes, saving you the hassle of implementing theme management.
- ShadCN UI Library: The UI is crafted using the ShadCN library, providing a clean and modern design

## 🎊<a href="moral-of-story">Moral of Story</a>

This starter kit is perfect for anyone looking to quickly implement a robust authentication system with a polished UI, theme management, and additional features, while retaining the flexibility to tailor it to their needs.

## Important Note

If you're testing your application locally, you'll need to expose your local server to the internet to receive Clerk webhook events. Ngrok is a great tool for this purpose. Follow these steps to set up Ngrok and add the Ngrok test domain to the Clerk webhook endpoint:

**Steps**
1. Install Ngrok: If you haven't already, download and install Ngrok from [ngrok.com](https://ngrok.com/)
2. Start Ngrok: Open your terminal and run the following command to start Ngrok on port 3000
```bash
ngrok http 3000
```
3. Copy the Ngrok URL: Ngrok will provide you with a public URL, usually something like https://abcd1234.ngrok.io. Copy this URL.
4. Set the Webhook Endpoint in Clerk
   - Log in to your Clerk dashboard
   - Navigate to the "Webhooks" section
   - Add a new webhook or edit an existing one, and paste the Ngrok URL followed by your specific webhook path (e.g., /api/webhooks/clerk).
   - Save your changes.
5. Test Your Webhooks: With Ngrok running and the endpoint set, Clerk will now be able to send webhook events to your local development environment. Make sure your local server is running and can handle the incoming requests.

By following these steps, you can effectively test Clerk webhooks in your local environment, making development and debugging much easier.








