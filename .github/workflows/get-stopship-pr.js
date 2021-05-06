require('dotenv').config();

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_TOKEN || process.env.GITHUB_TOKEN });

async function run() {
    const pulls = await octokit.paginate(octokit.pulls.list, {
        owner: 'hipstersmoothie',
        repo: 'stopship-actions-test',
    });
    const stopshipPr = pulls.find((pull) => pull.head.ref === 'stopship');

    if (stopshipPr?.number) {
      console.log(stopshipPr.number);
    }
}

run();
