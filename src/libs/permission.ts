// function for hasPermission for validate the Username,role and permission
function hasPermission(moduleName,role,permissionType){
     
      if(!moduleName.hasOwnProperty(permissionType)){
          console.log("false");
      }
      else if(moduleName[permissionType].includes(role)|| (role=='head-trainer')){
          console.log("true");
      }
      else{
          console.log("false");
      }
      //return boolean ;


   }
  /* hasPermission(permissions.getUsers,'head-trainer','all');
   hasPermission(permissions.getUsers,'head-trainer','read');
   hasPermission(permissions.getUsers1,'trainer','write');
   hasPermission(permissions.getUsers1,'trainer','delete');*/
 
//export {permissions};
export {hasPermission};