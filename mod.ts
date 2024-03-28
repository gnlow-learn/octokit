import { Octokit } from "https://esm.sh/octokit@3.1.2"

const octokit = new Octokit()

const result = await octokit.rest.repos.getContent({
    owner: "gnlow-learn",
    repo: "octokit",
    path: "README.md"
})

console.log(
    result
)