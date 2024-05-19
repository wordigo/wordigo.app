# Wordigo Frontend Monorepo

## About

Wordigo is a comprehensive browser extension project designed to enhance vocabulary learning on the web. It allows users to translate and add words to a personal dictionary directly while browsing.

## Technologies

- **Frontend**: React, Next.js, TailwindCSS, Shadcn, Redux, Next-SEO, Next-Auth
- **Monorepo Management**: TurboRepo

## Getting Started

### Prerequisites

- Node.js
- Yarn

## Environment Variables

Copy `.env.example` to `.env` and fill in the necessary variables to configure the application environment.

## Folder Structure

```plaintext
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
git clone https://github.com/your-repository-url
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

## Contributors

Thank you for your contributions! We appreciate all the contributions from the community.

<a href="https://github.com/wordigo/wordigo.app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wordigo/wordigo.app" />
</a>

## Contact

For questions or feedback, please reach out to us at [support@wordigo.app](mailto:support@wordigo.app).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/wordigo/wordigo.app/blob/main/LICENSE) file for details.

