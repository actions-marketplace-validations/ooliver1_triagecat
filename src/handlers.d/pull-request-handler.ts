// SPDX-License-Identifier: MIT

import { getInput } from "@actions/core";
import { context, getOctokit } from "@actions/github";
import { PullRequestEvent } from "@octokit/webhooks-types";

export default async function pullRequestHandler(config: ConfigFile) {
  const payload = context.payload as PullRequestEvent;
  const pr = payload.pull_request;

  if (payload.action in ["opened", "converted_to_draft"] && pr.draft == false) {
    await draftHandler(config);
  } else if (payload.action in ["ready_for_review"]) {
    await readyForReviewHandler(config);
  }
}

async function draftHandler(config: ConfigFile) {
  if (config.prs?.drafts?.markInProgress) {
    if (config.labels?.inProgress) {
      const client = getOctokit(getInput("TOKEN", { required: true }));

      client.rest.issues.addLabels({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        labels: [config.labels.inProgress],
      });
    } else {
      throw new Error(
        "Cannot mark drafts in progress without specifying `labels.inProgress`"
      );
    }
  }
}
