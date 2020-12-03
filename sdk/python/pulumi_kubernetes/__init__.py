# coding=utf-8
# *** WARNING: this file was generated by pulumigen. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .kustomize import *
from .provider import *
from .yaml import *

# Make subpackages available:
from . import (
    admissionregistration,
    apiextensions,
    apiregistration,
    apps,
    auditregistration,
    authentication,
    authorization,
    autoscaling,
    batch,
    certificates,
    coordination,
    core,
    discovery,
    events,
    extensions,
    flowcontrol,
    helm,
    meta,
    networking,
    node,
    policy,
    rbac,
    scheduling,
    settings,
    storage,
)

def _register_module():
    import pulumi
    from . import _utilities


    class Package(pulumi.runtime.ResourcePackage):
        _version = _utilities.get_semver_version()

        def version(self):
            return Package._version

        def construct_provider(self, name: str, typ: str, urn: str) -> pulumi.ProviderResource:
            if typ != "pulumi:providers:kubernetes":
                raise Exception(f"unknown provider type {typ}")
            return Provider(name, pulumi.ResourceOptions(urn=urn))


    pulumi.runtime.register_resource_package("kubernetes", Package())

_register_module()
