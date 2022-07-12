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
    /// ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
    /// </summary>
    [OutputType]
    public sealed class ExternalMetricSourcePatch
    {
        /// <summary>
        /// metric identifies the target metric by name and selector
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.MetricIdentifierPatch Metric;
        /// <summary>
        /// target specifies the target value for the given metric
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.MetricTargetPatch Target;

        [OutputConstructor]
        private ExternalMetricSourcePatch(
            Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.MetricIdentifierPatch metric,

            Pulumi.Kubernetes.Types.Outputs.Autoscaling.V2Beta2.MetricTargetPatch target)
        {
            Metric = metric;
            Target = target;
        }
    }
}