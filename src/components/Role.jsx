export function Role(props) {
    return (
        <div className="flex mb-8">
            <img src={`${props.role.logo}`} alt="" className="w-10 l-10 ml-2 mr-4 my-1"/>
            <div className="text-sm">
                <div className="lg:justify-start flex mb-2 font-semibold">{ props.role.company }</div>
                <div className="flex lg:justify-between w-96">
                    <span className="text-gray-500">{ props.role.title }</span>
                    <span className="text-gray-400">{ props.role.start } - { props.role.end }</span>
                </div>
            </div>
            
        </div>
    );
}