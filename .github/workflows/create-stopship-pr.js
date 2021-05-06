require('dotenv').config();

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_TOKEN || process.env.GITHUB_TOKEN });

async function createStopshipPr() {
    await octokit.pulls.create({
      owner: 'hipstersmoothie',
      repo: 'stopship-actions-test',
      title: "🛑 Stopship!",
      base: "main",
      head: "stopship"
    })
}

createStopshipPr();
