# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-09-07

### Added

- Strict TypeScript types for profile configuration, social links and browser interactions.
- Reproducible development dependencies and a dedicated type checking command.

### Changed

- Edit `profile.ts` instead of `profile.js` to customize the profile.
- Build the site before serving it; Vercel now publishes compiled files from `dist/`.
- Existing site checks now validate the compiled output.

## [1.1.1] - 2026-09-07

### Fixed

- Updated the profile header and favicon monogram from IR to IO.
- Removed the owner's name from the default page description.

## [1.1.0] - 2026-09-07

### Added

- Optional profile tag controlled by the central configuration.
- Configuration examples for hidden and custom tags.
- Automated coverage for optional tags and link captions.

### Changed

- Link captions no longer reserve space when omitted.
- Default profile content now reflects the project owner's current identity and social destinations.
- Profile artwork now uses the customized PNG portrait.

## [1.0.0] - 2026-09-07

### Added

- Responsive photographic social link profile.
- Central configuration for identity and social destinations.
- Native sharing with a clipboard fallback.
- Accessible navigation, metadata, favicon and branded error page.
- Dependency free validation with the Node.js test runner.
