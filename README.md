# Wordigo Frontend Monorepo

## About

Wordigo is a browser extension project aimed at enhancing users' vocabulary learning experience on the web.

## Technologies

- **Frontend**: React, Next.js, TailwindCSS, Shadcn, Redux, Next-SEO, Next-Auth
- **Monorepo Management**: TurboRepo

## Getting Started

### Prerequisites

- Node.js
- Yarn

## Envrioment Variables

Copy `.env.example` to `.env` and fill in the variables.

## **Folder Structure**

```
wordigo/
├── apps/
│   └── next/                          # Main web application built with Next.js.
├── packages/
│   ├── ui/                            # Reusable UI components built with Shadcn and TailwindCSS.
│   ├── config/                        # Shared configuration files and utilities.
│   ├── tsconfig/                      # Shared TypeScript configuration settings.
│   └── common/                        # Shared utilities and common code.
├── .env.example                       # Example environment variables file.
├── .gitignore                         # Specifies intentionally untracked files to ignore in Git.
├── LICENSE                            # License file for the project.
├── package.json                       # Project metadata and dependencies.
├── yarn.lock                          # Yarn lock file to lock down versions of package dependencies.
├── README.md                          # Project documentation and setup guide.
├── .prettierrc.json                   # Prettier configuration file for code formatting.
└── turbo.json                         # TurboRepo configuration for managing the monorepo.
```

### Installation

1. Clone the repository:

```bash
git clone
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```
