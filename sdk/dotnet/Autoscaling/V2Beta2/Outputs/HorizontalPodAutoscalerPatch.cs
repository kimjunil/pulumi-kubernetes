// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2
{

    /// <summary>
    /// HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
    /// </summary>
    [OutputType]
    public sealed class HorizontalPodAutoscalerPatch
    {
        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        public readonly string ApiVersion;
        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Meta.V1.ObjectMetaPatch Metadata;
        /// <summary>
        /// spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.HorizontalPodAutoscalerSpecPatch Spec;
        /// <summary>
        /// status is the current information about the autoscaler.
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.HorizontalPodAutoscalerStatusPatch Status;

        [OutputConstructor]
        private HorizontalPodAutoscalerPatch(
            string apiVersion,

            string kind,

            Pulumi.Kubernetes.Types.Outputs.Meta.V1.ObjectMetaPatch metadata,

            Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.HorizontalPodAutoscalerSpecPatch spec,

            Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.HorizontalPodAutoscalerStatusPatch status)
        {
            ApiVersion = apiVersion;
            Kind = kind;
            Metadata = metadata;
            Spec = spec;
            Status = status;
        }
    }
}
