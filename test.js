const getVersions = require('./index');

// Replace with your GitHub Personal Access Token
const GITHUB_TOKEN = 'your_personal_access_token';

(async () => {
    try {
        const versions = await getVersions('facebook/react', GITHUB_TOKEN);
        console.log('Versions:', versions);
    } catch (error) {
        console.error('Error fetching versions:', error);
    }
})();
