// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./flowSchema";
export * from "./flowSchemaList";
export * from "./priorityLevelConfiguration";
export * from "./priorityLevelConfigurationList";

// Import resources to register:
import { FlowSchema } from "./flowSchema";
import { FlowSchemaList } from "./flowSchemaList";
import { PriorityLevelConfiguration } from "./priorityLevelConfiguration";
import { PriorityLevelConfigurationList } from "./priorityLevelConfigurationList";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1alpha1:FlowSchema":
                return new FlowSchema(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1alpha1:FlowSchemaList":
                return new FlowSchemaList(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1alpha1:PriorityLevelConfiguration":
                return new PriorityLevelConfiguration(name, <any>undefined, { urn })
            case "kubernetes:flowcontrol.apiserver.k8s.io/v1alpha1:PriorityLevelConfigurationList":
                return new PriorityLevelConfigurationList(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "flowcontrol.apiserver.k8s.io/v1alpha1", _module)
