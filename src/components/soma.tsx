//IMPORTS
interface SomaProps {
    a: number,
    b: number
}
//TYPES & INTERFACES

export default function Soma({ a, b }: SomaProps) {
    //LOGICA
    const resultado = a + b
    return (
        //HTML
        <>
            <div className="p-4 rounded-2xl text-white bg-red-500">
                <p className="text-md">
                    O Resultado de {a} + {b} é
                </p>
                <h1 className="text-4xl font-extrabold">{resultado}</h1>
            </div>
        </>
    )
}