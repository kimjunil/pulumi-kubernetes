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
    /// AttachedVolume describes a volume attached to a node
    /// </summary>
    public class AttachedVolumePatchArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// DevicePath represents the device path where the volume should be available
        /// </summary>
        [Input("devicePath")]
        public Input<string>? DevicePath { get; set; }

        /// <summary>
        /// Name of the attached volume
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public AttachedVolumePatchArgs()
        {
        }
    }
}