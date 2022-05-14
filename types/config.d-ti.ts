/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ConfigFile = t.iface([], {
  "actions": t.opt(t.iface([], {
    "username": "string",
    "email": t.opt("string"),
  })),
  "prs": t.opt(t.iface([], {
    "drafts": t.opt(t.iface([], {
      "markInProgress": t.opt("boolean"),
      "markAwaitingReview": t.opt("boolean"),
    })),
    "reviews": t.opt(t.iface([], {
      "required": "integer",
      "maintainers": t.opt(t.iface([], {
        "required": "integer",
        "permissions": t.opt(t.union(t.lit("triage"), t.lit("write"), t.lit("maintain"), t.lit("admin"))),
      })),
    })),
    "invalidateClosed": t.opt("boolean"),
  })),
  "labels": t.opt(t.iface([], {
    "inProgress": t.opt("string"),
    "requestedChanges": t.opt("string"),
    "awaitingReview": t.opt("string"),
    "awaitingMerge": t.opt("string"),
    "invalid": t.opt("string"),
    "linked": t.opt(t.array("string")),
    "globs": t.opt(t.array(t.iface([], {
      "label": "string",
      "glob": "string",
      "matchAll": t.opt("boolean"),
    }))),
  })),
  "milestones": t.opt(t.array(t.iface([], {
    "label": "string",
    "milestone": "string",
  }))),
  "project": t.opt(t.iface([], {
    "id": "integer",
    "views": t.array(t.iface([], {
      "view": "string",
      "labels": t.array(t.iface([], {
        "label": "string",
        "column": "string",
      })),
    })),
  })),
});

const exportedTypeSuite: t.ITypeSuite = {
  ConfigFile,
};
export default exportedTypeSuite;
