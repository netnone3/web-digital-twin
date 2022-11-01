export default function Energy({ title, value }) {
    return (
        <>
            <div className="text-xs m-3 p-3 bg-white flex flex-wrap justify-between items-center mx-auto hover:bg-gray-100 rounded-lg">
                <p>{title}</p> 
                <p>{value} J</p>
            </div>
        </>
    )
}