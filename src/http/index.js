import apis from './wrapper';

export const {
    //系统相关
    userLogin,
    getPlatformAdminList,
    addPlatformAdmin,
    updatePlatformAdmin,
    delPlatformAdmin,
    addPlatformRole,
    getPlatformRoles,
    delPlatformRole,
    getPermissions,
    addPermission,
    delPermission,
    updatePermission,
    setPlatformRolePermission,
    getPermissionByRoleID,
    setPlatformAdminRole,
    getImgValidate,
    //demo示例
    getListDemo,
    addDemo,
    updateDemo,
    deleteDemo
} = apis;