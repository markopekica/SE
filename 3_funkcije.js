// f() to return the smaller number of 2 arguments
let min = (a, b) => a>b ? b : a

/* console.log(min(0, 1))
console.log(min(1, 0))
console.log(min(-4, 4))
console.log(min(5, -2)) */


//
// f() to return largest num of continuous signs
let sameChars = (str) => {
    
    let arr = [...new Set(str)];    //polje bez duplih znakova
    let count = 0;
    let max = ["", 0];
    let moreThanOneMax = [];    //ako se više slova pojavljuje isto puta i to je ujedno najveci broj pojavljivanja

    for(let i=0; i<arr.length; i++){    // za stvaranje polja charCount 
        for(let j=0; j<str.length; j++){    //broji pojavljivanje svakog znaka
            if(arr[i] == str[j]){
                count++;
            }
        }

        if(count > max[1]){ //provjera imam li novi max
            max = [arr[i], count]
        } else if(count == max[1]){ //provjera je li max jednak jos nekom broju pojavljivanja
            moreThanOneMax.push(max)
            max = [arr[i], count]
        }
        count = 0;

    }

    if(moreThanOneMax){
        moreThanOneMax.push(max)
        return moreThanOneMax
    }

    return max

}

console.log(sameChars("wwwtffsssoooosa"))
console.log(sameChars("js ali ne broji razmake...."))
console.log(sameChars("fipu f    f"))
console.log(sameChars("something weird        happening"))




//
// ackermann f()
/* let A = (m, n) => {

    if( m>0 ){
        if( n == 0 ){
            return A(m-1, 1)
        }
        return A((m-1), A(m,n-1))
    
    }
    return n+1

}

console.log(A(0, 5))
console.log(A(5, 0))
console.log(A(3, 6))
console.log(A(3, 3))
 */