const fillUser = async (User) => {
  try {
    await User.bulkCreate([
      {id: "1", name: "kevin2003123", admin: true, username: "kevin2003123", phoneNumber: "+1234567890", email: "kevin@example.com", state: true},
      {id: "2", name: "franklyn", admin: false, username: "franklyn", phoneNumber: "+9876543210", email: "franklyn@example.com", state: true},
      {id: "3", name: "John", admin: false, username: "John", phoneNumber: "+1555555555", email: "john@example.com", state: true},
      {id: "4", name: "Michael", admin: false, username: "Michael", phoneNumber: "+1666666666", email: "michael@example.com", state: true},
      {id: "5", name: "Emily", admin: false, username: "Emily", phoneNumber: "+1777777777", email: "emily@example.com", state: true},
      {id: "6", name: "Sophia", admin: false, username: "Sophia", phoneNumber: "+1888888888", email: "sophia@example.com", state: true},
      {id: "7", name: "Daniel", admin: false, username: "Daniel", phoneNumber: "+1999999999", email: "daniel@example.com", state: true},
      {id: "8", name: "Olivia", admin: false, username: "Olivia", phoneNumber: "+1123456789", email: "olivia@example.com", state: true},
      {id: "9", name: "Matthew", admin: false, username: "Matthew", phoneNumber: "+1098765432", email: "matthew@example.com", state: true},
      {id: "10", name: "Emma", admin: false, username: "Emma", phoneNumber: "+1155555555", email: "emma@example.com", state: true},
      {id: "11", name: "Andrew", admin: false, username: "Andrew", phoneNumber: "+1166666666", email: "andrew@example.com", state: true},
      {id: "12", name: "Jessica", admin: false, username: "Jessica", phoneNumber: "+1177777777", email: "jessica@example.com", state: true},
      {id: "13", name: "David", admin: false, username: "David", phoneNumber: "+1188888888", email: "david@example.com", state: true},
      {id: "14", name: "Sarah", admin: false, username: "Sarah", phoneNumber: "+1199999999", email: "sarah@example.com", state: true},
      {id: "15", name: "Benjamin", admin: false, username: "Benjamin", phoneNumber: "+1123456789", email: "benjamin@example.com", state: true},
      {id: "16", name: "Lily", admin: false, username: "Lily", phoneNumber: "+1098765432", email: "lily@example.com", state: true},
      {id: "17", name: "William", admin: false, username: "William", phoneNumber: "+1155555555", email: "william@example.com", state: true},
      {id:"sweBwHLTcwgoDB2HeTnYiwIUohM2", username: null, name: "Kevin Fangio Reyes López", phoneNumber:null, email:"202106488@p.uapa.edu.do", state:true, admin:true, superAdmin:true},
      {id:"rkkDXQLW6GcD8H12spb5vFSHUuf2", username: null, name: "Saraid Gutierrez Mateos", phoneNumber:null, email:"saraidmateos23@gmail.com", state:true, admin:true, superAdmin:true}
    ]
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillUser;
