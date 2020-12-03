// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./podDisruptionBudget";
export * from "./podDisruptionBudgetList";
export * from "./podSecurityPolicy";
export * from "./podSecurityPolicyList";

// Import resources to register:
import { PodDisruptionBudget } from "./podDisruptionBudget";
import { PodDisruptionBudgetList } from "./podDisruptionBudgetList";
import { PodSecurityPolicy } from "./podSecurityPolicy";
import { PodSecurityPolicyList } from "./podSecurityPolicyList";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:policy/v1beta1:PodDisruptionBudget":
                return new PodDisruptionBudget(name, <any>undefined, { urn })
            case "kubernetes:policy/v1beta1:PodDisruptionBudgetList":
                return new PodDisruptionBudgetList(name, <any>undefined, { urn })
            case "kubernetes:policy/v1beta1:PodSecurityPolicy":
                return new PodSecurityPolicy(name, <any>undefined, { urn })
            case "kubernetes:policy/v1beta1:PodSecurityPolicyList":
                return new PodSecurityPolicyList(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "policy/v1beta1", _module)
