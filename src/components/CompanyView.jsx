export const CompanyView = ({title, company}) => {

    return (
        <>
            <h3>{ title }</h3>
            <ul className="list-group">
                <li className="list-group-item active">{company.name}</li>
                <li className="list-group-item">{company.fiscalNumber}</li>
            </ul>
        </>
    )
}