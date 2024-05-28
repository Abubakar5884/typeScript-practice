// OBJECTS =>

// let studentData = {
//     name: "Abubakar",
//     age: 17,
//     qualification: "matric",
//     institute: "GIAIC"
// }

// console.log(studentData.name)
// console.log(studentData["institute"])

// let student1Data: {
//     name: string,
//     age: number,
//     qualification: string,
//     institute: string
// }

// student1Data = {
//     age: 19,
//     name: "Ali",
//     qualification: "non",
//     institute: "GIAIC",
// }

// console.log(student1Data.institute)
// console.log(student1Data["qualification"])
// console.log(`This is ${student1Data.name}`)

// ANONYMOUS TYPE =>

// let bio: {name: string, age: number, qualification: string} = {
//     age: 22,
//     name: "Muhamad",
//     qualification: "masters"
// }

// // OBJECT ALLIASED =>

// type familyInfo = {
//     members: number,
//     guardianName: string,
//     address: string,
//     phone: number,
// }

// let familyInfo: familyInfo = {
//     guardianName: "Kamran",
//     members: 5,
//     address: "Hyderabad",
//     phone: 123456789 
// }

// console.log(familyInfo.phone)

// INTERFACE TYPE => 

// interface teacher {
//     name: string,
//     gender: "male" | "female",
//     qualification?: string,
//     age: number
// }

// let teacherData: teacher = {
//     name: "Kashaf",
//     gender: "female",
//     age: 17,
// }
// console.log(`${teacherData.name} \n${teacherData.gender} \n${teacherData.age}`)


// NESTED OBJECTS =>

// type manufacter = {
//     name: string,
//     since: number,
// }

// type owner = {
//     manufacter: manufacter,
//     name: string,
//     age: number,
// }

// let info: owner ={
//     manufacter: {
//         name: "Honda",
//         since: 1988,
//     },
//     name: "Amjad",
//     age: 55
// }

// console.log(info)