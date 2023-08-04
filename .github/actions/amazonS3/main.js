const core = require('@actions/core');
const github = require('@actions/core');
const exec = require('@actions/core');



function run() {
    console.log
    core.notice('Hello from my custom Javasscript action!')
}

run();