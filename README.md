
# Boilerplate for Backend Microservices Developed in NodeJS
## Onboarding for Windows

1. Download nvm-setup.exe ([link](https://github.com/coreybutler/nvm-windows/releases)).
2. Install nvm, and you have two options:
   - Install it directly on your disk (C:/)
   - Install it as a user
3. During the installation, you might be prompted that a Node version already exists,
and whether npm should maintain it. Press yes in this case.
4. Open a terminal.
   - If `nvm` is not recognized in VS Code, then open a regular **PowerShell** / **Bash** terminal.
5. Install **Node version 19.2.0** using: `nvm install 19.2.0` (not tested for other versions as of now).
   - If `nvm` is still not recognized, and you've installed `nvm` as a user,  
   then open a terminal as an administrator from your C:/ directory and execute the command there.
6. Run `npm install` in your repository.
7. Run `npm run setup-local-windows` in your repository.

#### Working with Docker on Windows
1. Ensure that **virtualization** is enabled in your BIOS.
2. Install Docker Desktop on your computer ([link](https://www.docker.com/products/docker-desktop/)).
3. Run `docker compose build` in your repository.
4. Run `docker compose up` in your repository.

When making changes in any of the Docker files, use `npm run force-build:docker`.

## Onboarding for Linux

1. Download and install nvm using `sudo apt-get install nvm` + `sudo apt update` (or an alternative for your distro).
2. Open a terminal.
3. Install **Node version 19.2.0** using: `nvm install 19.2.0`.
4. Run `npm install` in your repository.
5. Run `npm run setup-local-linux` in your repository.

#### Working with Docker on Linux
1. Ensure that virtualization is enabled in your BIOS.
2. Install Docker Desktop on your computer / or install Docker via the CLI.
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Guide for Installing via Repo](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
3. Run `docker compose build` in your repository.
4. Run `docker compose up` in your repository.

When making changes in any of the Docker files, use `npm run force-build:docker`.

#### Arch-specific Issues
If Husky isn't working when committing and pushing, try the following:
1. Create a new config file in your home folder using: `touch ~/.huskyrc`.
2. Open the file with nano/vim/code (e.g., `nano ~/.huskyrc`).
3. Paste the following into the file:
   ``` 
   # ~/.huskyrc 
   # This loads nvm.sh and sets the correct PATH before running the hook
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```
## Testing
During your unit test development, you can run `npm run test:local`.
This command runs your unit tests and then generates a **code coverage report** for you.
This report automatically opens in your browser and provides insights into your unit test outcomes.

## Environment Variables
If you want to use local environment variables, you can add them to the `start:local` script
found in the `package.json`.

For using environment variables in Docker, add them to your `Dockerfile`.
On AWS, we use the **parameter store** (more explanation will follow at a later point).

You also need to add the environment variables to `jest.setup.ts` if you need them during
your unit tests. Also, expand the `environment.variables.test.ts` test accordingly.

## Adding the Renovate Bot
Renovate automatically keeps track of package updates and creates pull requests for them.
To add the Renovate bot to your project, go to the installations section under your profile settings and click **configure** next to Renovate.
Scroll down, then select your repository under **select repositories**, and finally, click **save**.

## Nice-to-Haves for Development

##### Auto ESLint Detection & Formatting
Install the [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) plugin and create a .vscode folder with a settings.json containing:

```
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnPaste": false, // required 
  "editor.formatOnType": false, // required
  "editor.formatOnSave": true, // optional 
  "editor.formatOnSaveMode": "file", // required to format on save
  "files.autoSave": "onFocusChange",
  "files.eol": "\n" // optional but recommended
}
```

You can adjust the settings according to your preferences.
##### VSCode Extensions:
 - Markdown Preview Enhanced
 - Docker
 - Dev Containers

##### GitHub:
 - Material Icons for GitHub