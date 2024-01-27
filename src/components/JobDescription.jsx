export function JobDescription(props) {
    return (
        <div className="w-96 mb-12">
            <span className="lg:justify-start flex mb-2 font-semibold text-start">{ props.role.company }</span>
            <span className="lg:justify-start flex text-gray-600 text-sm text-start">{ props.role.description }</span>
        </div>            
    );
}