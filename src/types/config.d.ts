// SPDX-License-Identifier: MIT

declare interface ConfigFile {
  actions?: {
    username: string;
    email?: string;
  };
  prs?: {
    drafts?: {
      markInProgress?: boolean;
      markAwaitingReview?: boolean;
    };
    reviews?: {
      required: number;
      maintainers?: {
        required: number;
        permissions?: "triage" | "write" | "maintain" | "admin";
      };
    };
    invalidateClosed?: boolean;
  };

  labels?: {
    inProgress?: string;
    requestedChanges?: string;
    awaitingReview?: string;
    awaitingMerge?: string;
    invalid?: string;
    linked?: Array<string>;
    globs?: Array<{
      label: string;
      glob: string;
      matchAll?: boolean;
    }>;
  };

  milestones?: Array<{
    label: string;
    milestone: string;
  }>;

  project?: {
    id: number;
    views: Array<{
      view: string;
      labels: Array<{
        label: string;
        column: string;
      }>;
    }>;
  };
}