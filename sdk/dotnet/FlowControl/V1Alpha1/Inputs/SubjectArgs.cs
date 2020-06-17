// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Inputs.FlowControl.V1Alpha1
{

    /// <summary>
    /// Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
    /// </summary>
    public class SubjectArgs : Pulumi.ResourceArgs
    {
        [Input("group")]
        public Input<Pulumi.Kubernetes.Types.Inputs.FlowControl.V1Alpha1.GroupSubjectArgs>? Group { get; set; }

        /// <summary>
        /// Required
        /// </summary>
        [Input("kind", required: true)]
        public Input<string> Kind { get; set; } = null!;

        [Input("serviceAccount")]
        public Input<Pulumi.Kubernetes.Types.Inputs.FlowControl.V1Alpha1.ServiceAccountSubjectArgs>? ServiceAccount { get; set; }

        [Input("user")]
        public Input<Pulumi.Kubernetes.Types.Inputs.FlowControl.V1Alpha1.UserSubjectArgs>? User { get; set; }

        public SubjectArgs()
        {
        }
    }
}