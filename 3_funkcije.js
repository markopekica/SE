// f() to return the smaller number of 2 arguments
let min = (a, b) => a>b ? b : a

/* console.log(min(0, 1))
console.log(min(1, 0))
console.log(min(-4, 4))
console.log(min(5, -2)) */




//
//
//2
//Napisati funkciju koja prima string i vraća najveći broj uzastopno istih znakova u
//tom stringu.
//
//ne broji vise duplih, zasad
let sameChars = (str) => {
    
    // let more_than_one_max = []
    let arr = [...new Set(str)];    // polje bez duplih znakova
    let count = 0;
    let max = ["", 0];  // za spremit slovo i broj pojavljivanja

    for(let i=0; i<arr.length; i++){    // za svaki znak iz arr

        for(let j=0; j<str.length; j++){    // broji pojavljivanja tog (i) znaka u danom stringu
            
            if(arr[i] == str[j]){
                count++;
            }

        }

        if(count > max[1]){ // provjera imam li novi max
            max = [arr[i], count]
        }

        count = 0;

    }

    return max

}



/* console.log(sameChars("wwwtffsssoooosa"))
console.log(sameChars("js ali ne broji razmake...."))
console.log(sameChars("fipu f    f"))
console.log(sameChars("something weird        happening")) */




//
//
//3
// ackermann f()
let Av = (m, n) => {

    console.log("m=" + m + ", n=" + n)
    if( m>0 ){

        if( n == 0 )
            return A(m-1, 1)

        return A((m-1), /* A */(m,n-1))
    
    } //else if( m==0 )
    
    return n+1
    
    
    /* if(m==0){
        return n + 1
    }
    else if((m>0) && (n==0)){
        return A(m-1, 1)
    }
    else if((m>0) && (n > 0)){
        return A(m - 1, A(m, n - 1))
    } */

}


console.log(A(0, 5))
console.log(A(5, 0))
console.log(A(3, 6))
console.log(A(3, 3))
