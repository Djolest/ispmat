const ime = process.env.NEXT_PUBLIC_SARADNIK_IME;
const sifra = process.env.NEXT_PUBLIC_SARADNIK_SIFRA;

export const auth = (props) => {
    if(props.ime == ime && props.pass == sifra) return true
    return false
}