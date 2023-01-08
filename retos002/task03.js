export function printAdminSorted(inputusers) {
    let adminList = inputusers.filter((user) => user.rol == "admin");
    adminList.sort((a, b) => a.name.localeCompare(b.name));
    let adminListSorted = adminList.map((admin) => admin.name);
    console.log("los usuarios administradores son: " + adminListSorted);
    return adminList;
  }
  
  