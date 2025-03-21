const https = require('https');
const semver = require('semver');

/**
 * Fetch GitHub repository versions.
 * @param {string} repo - Repository name in "owner/repo" format.
 * @param {string} authToken - GitHub Personal Access Token.
 * @returns {Promise<string[]>} - Sorted list of semantic versions.
 */
function getVersions(repo, authToken) {
    return new Promise((resolve, reject) => {
        if (!authToken) {
            return reject(new Error('GitHub API token is required.'));
        }

        const options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: `/repos/${repo}/tags`,
            headers: {
                'User-Agent': 'github-version-fetcher',
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${authToken}`
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            if (res.statusCode !== 200) {
                reject(new Error(`GitHub API request failed with status: ${res.statusCode}`));
                return;
            }

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const tags = JSON.parse(data);
                    const versions = tags
                        .map(tag => tag.name)
                        .filter(semver.valid)
                        .sort(semver.rcompare);

                    resolve(versions);
                } catch (error) {
                    reject(new Error('Error parsing response data.'));
                }
            });
        });

        req.on('error', (error) => reject(error));
        req.end();
    });
}

module.exports = getVersions;
