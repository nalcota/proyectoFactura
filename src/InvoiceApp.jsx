import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const[items, setItems] = useState(itemsInitial);

    return (
        <>
            <div className="container">

                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title={"Datos del cliente"} client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title={"Datos de la empres"} company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la factura" items={items}/>
                        <TotalView total = {total} />
                        <form onSubmit={ event => {
                            event.preventDefault();

                            setItems([...items,{
                                id: 4, 
                                product: productValue, 
                                price: +priceValue, 
                                quantity: parseInt(quantityValue, 10)
                            }]);
                            setProductValue('');
                            setPriceValue('');
                            setQuantityValue('');
                                
                        }}>
                            <input type="text" 
                            name="product" 
                            value = {productValue}
                            placeholder="Producto" 
                            className="form-control m-3" onChange={ event => {
                                console.log(event.target.value)
                                setProductValue(event.target.value)
                            }}/>
                            <input type="text" 
                            name="price" 
                            value = {priceValue}
                            placeholder="Precio" 
                            className="form-control m-3" onChange={ event => {
                                console.log(event.target.value)
                                setPriceValue(event.target.value)
                            }}/>
                            <input type="text" 
                            name="quantity" 
                            value = {quantityValue}
                            placeholder="Cantidad" 
                            className="form-control m-3" onChange={ event => {
                                console.log(event.target.value)
                                setQuantityValue(event.target.value)
                            }}/>

                            <button type="submit" className="btn btn-primary">Crear Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}