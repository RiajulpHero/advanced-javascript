const students = [
    {id : 45, name : 'Omar sunny'},
    {id : 34, name : 'Riaz'},
    {id : 67, name : 'Manna'},
    {id : 23, name : 'DeepJol'}
]
// const onlyName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const sname = element.name;
//     onlyName.push(sname);
// }
// console.log(onlyName);

const names = students.map(x => x.name);
console.log(names);

const ids = students.map(x => x.id);
console.log(ids);

const idsBig = students.filter(x => x.id > 40)
console.log(idsBig);

const idsBigOne = students.find(x => x.id > 40)
console.log(idsBigOne);