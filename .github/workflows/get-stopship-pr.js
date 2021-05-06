require('dotenv').config();

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_TOKEN || process.env.GITHUB_TOKEN });

async function run() {
    const pulls = await octokit.paginate(octokit.pulls.list, {
        owner: 'descriptinc',
        repo: 'descript-web-v2',
    });
    const stopshipPr = pulls.find((pull) => pull.head.ref === 'stopship');

    console.log(stopshipPr.number);
}

run();
