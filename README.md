# Registration & Login Form

A modern and responsive registration form built with React, TypeScript, React Hook Form, and Zod.

## Features

- React + TypeScript
- React Hook Form
- Zod validation
- Form validation
- Error messages
- Select, Checkbox & Radio
- Profile image upload
- Form reset
- Responsive modern UI

## Tech Stack

- React
- TypeScript
- Vite
- React Hook Form
- Zod
- @hookform/resolvers
- CSS

## Step 4 — Forms + Validation

### Learning Topics

1. Controlled Components
2. Form State
3. Input Handling
4. Form Submit
5. TypeScript Form Types
6. React Hook Form
7. Form Validation
8. Zod
9. React Hook Form + Zod
10. Error Messages
11. Input Validation
12. Select, Checkbox & Radio
13. File Upload
14. Form Reset

### Practice Project

**Registration & Login Form**

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
registration-login-form/
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Validation

The form uses Zod for validation.

- Name: minimum 3 characters
- Email: valid email required
- Password: minimum 6 characters
- Gender: required
- Terms: must be accepted
- Profile Image: required

## Form Flow

```text
User fills form
      ↓
React Hook Form
      ↓
Zod Validation
      ↓
Valid → onSubmit()
      ↓
Form Data
```

## Author

React + TypeScript Practice Project