# CS512: Data Mining Principles

This is a repository for the website of CS512: Data Mining Principles at University of Illinois at Urbana-Champaign, instructed by Prof. Jiaxuan You. The website is developed with `node.js` and React.

## Install

+ Install `node.js`. For Mac users, run the following code in your terminal.

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 21
# verifies the right Node.js version is in the environment
node -v
# verifies the right npm version is in the environment
npm -v
```

+ Install dependencies. Enter the root directory and run the following code in your terminal.

```bash
npm install
```

## Develop

+ To change the content of different sessions, edit the code in `src`. 
+ To start a server in the developing environment, run the following code. In default settings, we can browse the website at http://localhost:3000/CS512/.

```bash
npm start
```

## Project Structure

The website is built with React and includes the following main components:

+ **MainBody**: Homepage with course title and description
+ **Logistics**: Course schedule, location, office hours, and contact information
+ **Content**: Course description, prerequisites, materials, and references
+ **Instructors**: Faculty and teaching assistant information
+ **Schedule**: Detailed weekly course schedule
+ **Grading**: Course grading policy and breakdown

## Styling

The website uses:
+ **SCSS** for advanced CSS features
+ **Bootstrap** for responsive grid layout
+ **Custom fonts**: Montserrat for headings, Source Sans for body text
+ **Modern design**: Clean typography, consistent spacing, and professional color scheme

## Deploy

+ To deploy the changes to the course website, run the following code in your terminal. The whole website will be **automatically** deployed at https://ulab-uiuc.github.io/CS512/.

```bash
npm run deploy
```
