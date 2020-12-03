// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./tokenRequest";
export * from "./tokenReview";

// Import resources to register:
import { TokenRequest } from "./tokenRequest";
import { TokenReview } from "./tokenReview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:authentication.k8s.io/v1:TokenRequest":
                return new TokenRequest(name, <any>undefined, { urn })
            case "kubernetes:authentication.k8s.io/v1:TokenReview":
                return new TokenReview(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "authentication.k8s.io/v1", _module)
