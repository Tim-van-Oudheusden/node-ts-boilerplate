# Boilerplate voor backend microservices ontwikkeld in NodeJS
## Onboarding voor Windows

1. Download nvm-setup.exe ([link](https://github.com/coreybutler/nvm-windows/releases)).
2. Installeer nvm, je hebt hierbij twee opties:
   - Installeer het direct op je schijf (C:/)
   - Installeer het als user
3. Tijdens de installatie wordt waarschijnlijk aangegeven dat er al een node versie is,   
en of npm deze moet onderhouden, druk hier op ja.
4. Open een terminal.
   - Als in vs-code `nvm` niet herkend wordt, open dan een normaal **powershell** / **bash** terminal.
5. Installeer **Node versie 19.2.0** met: `nvm install 19.2.0`.
   - Als `nvm` nog steeds niet herkend wordt, en je hebt `nvm` als user geïnstalleerd,  
   open dan een terminal als administrator vanuit je C:/ directory en voer het commando daar uit.
6. Run `npm install` in je repository.
7. Run `npm run setup-local-windows` in je repository.

#### Werken met docker op Windows
1. Zorg ervoor dat **virtualisatie** ingeschakeld is in je bios.
2. Installeer docker desktop op je computer ([link](https://www.docker.com/products/docker-desktop/)).
3. Run `docker compose build` in je repository.
4. Run `docker compose up` in je repository.

Wanneer je changes maakt in een van de docker files, maak dan gebruik van `npm run force-build:docker`.

## Onboarding voor Linux

1. Download en installer nvm `sudo apt-get install nvm` + `sudo apt update` (of alternatief voor je distro).
4. Open een terminal .
5. Installeer **Node versie 19.2.0** met: `nvm install 19.2.0`.
6. Run `npm install` in je repository.
7. Run `npm run setup-local-linux` in je repository.

#### Werken met docker op Linux
1. Zorg ervoor dat je virtualisatie ingeschakeld is in je bios.
2. Installeer docker desktop op je computer / of installeer docker via de cli. 
   - [docker desktop](https://www.docker.com/products/docker-desktop/) of [guide voor installeren via repo](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
3. Run `docker compose build` in je repository.
4. Run `docker compose up` in je repository.

Wanneer je changes maakt in de docker files, maak dan gebruik van `npm run force-build:docker`.

#### Arch specifieke issues
Werkt Husky niet bij het commiten en pushen? Probeer dan het volgende:
1. Maak een nieuw config bestand in je home folder met: `touch ~/.huskyrc`.
2. Open het bestand met nano/vim/code (bv. `nano ~/.huskyrc`).
3. Plak het volgende in het bestand:
   ``` 
   #~/.huskyrc 
   #This loads nvm.sh and sets the correct PATH before running hook export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```
## Testen
Tijdens het ontwikkelen van je unit-tests kan je `npm run test:local` draaien.
Dit commando draait je unit-tests en genereert vervolgens een **code coverage rapport** voor je.
Dit rapport wordt automatisch geopent in je browser en bied inzage in de uitkomsten van je unit-tests.

## Environment variabelen
Als je lokaal environment variabelen wil gebruiken, kan je ze toevoegen aan het script `start:local`
dit is te vinden in de `package.json`.

Als je in docker environment variabelen wil gebruiken, kan je ze toevoegen aan je `Dockerfile`.
Op AWS maken we gebruik van de **parameter store** (uitleg hierover volgt nog op een later punt).

De environment variabelen moet je ook toevoegen aan `jest.setup.ts` als je ze nodig hebt tijdens
je unit-tests. Breid hierbij ook meteen de `environment.variables.test.ts` test uit.

## Renovate bot toevoegen
Renovate houdt automatisch package updates voor je bij en maakt hiervoor een pull request aan.
Om de renovate bot aan je project toe te voegen, ga je naar de [organisatie app pagina](https://github.com/organizations/debitroom-software/settings/installations) en druk je op **configure** bij Renovate.
Scroll naar beneden en kies vervolgens je repo bij **select repositories** en druk daarna op **save**.

## Nice to have(s) voor ontwikkeling

##### Auto ESLint herkenning & formattering
Installeer de plugin [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) en maak een .vscode folder aan met daarin een settings.json met het volgende:

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

Je kan de settings aanpassen naar je eigen voorkeuren.
##### VSCode extensies:
 - Markdown preview enhanced
 - Docker
 - Dev containers

##### GitHub:
 - Material icons for GitHub
