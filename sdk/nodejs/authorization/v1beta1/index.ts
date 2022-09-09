// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { LocalSubjectAccessReviewArgs } from "./localSubjectAccessReview";
export type LocalSubjectAccessReview = import("./localSubjectAccessReview").LocalSubjectAccessReview;
export const LocalSubjectAccessReview: typeof import("./localSubjectAccessReview").LocalSubjectAccessReview = null as any;

export { LocalSubjectAccessReviewPatchArgs } from "./localSubjectAccessReviewPatch";
export type LocalSubjectAccessReviewPatch = import("./localSubjectAccessReviewPatch").LocalSubjectAccessReviewPatch;
export const LocalSubjectAccessReviewPatch: typeof import("./localSubjectAccessReviewPatch").LocalSubjectAccessReviewPatch = null as any;

export { SelfSubjectAccessReviewArgs } from "./selfSubjectAccessReview";
export type SelfSubjectAccessReview = import("./selfSubjectAccessReview").SelfSubjectAccessReview;
export const SelfSubjectAccessReview: typeof import("./selfSubjectAccessReview").SelfSubjectAccessReview = null as any;

export { SelfSubjectAccessReviewPatchArgs } from "./selfSubjectAccessReviewPatch";
export type SelfSubjectAccessReviewPatch = import("./selfSubjectAccessReviewPatch").SelfSubjectAccessReviewPatch;
export const SelfSubjectAccessReviewPatch: typeof import("./selfSubjectAccessReviewPatch").SelfSubjectAccessReviewPatch = null as any;

export { SelfSubjectRulesReviewArgs } from "./selfSubjectRulesReview";
export type SelfSubjectRulesReview = import("./selfSubjectRulesReview").SelfSubjectRulesReview;
export const SelfSubjectRulesReview: typeof import("./selfSubjectRulesReview").SelfSubjectRulesReview = null as any;

export { SelfSubjectRulesReviewPatchArgs } from "./selfSubjectRulesReviewPatch";
export type SelfSubjectRulesReviewPatch = import("./selfSubjectRulesReviewPatch").SelfSubjectRulesReviewPatch;
export const SelfSubjectRulesReviewPatch: typeof import("./selfSubjectRulesReviewPatch").SelfSubjectRulesReviewPatch = null as any;

export { SubjectAccessReviewArgs } from "./subjectAccessReview";
export type SubjectAccessReview = import("./subjectAccessReview").SubjectAccessReview;
export const SubjectAccessReview: typeof import("./subjectAccessReview").SubjectAccessReview = null as any;

export { SubjectAccessReviewPatchArgs } from "./subjectAccessReviewPatch";
export type SubjectAccessReviewPatch = import("./subjectAccessReviewPatch").SubjectAccessReviewPatch;
export const SubjectAccessReviewPatch: typeof import("./subjectAccessReviewPatch").SubjectAccessReviewPatch = null as any;

utilities.lazyLoad(exports, ["LocalSubjectAccessReview"], () => require("./localSubjectAccessReview"));
utilities.lazyLoad(exports, ["LocalSubjectAccessReviewPatch"], () => require("./localSubjectAccessReviewPatch"));
utilities.lazyLoad(exports, ["SelfSubjectAccessReview"], () => require("./selfSubjectAccessReview"));
utilities.lazyLoad(exports, ["SelfSubjectAccessReviewPatch"], () => require("./selfSubjectAccessReviewPatch"));
utilities.lazyLoad(exports, ["SelfSubjectRulesReview"], () => require("./selfSubjectRulesReview"));
utilities.lazyLoad(exports, ["SelfSubjectRulesReviewPatch"], () => require("./selfSubjectRulesReviewPatch"));
utilities.lazyLoad(exports, ["SubjectAccessReview"], () => require("./subjectAccessReview"));
utilities.lazyLoad(exports, ["SubjectAccessReviewPatch"], () => require("./subjectAccessReviewPatch"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:authorization.k8s.io/v1beta1:LocalSubjectAccessReview":
                return new LocalSubjectAccessReview(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:LocalSubjectAccessReviewPatch":
                return new LocalSubjectAccessReviewPatch(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SelfSubjectAccessReview":
                return new SelfSubjectAccessReview(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SelfSubjectAccessReviewPatch":
                return new SelfSubjectAccessReviewPatch(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SelfSubjectRulesReview":
                return new SelfSubjectRulesReview(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SelfSubjectRulesReviewPatch":
                return new SelfSubjectRulesReviewPatch(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SubjectAccessReview":
                return new SubjectAccessReview(name, <any>undefined, { urn })
            case "kubernetes:authorization.k8s.io/v1beta1:SubjectAccessReviewPatch":
                return new SubjectAccessReviewPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "authorization.k8s.io/v1beta1", _module)
