# github-version-fetcher
Fetch all semantically versioned tags of a GitHub repository using your own GitHub API token.


<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>

# Features  
✅ Fetches **release tags** from a GitHub repo.  
✅ Filters **only semantic versions** (e.g., `v1.2.3`).  
✅ Returns sorted versions **from latest to oldest**.  
✅ Uses **GitHub API v3** for fetching data. 

# Installation

```shell
npm i github-version-fetcher
``` 

# Importing

###  Importing in CommonJS (Node.js Default)
```js
const getVersions = require('github-version-fetcher');
```


### Importing in ES Modules (ECMAScript Imports)

```js
import getVersions from 'github-version-fetcher';
```


# Usage

```js
// Replace with your GitHub Personal Access Token
const GITHUB_TOKEN = 'your_personal_access_token';

(async () => {
    try {
        const versions = await getVersions('nodejs/node', GITHUB_TOKEN);
        console.log('Versions:', versions);
    } catch (error) {
        console.error('Error fetching versions:', error);
    }
})();

```


# GitHub Authentication
GitHub limits API requests for unauthenticated users. To prevent failures, use a GitHub Personal Access Token (PAT).

### How to Get a GitHub Token?

- Go to [GitHub Developer Settings](https://github.com/settings/tokens)
- Click "Generate new token (classic)".
- Select public_repo scope.
- Copy the token and use it in your code.