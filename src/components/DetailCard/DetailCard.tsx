interface PropTypes {
    title: string
    items: string[]
}

const DetailCard: React.FC<PropTypes> = ({ title, items }) => {
    return (
        <div className="flex flex-col h-full shadow-md rounded-xl overflow-hidden bg-white border border-gray-200">
            <div className="flex flex-row pl-4 py-2 bg-gray-800">
                <h1 className="font-bold text-white m-0 text-lg">{title}</h1>
            </div>
            <div className="p-4 bg-white flex-grow">
                <ul className="list-disc pl-5 m-0">
                    {items.map((item, index) => (
                        <li key={index}>
                            <p className="text-black m-0"> {item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DetailCard
