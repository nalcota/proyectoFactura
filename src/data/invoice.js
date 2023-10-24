export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        },  
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1234567
    },
    items: [
        {
            product: 'CPU Ryzen 7',
            price: 499,
            quantity: 1,
        },
        {
            product: 'Razer Keyboard',
            price: 150,
            quantity: 1,

        },
        {
            product: 'Monitor',
            price: 499,
            quantity: 1,
        }
    ]
}