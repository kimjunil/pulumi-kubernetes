// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Inputs.Core.V1
{

    /// <summary>
    /// EndpointAddress is a tuple that describes single IP address.
    /// </summary>
    public class EndpointAddressArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Hostname of this endpoint
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
        /// </summary>
        [Input("ip", required: true)]
        public Input<string> Ip { get; set; } = null!;

        /// <summary>
        /// Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
        /// </summary>
        [Input("nodeName")]
        public Input<string>? NodeName { get; set; }

        /// <summary>
        /// Reference to object providing the endpoint.
        /// </summary>
        [Input("targetRef")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Core.V1.ObjectReferenceArgs>? TargetRef { get; set; }

        public EndpointAddressArgs()
        {
        }
        public static new EndpointAddressArgs Empty => new EndpointAddressArgs();
    }
}
