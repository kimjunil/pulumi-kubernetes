// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { FlowSchemaArgs } from "./flowSchema";
export type FlowSchema = import("./flowSchema").FlowSchema;
export const FlowSchema: typeof import("./flowSchema").FlowSchema = null as any;

export { FlowSchemaListArgs } from "./flowSchemaList";
export type FlowSchemaList = import("./flowSchemaList").FlowSchemaList;
export const FlowSchemaList: typeof import("./flowSchemaList").FlowSchemaList = null as any;

export { FlowSchemaPatchArgs } from "./flowSchemaPatch";
export type FlowSchemaPatch = import("./flowSchemaPatch").FlowSchemaPatch;
export const FlowSchemaPatch: typeof import("./flowSchemaPatch").FlowSchemaPatch = null as any;

export { PriorityLevelConfigurationArgs } from "./priorityLevelConfiguration";
export type PriorityLevelConfiguration = import("./priorityLevelConfiguration").PriorityLevelConfiguration;
export const PriorityLevelConfiguration: typeof import("./priorityLevelConfiguration").PriorityLevelConfiguration = null as any;

export { PriorityLevelConfigurationListArgs } from "./priorityLevelConfigurationList";
export type PriorityLevelConfigurationList = import("./priorityLevelConfigurationList").PriorityLevelConfigurationList;
export const PriorityLevelConfigurationList: typeof import("./priorityLevelConfigurationList").PriorityLevelConfigurationList = null as any;

export { PriorityLevelConfigurationPatchArgs } from "./priorityLevelConfigurationPatch";
export type PriorityLevelConfigurationPatch = import("./priorityLevelConfigurationPatch").PriorityLevelConfigurationPatch;
export const PriorityLevelConfigurationPatch: typeof import("./priorityLevelConfigurationPatch").PriorityLevelConfigurationPatch = null as any;

utilities.lazyLoad(exports, ["FlowSchema"], () => require("./flowSchema"));
utilities.lazyLoad(exports, ["FlowSchemaList"], () => require("./flowSchemaList"));
utilities.lazyLoad(exports, ["FlowSchemaPatch"], () => require("./flowSchemaPatch"));
utilities.lazyLoad(exports, ["PriorityLevelConfiguration"], () => require("./priorityLevelConfiguration"));
utilities.lazyLoad(exports, ["PriorityLevelConfigurationList"], () => require("./priorityLevelConfigurationList"));
utilities.lazyLoad(exports, ["PriorityLevelConfigurationPatch"], () => require("./priorityLevelConfigurationPatch"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:FlowSchema":
                return new FlowSchema(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:FlowSchemaList":
                return new FlowSchemaList(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:FlowSchemaPatch":
                return new FlowSchemaPatch(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:PriorityLevelConfiguration":
                return new PriorityLevelConfiguration(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:PriorityLevelConfigurationList":
                return new PriorityLevelConfigurationList(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1beta1:PriorityLevelConfigurationPatch":
                return new PriorityLevelConfigurationPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "flowcontrol.apiserver.k8s.io/v1beta1", _module)
