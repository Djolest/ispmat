const ime = process.env.NEXT_PUBLIC_SARADNIK_IME;
const sifra = process.env.NEXT_PUBLIC_SARADNIK_SIFRA;

var isSaradnik = false; // Defoltno nije saradnik, ovo ce da bude promenljava koja se pita na koju stranu ide route

export const getter = () => {
    return isSaradnik;
}

export const reseter = () => {
    isSaradnik = false;
    return false;
}

export const auth = (props) => {
    if(props.ime == ime && props.pass == sifra){
        isSaradnik = true;
        return true;
    }
    return false
}