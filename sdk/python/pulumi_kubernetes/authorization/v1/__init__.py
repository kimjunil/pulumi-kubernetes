# coding=utf-8
# *** WARNING: this file was generated by pulumigen. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .LocalSubjectAccessReview import *
from .SelfSubjectAccessReview import *
from .SelfSubjectRulesReview import *
from .SubjectAccessReview import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from ... import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "kubernetes:authorization.k8s.io/v1:LocalSubjectAccessReview":
                return LocalSubjectAccessReview(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "kubernetes:authorization.k8s.io/v1:SelfSubjectAccessReview":
                return SelfSubjectAccessReview(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "kubernetes:authorization.k8s.io/v1:SelfSubjectRulesReview":
                return SelfSubjectRulesReview(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "kubernetes:authorization.k8s.io/v1:SubjectAccessReview":
                return SubjectAccessReview(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("kubernetes", "authorization.k8s.io/v1", _module_instance)

_register_module()
