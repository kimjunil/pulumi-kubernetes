// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { ControllerRevisionArgs } from "./controllerRevision";
export type ControllerRevision = import("./controllerRevision").ControllerRevision;
export const ControllerRevision: typeof import("./controllerRevision").ControllerRevision = null as any;

export { ControllerRevisionListArgs } from "./controllerRevisionList";
export type ControllerRevisionList = import("./controllerRevisionList").ControllerRevisionList;
export const ControllerRevisionList: typeof import("./controllerRevisionList").ControllerRevisionList = null as any;

export { ControllerRevisionPatchArgs } from "./controllerRevisionPatch";
export type ControllerRevisionPatch = import("./controllerRevisionPatch").ControllerRevisionPatch;
export const ControllerRevisionPatch: typeof import("./controllerRevisionPatch").ControllerRevisionPatch = null as any;

export { DaemonSetArgs } from "./daemonSet";
export type DaemonSet = import("./daemonSet").DaemonSet;
export const DaemonSet: typeof import("./daemonSet").DaemonSet = null as any;

export { DaemonSetListArgs } from "./daemonSetList";
export type DaemonSetList = import("./daemonSetList").DaemonSetList;
export const DaemonSetList: typeof import("./daemonSetList").DaemonSetList = null as any;

export { DaemonSetPatchArgs } from "./daemonSetPatch";
export type DaemonSetPatch = import("./daemonSetPatch").DaemonSetPatch;
export const DaemonSetPatch: typeof import("./daemonSetPatch").DaemonSetPatch = null as any;

export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;

export { DeploymentListArgs } from "./deploymentList";
export type DeploymentList = import("./deploymentList").DeploymentList;
export const DeploymentList: typeof import("./deploymentList").DeploymentList = null as any;

export { DeploymentPatchArgs } from "./deploymentPatch";
export type DeploymentPatch = import("./deploymentPatch").DeploymentPatch;
export const DeploymentPatch: typeof import("./deploymentPatch").DeploymentPatch = null as any;

export { ReplicaSetArgs } from "./replicaSet";
export type ReplicaSet = import("./replicaSet").ReplicaSet;
export const ReplicaSet: typeof import("./replicaSet").ReplicaSet = null as any;

export { ReplicaSetListArgs } from "./replicaSetList";
export type ReplicaSetList = import("./replicaSetList").ReplicaSetList;
export const ReplicaSetList: typeof import("./replicaSetList").ReplicaSetList = null as any;

export { ReplicaSetPatchArgs } from "./replicaSetPatch";
export type ReplicaSetPatch = import("./replicaSetPatch").ReplicaSetPatch;
export const ReplicaSetPatch: typeof import("./replicaSetPatch").ReplicaSetPatch = null as any;

export { StatefulSetArgs } from "./statefulSet";
export type StatefulSet = import("./statefulSet").StatefulSet;
export const StatefulSet: typeof import("./statefulSet").StatefulSet = null as any;

export { StatefulSetListArgs } from "./statefulSetList";
export type StatefulSetList = import("./statefulSetList").StatefulSetList;
export const StatefulSetList: typeof import("./statefulSetList").StatefulSetList = null as any;

export { StatefulSetPatchArgs } from "./statefulSetPatch";
export type StatefulSetPatch = import("./statefulSetPatch").StatefulSetPatch;
export const StatefulSetPatch: typeof import("./statefulSetPatch").StatefulSetPatch = null as any;

utilities.lazyLoad(exports, ["ControllerRevision"], () => require("./controllerRevision"));
utilities.lazyLoad(exports, ["ControllerRevisionList"], () => require("./controllerRevisionList"));
utilities.lazyLoad(exports, ["ControllerRevisionPatch"], () => require("./controllerRevisionPatch"));
utilities.lazyLoad(exports, ["DaemonSet"], () => require("./daemonSet"));
utilities.lazyLoad(exports, ["DaemonSetList"], () => require("./daemonSetList"));
utilities.lazyLoad(exports, ["DaemonSetPatch"], () => require("./daemonSetPatch"));
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));
utilities.lazyLoad(exports, ["DeploymentList"], () => require("./deploymentList"));
utilities.lazyLoad(exports, ["DeploymentPatch"], () => require("./deploymentPatch"));
utilities.lazyLoad(exports, ["ReplicaSet"], () => require("./replicaSet"));
utilities.lazyLoad(exports, ["ReplicaSetList"], () => require("./replicaSetList"));
utilities.lazyLoad(exports, ["ReplicaSetPatch"], () => require("./replicaSetPatch"));
utilities.lazyLoad(exports, ["StatefulSet"], () => require("./statefulSet"));
utilities.lazyLoad(exports, ["StatefulSetList"], () => require("./statefulSetList"));
utilities.lazyLoad(exports, ["StatefulSetPatch"], () => require("./statefulSetPatch"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:apps/v1beta2:ControllerRevision":
                return new ControllerRevision(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ControllerRevisionList":
                return new ControllerRevisionList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ControllerRevisionPatch":
                return new ControllerRevisionPatch(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DaemonSet":
                return new DaemonSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DaemonSetList":
                return new DaemonSetList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DaemonSetPatch":
                return new DaemonSetPatch(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DeploymentList":
                return new DeploymentList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:DeploymentPatch":
                return new DeploymentPatch(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ReplicaSet":
                return new ReplicaSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ReplicaSetList":
                return new ReplicaSetList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:ReplicaSetPatch":
                return new ReplicaSetPatch(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:StatefulSet":
                return new StatefulSet(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:StatefulSetList":
                return new StatefulSetList(name, <any>undefined, { urn })
            case "kubernetes:apps/v1beta2:StatefulSetPatch":
                return new StatefulSetPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "apps/v1beta2", _module)
