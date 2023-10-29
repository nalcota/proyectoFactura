import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();

    return (
        <>
            <div className="container">

                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name}/>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title={"Datos del cliente"}client={client}/>
                            </div>
                            <div className="col">
                                <CompanyView title={"Datos de la empres"} company={company}/>
                            </div>
                        </div>

                        <h4> Productos de la factura </h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>

                            </thead>
                            <tbody>
                                {items.map(({ id, product, price, quantity }) => (
                                    <tr key={id}>
                                        <td>{product}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}