/* //2
//
let studentList = [];
let student = {
    name: "",
    last_name: "",
    enrolled: Boolean
}
//create a list of 10 students
for(let i=0; i<10; i++){
    studentList[i] = student
    studentList[i].name = "phuc"
    studentList[i].last_name = "get input"
    studentList[i].enrolled = true

}
//f() that checks if student with name/last_name (prop) exists
let check = (list, name) => {
    for(let i=0; i<list.length; i++){
        if( list[i].name == name || list[i].last_name == name ){
            if( list[i].enrolled == true ){
                return true;
            }
        }
    }   
    return false
}
console.log(check(studentList, "phuc", true))
console.log(studentList)
*/


//3
//
let studentList = [];
let student = {
    name: "",
    last_name: "",
    enrolled: Boolean
}
//create a list of 10 students
for(let i=0; i<10; i++){
    studentList[i] = student
    studentList[i].name = "phuc"
    studentList[i].last_name = "get input"
    studentList[i].enrolled = true

}
//f() that checks if students name/last_name has 'name' arg in it   - if student.name is 'bob', passing b as name arg should return true
let check = (list, name, status) => {
    let reg = new RegExp(name,'i')
    for(let i=0; i<list.length; i++){   //for every student from list
        if( reg.test(list[i].name) || reg.test(list[i].last_name) ){
            if( list[i].enrolled == status ){
                return true;
            }
        }
    }   
    return false
}
//test
/* console.log(check(studentList, "phuc", true))
console.log(studentList) */




//4
// first closed is last opened
let brackets = (s) => {

    let ugh = s.replace(/ /g,'')
    let arr = [...ugh]
    while(arr.length%2 == 0 && arr.length>0){
        
        let i=1;
        let close = arr[i]; 
        while(close!=")" && close!="]" && close!="}"){
            i++
            close = arr[i]
        }

        if(arr[i-1]=="(" && close==")"){
            arr.splice(i-1, 2)
        } else if(arr[i-1]=="{" && close=="}"){
            arr.splice(i-1, 2)
        } else if(arr[i-1]=="[" && close=="]"){
            arr.splice(i-1, 2)
        } else if (
            (arr[i-1]!="(" && close==")") ||
            (arr[i-1]!=="[" && close=="]") ||
            (arr[i-1]!=="{" && close=="}")
            ){
            return false
        }

    }
    if(arr.length == 0){
        return true
    } return false

}
// bet it doesn't work when you put any other character in...
console.log(brackets("("))
console.log(brackets("()(( ))"))
console.log(brackets("{()}"))
console.log(brackets("[()]()()"))
console.log(brackets("{[((()))]}"))
console.log(brackets("[][{}]()()()"))