// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./lease";
export * from "./leaseList";

// Import resources to register:
import { Lease } from "./lease";
import { LeaseList } from "./leaseList";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:coordination.k8s.io/v1:Lease":
                return new Lease(name, <any>undefined, { urn })
            case "kubernetes:coordination.k8s.io/v1:LeaseList":
                return new LeaseList(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "coordination.k8s.io/v1", _module)
