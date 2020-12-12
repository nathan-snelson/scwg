const LeagueTable = (props) => {
    const {headers, rows} = props;    

    return (
        <div className="input">
            <table className="table table-bordered table-hover">                
                <TableHeader headers={headers}></TableHeader>
                <TableBody headers={headers} rows={rows}></TableBody>
            </table>
        </div>
    );
}

const titleCase = (value) => {
    return value.charAt(0).toUpperCase() + value.substr(1,value.length-1);
}

const TableHeader = (props) => {
    const { headers } = props;
    return (
        <thead className="thead-dark" key="header-1">
            <tr key="header-0">
                { headers && headers.map((value, index) => {
                    return <th key={index}><div>{titleCase(value)}</div></th>
                })}                
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const { headers, rows } = props;

    function buildRow(row, headers) {
        return (
            <tr key={row.name} className={row.index === 1 ? "top" : "default"}>
                { headers.map((value, index) => {
                    return <td key={index}>{row[value]}</td>
                })}
            </tr>
        )
    };

    return (
        <tbody>
            { rows && rows.map((value) => {
                return buildRow(value, headers);
            })}
        </tbody>
    )
}

export default LeagueTable;