//
//
// 1. Istraži jeli moguće rekurzivno postaviti objekt kao svojstvo tog istog objekta.
let a = {
    naziv: "neki objekt"
};
a.unutarnji = a;
console.log(a.unutarnji.unutarnji.unutarnji.naziv); //ha valjda je ovo odgovor




//
//
//2
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
let checkExactName = (list, name) => {

    for(let i=0; i<list.length; i++){

        if( list[i].name == name || list[i].last_name == name ){

            if( list[i].enrolled == true )  return true;

        }

    }   return false

}
/* console.log(checkExactName(studentList, "phc"))
console.log(checkExactName(studentList, "phuc"))
console.log(studentList) */





//
//
// 3
//f() that checks if students name/last_name has 'name' given as arg in it   - if student.name is 'bob', passing b as name arg should return true
let checkPattern = (list, name, status) => {

    let reg = new RegExp(name,'i')

    for(let i=0; i<list.length; i++){   //for every student from list

        if( reg.test( list[i].name ) || reg.test( list[i].last_name ) ){

            if( list[i].enrolled == status )
                return true;

        }

    }   return false

}
//test
/* console.log(checkPattern(studentList, "phu", true))
console.log(studentList) */




//
//
// 4
// first closed is last opened
// if found slice and check again
let brackets = (s) => {

    let ugh = s.replace(/ /g,'')    // remove whitespace; could remove anything but brackets to make it better
    let arr = [...ugh]  // convert s to array

    while(arr.length%2 == 0 && arr.length>0){   // while array not empty & there is a pair nuber of brackets
        //nuber
        let i=1;
        let close = arr[i];

        while(close!=")" && close!="]" && close!="}"){  // search for first closing bracket
            i++
            close = arr[i]
        }
        
        if( arr[i-1]=="(" && close==")" ){  // check if the last opening matches by type with close
            arr.splice(i-1, 2)  // delete the pair
        } else if( arr[i-1]=="{" && close=="}" ){
            arr.splice(i-1, 2)
        } else if( arr[i-1]=="[" && close=="]" ){
            arr.splice(i-1, 2)
        } else if ( // if a pair doesn't match by type; (] {) (} ...
            ( arr[i-1]!="(" && close==")" ) ||
            ( arr[i-1]!="[" && close=="]" ) ||
            ( arr[i-1]!="{" && close=="}") ){
            return false
        }

    }   //eo while

    if(arr.length == 0)
        return true
    return false

}
//it doesn't work when you put any other character in...
/* console.log(brackets("("))
console.log(brackets("6 ()"))
console.log(brackets("()(( ))"))
console.log(brackets("{(  )}"))
console.log(brackets("[()]()()"))
console.log(brackets("{[((()))]}"))
console.log(brackets("[][{}]()()()")) */




//
//
// 5
/* Implementiraj funkciju za još napredniju pretragu koja prima pojam koji može sadržavati
više riječi odvojenih razmakom. Funkcija traži indeks prvog studenta u listi koji zadovoljava sve
tražene pojmove bilo imenom, prezimenom, gradom ili njihovom kombinacijom. Implementiraj
traženu funkciju napredna_pretraga(pojam) na način da prođu testovi (koristi se metoda
console.assert koja u slučaju nejednakosti baca grešku): */
let studenti = [
    {
        ime: "Marko",
        prezime: "Marković",
        grad: "Pula"
    },
    {
        ime: "Iva",
        prezime: "Ivić",
        grad: "Našice"
    },
    {
        ime: "Lucija",
        prezime: "Lucić",
        grad: "Zagreb"
    },
    {
        ime: "Nikola",
        prezime: "Nikolić",
        grad: "Rijeka"
    }
];


function napredna_pretraga(lista, pojam) {

    let arr = pojam.split(" ")          // pojam can have multiple words, split them into array
    for( var i = 0; i < arr.length; i++){
        if( arr[i] === '') arr.splice(i, 1);    // remove '' for cases like:    console.assert(napredna_pretraga(studenti, "ž "), 0)
    }

    let countArr = []                   // every pojam has to be found once in order to complete search conditions
    for(let i=0; i<arr.length; i++){
        countArr[i] = 0;
    }

    for(let i=0; i<lista.length; i++){  // for every object in list
        
        for(let j=0; j<arr.length; j++){    // for every pojam in arr
            
            for (var key in lista[i]) {         // for every property of object at lista[i]

                let reg = arr[j].toString()         // convert pojam[j] from arr to string
                let wtfJs = new RegExp(reg, 'i')    // turn the reg variable to a regex; case insesitive

                if( wtfJs.test( Object.values(lista[i][key]).join("") ) ){
                    countArr[j] = 1
                }

            }
            
        }
        
        if( countArr.every( one = (x) => x == 1 ) ){    // check if every num in countArr is 1
            console.log("found at " + i)
            return lista[i]
        }

    }

}


/* console.assert(napredna_pretraga(studenti, "ma ić"), 0) // ! prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri"), 3) // ! zadnji student
console.assert(napredna_pretraga(studenti, "ić za"), 2) // ! treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri"), 3) // ! zadnji student */
// yes
// help
// https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key





//
//
// 6
// Osmisli i oblikuj objekt po vlastitom odabiru koji sadrži barem jednu agregaciju i
// kompoziciju, te veze na jedan i na više .
//
//  https://softwareengineering.stackexchange.com/questions/61376/aggregation-vs-composition
//
// covik -> laptop = aggregation    (A uses B)
// laptop -> CPU = composition  (A owns B)
function Covik(ime, godine, pc){
    this.ime = ime
    this.godine = godine
    this.pc = [pc]
}

let mario = new Covik("mario", 1000)    // agregacija; covik moze bez laptopa
console.log(mario)

function Laptop(brand, model, cpu){
    this.brand = brand
    this.model = model
    this.cpu = cpu
}
function CPU(brand, model){ // kao kompozicija, al ne dobra
    this.brand = brand
    this.model = model
}

let idk = new CPU("Intel", "i5-7300U")
let T470 = new Laptop("Lenovo", "T470", idk)
let mark = new Covik("mark", 10, T470)
console.log(mark)

let proc2 = new CPU("aH", "76-r")
let lap2 = new Laptop("idk man", "01", proc2)
mark['pc'].push(lap2)
//console.log(mark.pc)
console.log(mark)