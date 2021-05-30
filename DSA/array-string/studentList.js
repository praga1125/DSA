/*
    studentList = [{name : 'vignesh'},{name : 'asss'},{name : 'sssd'},{name : 'ddddd'}]
    departments = { IT: [], CSE: [], ECE: [] }
    departments = {
    'IT': ['Vignesh'],
    'CSE': [],
    'ECE': []
}

addStudentToDept('Vignesh', 'IT')
*/

class Student {
	constructor() {
		this.studentList = [];
		const departments = {
			IT: [],
			CSE: [],
			ECE: [],
		};
		this.department = new Department(departments);
	}
	addStudent(name, age, dept) {
		this.studentList.push({ name, age, dept });
		this.department.addStudentToDept(name, dept);
	}

	viewAll() {
		console.table(this.studentList);
	}
	viewDepartmentWiseStudentList() {
		this.department.viewDepartmentWiseStudentList();
	}
}

class Department {
	constructor(departments) {
		this.departments = departments;
	}

	addStudentToDept(name, dept) {
		this.departments[dept].push(name);
	}

	viewDepartmentWiseStudentList() {
		console.table(this.departments);
	}
}

const student = new Student();
student.addStudent("Vikkiiii", 23, "IT");
student.addStudent("Vikk111ii", 24, "CSE");
student.addStudent("Vikki22221i", 2553, "IT");
student.addStudent("Vikkiiii3333", 255553, "ECE");

student.viewAll();
console.log("----------------------------------------");
student.viewDepartmentWiseStudentList();
