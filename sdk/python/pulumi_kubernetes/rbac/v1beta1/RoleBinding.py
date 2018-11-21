import pulumi
import pulumi.runtime

from ... import tables

class RoleBinding(pulumi.CustomResource):
    """
    RoleBinding references a role, but does not contain it.  It can reference a Role in the same
    namespace or a ClusterRole in the global namespace. It adds who information via Subjects and
    namespace information by which namespace it exists in.  RoleBindings in a given namespace only
    have effect in that namespace.
    """
    def __init__(self, __name__, __opts__=None, metadata=None, role_ref=None, subjects=None):
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'rbac.authorization.k8s.io/v1beta1'
        __props__['kind'] = 'RoleBinding'
        if not roleRef:
            raise TypeError('Missing required property roleRef')
        __props__['roleRef'] = role_ref
        __props__['metadata'] = metadata
        __props__['subjects'] = subjects

        super(RoleBinding, self).__init__(
            "kubernetes:rbac.authorization.k8s.io/v1beta1:RoleBinding",
            __name__,
            __props__,
            __opts__)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
