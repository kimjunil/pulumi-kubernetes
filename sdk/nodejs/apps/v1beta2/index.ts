// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./controllerRevision";
export * from "./controllerRevisionList";
export * from "./daemonSet";
export * from "./daemonSetList";
export * from "./deployment";
export * from "./deploymentList";
export * from "./replicaSet";
export * from "./replicaSetList";
export * from "./statefulSet";
export * from "./statefulSetList";

// Import resources to register:
import { ControllerRevision } from "./controllerRevision";
import { ControllerRevisionList } from "./controllerRevisionList";
import { DaemonSet } from "./daemonSet";
import { DaemonSetList } from "./daemonSetList";
import { Deployment } from "./deployment";
import { DeploymentList } from "./deploymentList";
import { ReplicaSet } from "./replicaSet";
import { ReplicaSetList } from "./replicaSetList";
import { StatefulSet } from "./statefulSet";
import { StatefulSetList } from "./statefulSetList";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:apps/v1beta2:ControllerRevision":
                return new ControllerRevision(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ControllerRevisionList":
                return new ControllerRevisionList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DaemonSet":
                return new DaemonSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DaemonSetList":
                return new DaemonSetList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DeploymentList":
                return new DeploymentList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ReplicaSet":
                return new ReplicaSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ReplicaSetList":
                return new ReplicaSetList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:StatefulSet":
                return new StatefulSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:StatefulSetList":
                return new StatefulSetList(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "apps/v1beta2", _module)
