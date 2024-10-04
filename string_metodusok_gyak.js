/*0. hozz létre egy txt változót és add meg a változó értékét
1. Írasd ki a konzolba az első 5 karaktert
2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
3. Írasd ki a konzolba az 5. karaktertől a végéig
4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
5. Írasd ki a konzolba a txt-t nagybetűkkel
6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt. */

let txt = "Az első szövegem.";
console.log(txt);
console.log("------------------------------------")
console.log("1. feladat: " + txt.slice(0,5));

console.log("2. feladat: " + txt.slice(2,8));

console.log("3. feladat: " + txt.slice(5));

console.log("4. feladat: " + txt.slice(4, 6));

console.log("5. feladat: " + txt.toUpperCase());

console.log("7. feladat: ")
const t = txt.split("");
for(let i = 0; i < txt.length; i++){
    if(t[i] == 'e'){
        console.log(t[i].toUpperCase());
    }
    else{
        console.log(t[i]);
    }
    
}

