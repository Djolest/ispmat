export default function Card(props:any){
    return (
        <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center p-4">
                <img className="w-24 h-24 mb-3 rounded-full shadow-sm" src="/pfp/Default_pfp.png" alt="Saradnik image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.saradnik.ime}</h5>
                {props.saradnik.role == 'Rukovodilac' ? 
                    <span className="text-sm text-red-400 ">{props.saradnik.role}</span>
                :
                    <span className="text-sm text-yellow-400 ">{props.saradnik.role}</span>
                }
                <span className="text-sm text-gray-500 dark:text-gray-400">{props.saradnik.univerzitet}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{props.saradnik.email}</span>
            </div>
        </div>
        </>
    );
}