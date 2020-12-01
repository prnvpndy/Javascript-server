
function hasPermission(moduleName, role, permissionType) {
      if (! moduleName.hasOwnProperty(permissionType)) {
         
      }
      else if (moduleName[permissionType].includes(role) || ( role === 'head-trainer' )) {
         }
      else {
         }
      return true ;
   }
 
export { hasPermission };