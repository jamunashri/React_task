import { React, useState } from 'react'
export default function Cart(props) {
    let data = [
        {
            name: 'Mushroom Rishatto',
            price: '100',
            no: 1
        }, {
            name: 'Mutton Briyani',
            price: '100',
            no: 2
        }, {
            name: 'Mutton Chutka',
            price: '100',
            no: 3
        }, {
            name: 'Thai Pineapple Rice',
            price: '100',
            no: 4
        }, {
            name: 'Brown Pastmathi Rice',
            price: '100',
            no: 5
        }, {
            name: 'Zafrani Rice',
            price: '100',
            no: 6
        }, {
            name: 'Kashmiri Chicken Rice',
            price: '100',
            no: 7
        }, {
            name: 'Garlic Rice',
            price: '100',
            no: 8
        }, {
            name: 'Variety Rice',
            price: '100',
            no: 9
        }, {
            name: 'Curd Rice',
            price: '100',
            no: 10
        }
    ]
    const [count, setCount] = useState(0);
    let value = props.location.state.items
    return (
        <div>
            <h3>Your Cart Items are</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Order</th>
                        <th>Quantity</th>
                        {/* <th>Cart</th> */}
                    </tr>
                </thead>
                {data.map((i, j) => {
                    let { name, price, no } = i
                    let k = no
                    return (
                        <tbody key={j}>
                            {value[no] === undefined ? (
                                null
                            ) : (
                                    <tr >
                                        <td data-column="Last Name">{name}</td>
                                        <td data-column="Last Name">{ count * price}</td>
                                        <td data-column="Last Name">
                                            <button onClick={() => setCount(count + 1)}><span role="img" aria-label="add">+</span></button>
                                            <button onClick={() => setCount(count - 1)}><span role="img" aria-label="add">-</span></button>
                                        </td>
                                        <td>{count}</td>
                                    </tr>
                                )}
                        </tbody>
                    )

                })
                }
            </table>
        </div>
    )
}