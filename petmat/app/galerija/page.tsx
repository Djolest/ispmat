import { listGalerija, getGalerijaFile } from "../lib/server/appwrite"
import Image from "next/image";

export default async function NovostiPage() {
    const galerija = await listGalerija();

    //console.log(galerija);

    const logo = await getGalerijaFile();

    //console.log(logo);

    return (
        <>
            <Image 
                src={logo.href}
                alt="Logo"
                width={400}
                height={400}
            />
        </>
    );
}