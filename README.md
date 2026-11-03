# Spicetify Music Scheduler

A [Spicetify](https://spicetify.app) extension that starts music on a schedule: pick a playlist, a time and the weekdays, and the extension plays it for you, with volume control and smooth fades.

> **Status: in development.** None of the features below are implemented yet. This README describes the goal and the plan.

## Planned features

- Start a playlist at a chosen time on selected weekdays
- Set the volume when a schedule starts
- Fade the volume in and out

## Requirements

- Spotify desktop client with [Spicetify](https://spicetify.app) installed
- [Node.js](https://nodejs.org) and npm (for development only)

## Limitations

- Spicetify extensions run alongside the Spotify desktop client, so a schedule can only trigger while Spotify is open.
- Whether Spotify allows an extension to start playback automatically still has to be tested.

## Installation

There is no release yet. Installation instructions will be added with the first release.

Once a release exists, the manual installation will follow the standard Spicetify way:

1. Copy the built extension file into your Spicetify `Extensions` folder:
   - Linux / macOS: `~/.config/spicetify/Extensions/`
   - Windows: `%appdata%\spicetify\Extensions\`
2. Enable it with `spicetify config extensions` followed by the file name.
3. Run `spicetify apply`.

## Development

The project is written in TypeScript and was generated with [Spicetify Creator](https://spicetify.app/docs/development/spicetify-creator/the-basics) (`npx create-spicetify-app`).

1. Clone this repository.
2. Install the dependencies with `npm install`.
3. See `package.json` for the available scripts.

To see the output of the extension, open the developer tools of the Spotify desktop client with `Ctrl+Shift+I` and check the console.

## Roadmap

- [x] Repository and project scaffold
- [x] Hello-world extension loaded in Spicetify
- [ ] Scheduling logic, separated from the Spicetify calls and covered by unit tests
- [ ] Playback control: start a playlist, set the volume, fade in and out
- [ ] User interface to manage schedules
- [ ] Continuous integration with GitHub Actions (lint, test, build)
- [ ] Automated releases from version tags
- [ ] Publication in the Spicetify Marketplace
