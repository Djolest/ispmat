import Card from "../ui/onama/card";

export default function NovostiPage() {
    const saradnici = [
        {
            ime: 'Đorđe Stevanović',
            univerzitet: 'Univerza v Ljubljani',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'st.djole@yahoo.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Rukovodilac',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Rukovodilac',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        },
        {
            ime: 'Ime Prezime',
            univerzitet: 'Univerzitet',
            slika: 'Default_pfp.png',
            role: 'Saradnik',
            email: 'example@gmail.com'
        }
    ];

    return (
        <div className="flex justify-center">
            <div className="md:w-2/3 w-[95%]">
                {/** Imao bih 5 dela, o petnici, o seminaru, saradnicki tim, cesta pitanja i kontak */}
                {/** O petnici */}
                <div className="inline-flex items-center w-full">
                    <h1 className="w-[190px] px-3 font-semibold text-3xl text-gray-900 bg-white ">O Petnici</h1>
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 " />
                </div>
                <p> <b> Istraživačka stanica Petnica (ISP) </b> je samostalna i nezavisna institucija koja se bavi razvojem naučne kulture, naučne pismenosti, obrazovanja i kulture. Aktivnosti ISP su najvećim delom usmerene na mlade - na učenike i studente, kao i na obuku nastavnika u novim tehnikama, metodama i sadržajima u oblasti nauke i tehnologije.</p>
                {/** O seminaru */}
                <div className="inline-flex items-center w-full">
                    <h1 className="w-[260px] px-3 font-semibold text-3xl text-gray-900 bg-white  ">O Seminaru</h1>
                    <hr className="w-full h-px my-8 bg-gray-200 border-0  " />
                </div>
                <p>Mišljenja smo da veliki broj mladih ljudi smatra matematiku dosadnom, kompleksnom i ne toliko korisnom naučnom disciplinom. Većina srednjoškolaca u Srbiji, nažalost, ne vide matematiku dalje od “slučajno nabacanih formula”. Ovde nećemo ulaziti u razloge ovog fenomena, već ćemo samo napomenuti da su seminar matematike i njegovi polaznici tu da to demantuju.
                    <br></br>
                    Približavanje i upoznavanje polaznika sa naučno-istraživačkim radom, kao jedan od glavnih ciljeva IS Petnice, je svakako prioritet i seminara matematike. Osim toga, cilj našeg tima je da polaznicima pokaže jedan novi ugao gledanja na matematiku: da ih nauči gde i kako da vide lepo i korisno u matematici, da stečeno znanje prenesu i primenjuju u svakodnevnom životu, da razvijaju moć razmišljanja o apstraktnim objektima itd.
                    <br></br>
                    Stručni i mlađi saradnici seminara matematike dolaze iz raznih institucija kao što su: Matematički fakultet iz Beograda, Prirodno-matematički fakultet iz Novog Sada, Prirodno-matematički fakultet iz Niša, Massachusetts Institute of Technology (MIT), University of Cambridgе, Microsoft, Facebook, Imperial College London itd. Oni nastoje da polaznici kroz godišnji ciklus seminara upoznaju nove oblasti iz Matematike. Najviše se stavlja akcenat na: realnu analizu, verovatnoću i statistiku, teoriju brojeva, linearnu algebru, algebarske strukture, numeričku analizu, teoriju grafova i dr. Polaznici se takođe upoznaju i sa programiranjem, kao i sa osnovnim matematičkim paketima: Matehamtica, Latex, MatLab, Geogebra…
                    <br></br>
                    <b>Polaznik možeš biti i ti, jedino što tražimo je volja, želja i zaljubljenost u matematiku. Ostalo će samo od sebe doći.</b></p>
                {/** Saradnicki tim */}
                <div className="inline-flex items-center w-full">
                    <h1 className="w-[350px] px-3 font-semibold text-3xl text-gray-900 bg-white  ">Saradnički tim</h1>
                    <hr className="w-full h-px my-8 bg-gray-200 border-0  " />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {saradnici.map((saradnik) => (
                        <Card key={saradnik.ime} saradnik={saradnik}></Card>
                    ))}
                </div>
                {/** Cesta pitanja */}
                <div className="inline-flex items-center w-full">
                    <h1 className="w-[300px] px-3 font-semibold text-3xl text-gray-900 bg-white  ">Česta pitanja</h1>
                    <hr className="w-full h-px my-8 bg-gray-200 border-0  " />
                </div>
                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Da li je potrebno određeno predznanje da bismo se prijavili za vaš seminar? </h5>

                <p>Kratak odgovor na ovo pitanje je: ne. Polaznici našeg seminara dolaze iz raznih mesta u Srbiji (i šire) te ne postoji neki univerzalni referentni sistem znanja kojim bismo mogli da definišemo potrebno predzanje. Pri proceni da li učenika treba pozvati na seminar matematike, najvažnija je njegova zainteresovanost za matematiku, kao i želja i mogućnost za daljim napredovanjem.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Na početku sam srednje škole / gimnazije tako da još uvek nisam siguran da li je matematika dobar izbor za mene. Da li bi treblo da se prijavim za seminar matematike? </h5>

                <p>Kratak odgovor na ovo pitanje je: da. Pored cilja da polaznicima što više proširimo znanje iz matematike i pokažemo im kako izleda naučno-istraživački rad, seminar služi i da pomogne polaznicima u odluci da li je matematika pravi izbor za njih. Kroz razna predavanja, projekte i razgovore sa saradnicima, polaznik će se upoznati sa tim šta je zapravo matematika i šta znači kada se neko profesionalno bavi matematikom. Uz iskustvo stečeno na seminaru matematike, kao i uz savete tima seminara, polaznik će lakše odlučiti da li da dublje zapliva u ove vode. U svakom slučaju, boravak na seminaru sigurno neće biti uzaludan.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Nemam ambicija prema takmičenjima iz matematike. Da li to znači da ne treba da se prijavim za vaš seminar?</h5>

                <p>Kratak odgovor na ovo pitanje je: ne. Sam program seminara nije prilagođen takmičarskim problemima (mada naravno ima i predavanja ovog tipa), već teorijskoj matematici. U ovom referentom sistemu je većina srednjoškolaca na istom nivou (bili oni iz matematičke gimnazije ili tehničke škole). Kao što smo napomenuli, teorijsko predzanje nije potrebno. Ono što mi želimo kod polaznika je zainteresovanost, mogućnost za napredovanjem i apstraktno razmišljanje.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Da li se na seminaru matematike rade samo zadaci?</h5>

                <p>Kratak odgovor na ovo pitanje je: ne. Na seminaru je u centru pažnje matematička teorija, a ne matematički zadaci. Sa druge strane, to ne znači da se polaznici ne susreću ni sa kakvim zadacima tokom seminara, samo se u tim situacijama proces razlikuje od uobičajenog školskog, odnosno takmičarskog. Naime, za nas zadatak nije “gotov” onda kada mu nađemo neko rešenje, već onda kada nađemo nekoliko različitih rešenja, kada uspemo da uopštimo problem, kada shvatimo o čemu je autor zadatka razmišljao kada ga je smislio itd.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Da li mogu da se prijavim na seminar ukoliko sam prvi razred?</h5>

                <p>Kratak odgovor na ovo pitanje je: da. Bez obzira da li ste prvi razred (a takođe i bez obzira na sam tip škole), ukoliko volite matematiku treba da se prijavite na seminar. Program seminara nije naklonjen starijim polaznicima, već onima koji žele da rade i uče matematiku.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Da li se mnogo ljudi prijavljuje iz Matematičke gimazije?</h5>

                <p>Kratak odgovor na ovo pitanje je: ne. Svake godine, od 30-ak novih polaznika, oko 5 ih je iz Matematičke gimnazije. Pri izboru kandidata prednost se ne daje učenicima određenih škola, već onima koji žele da rade, prošire svoje znanje i napreduju u ovoj oblasti.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Koji su tipovi aktivnosti na seminaru?</h5>

                <p>Spektar aktivnosti na seminaru je jako širok i pokriva razne aspekte “matematičkog načina života”. Čak i predavanja, kao osnovni tip aktivnosti, mogu se podeliti na standardna predvanja (teme koje se mahom uče u školi / fakultetu), zanimljivanja predavanja (teme koje su interesantne, neverovatne i apstraktne), predvanja o “matematičkom životu” (iskustva saradnika, način pisanja radova, izrada prezentacija i sl.). Pored predavanja, polaznici pišu seminarske radove i projekte. Kako bi polaznici bolje savladali matematičko izražavanje, često se pišu kratki matematički tekstovi ili rešenja nekih problema. Mnoge aktivnosti posvećene su matematičkim igrama, kombinatornim i logičkim problemima. Često odvajamo vreme za zanimljiva predvanja iz drugih oblasti ili za gledanje interesantnih predavanja sa TED-a, online kurseva i dr.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Koliko se spava tokom seminara?</h5>

                <p>Iskreno, tokom seminara se ne spava mnogo. Međutim, razlog za to nije samo što su polaznici dosta okupirani aktivnostima vezanim za seminar, već i zbog petničke atmosfere. Naime, okruženi ste vršnjacima koji imaju ista interesovanja, sa kojima možete da pričate baš o onim stvarima koje vas zanimaju, kao i saradnicima koji imaju iskustva koja vi želite da steknete… Sve ovo čini da spavanje izgleda kao gubljenje dragocenog vremena koje možete iskoristiti za druženje, pevanje uz gitaru, čitanje ili diskusiju o predavanjima.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Kakva je komunikacija između polaznika i saradnika?</h5>

                <p>Za razliku od školskih nastavnika, odnosno fakultetskih profesora i asistenata, interakcija između polaznika i saradnika je česta, neposredna i neizbežna. Saradnici su tu da polaznicima pomažu u radu, da ih savetuju i usmeravaju. S druge strane, polaznici se i podstiču na češću komunikaciju sa saradnicima. I sami saradnici su većinom bivši polaznici tako da su im bliski vaši problemi i dileme.</p>

                <h5 className="text-xl p-3 font-semibold text-gray-700  ">Da li je neophodno znanje engleskog jezika za seminar matematike?</h5>

                <p>Kratak odgovor na ovo pitanje je: ne. Poznavanje engleskog jezika nije u korelaciji sa nečijim afinitetima prema matematici i zato poznavanje engleskog jezika nije neophodan uslov koji moraju ispunjavati polaznici seminara matematike. Ipak, bavljenje naukom danas je nezamislivo bez poznavanja onog dela engleskog jezika koji je u vezi sa dotičnom naučnom disciplinom. Srećom, taj deo engleskog jezika se brzo uči. Zbog toga seminar matematike može poslužiti polaznicima upravo za učenje “matematičkog dela” engleskog jezika, sa čim se ne mogu sresti na redovnoj nastavi (ni matematike ni engleskog jezika).</p>
                {/** Kontak */}
                <div className="inline-flex items-center w-full">
                    <h1 className="w-[200px] px-3 font-semibold text-3xl text-gray-900 bg-white  ">Kontakt</h1>
                    <hr className="w-full h-px my-8 bg-gray-200 border-0  " />
                </div>
                <p>Kontakt mail: petnicamat@gmail.com</p>
                <br></br>
                <p className="flex items-center"><img src="/instagram_icon.svg" className=" inline-block w-5 h-5"></img>Instagram: <a href="https://www.instagram.com/petnica_mat/?hl=en" className="text-blue-500 underline">@petnica_mat</a></p>
                <br></br>
                <p className=" pb-10"><a href="https://petnica.rs/" className="text-blue-500 underline">Istraživačka stanica Petnica</a>
                    <br></br> Poštanski fax 6
                    <br></br>14104 Valjevo, Srbija
                </p>

            </div>
        </div>
    );
}