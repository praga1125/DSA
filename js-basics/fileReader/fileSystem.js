let fs = require('fs');

const addUser = (user) => {
    
    
}
const readUser = (regNo) => {
    fs.readFileSync('./users.txt', function (err, usersStr) {
        usersStr = usersStr+''
        let rawUsersContent = usersStr.split('\n');
        let user = null;
        const users = [];
        for(let i=1; i<rawUsersContent.length; i++) {
            const currentUser = rawUsersContent[i].split(',')
            if(currentUser[0] == regNo) {
                const [ regNum, name, dept, phNo ] = currentUser;
                user = {
                    regNo: regNum,
                    name,
                    dept,
                    phNo
                }
            }
        }
        // return user;
    })  
    console.log(user);
    // return user; 
}
// const updateUser = (regNo,newUser) => {
//         let changeUser = readUser(regNo);
//         if(changeUser.regNo == regNo){
//             changeUser = {
//                 regNo: newuser.regNum,
//                 name: newUser.name,
//                 dept: newUser.dept,
//                 phNo: newUser.phNo
//             }
//         }
// }

const user1 = readUser('1')
console.log(user1);
// const user2 = readUser('2')
// console.log(user2);
// newUser = {
//     regNum : '1',
//     name : 'viki',
//     dept : 'IT',
//     phNo : '9883745267'
// }
// updateUser('1',newUser);
