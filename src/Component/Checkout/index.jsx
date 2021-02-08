import React from 'react'
import { withRouter } from 'react-router'

class Checkout extends React.Component{
constructor(props){
    super(props)
    this.state  = {
        fields : {}
    }
}
    onCheckout() {
        console.log(this.state.fields)

        this.props.history.push({
            pathname : '/cart',
             state: { items: this.state.fields }
        })
    }
    handleChange(e) {
        let { fields } = this.state
        const { name, checked } = e.target
        switch (name) {
            case '1': {
                fields[name] = name
                break;
            } case '2': {
                fields[name] = name
                break
            } case '3': {
                fields[name] = name
                break
            } case '4': {
                fields[name] = name
                break
            }case '5': {
                fields[name] = name
                break
            }case '6': {
                fields[name] = name
                break
            }case '7': {
                fields[name] = name
                break
            }case '8': {
                fields[name] = name
                break
            }case '9': {
                fields[name] = name
                break
            }case '10': {
                fields[name] = name
                break
            }
            default:
                return null
        }
        this.setState({ fields })
    }
    render() {
        let { fields } = this.state
        return(
            <React.Fragment>
                   <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-column="First Name">1</td>
                        <td data-column="Last Name">Mushroom Rishatto</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2020-01/h6icmbc_risotto_625x300_29_January_20.jpg" alt='food' /></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='1' value={fields['1'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">2</td>
                        <td data-column="Last Name">Mutton Briyani</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2020-05/cb6c3bh_biryani_625x300_06_May_20.jpg" alt='food'/></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='2' value={fields['2'] || '' } onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">3</td>
                        <td data-column="Last Name">Mutton Chutka</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2020-02/qoqn354g_biryani_625x300_07_February_20.jpg" alt='food' /></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='3' value={fields['3'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">4</td>
                        <td data-column="Last Name">Thai Pineapple Rice</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2018-11/e8fjq19g_thai-pineapple-rice_625x300_16_November_18.jpg" alt='food' /></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='4' value={fields['4'] || ''} onChange={(e) =>this.handleChange(e)} /></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">5</td>
                        <td data-column="Last Name">Brown Pastmathi Rice</td>
                        <td data-column="Last Name"><img src="https://www.ndtv.com/cooks/images/brown-rice-pilaf_large.jpg" alt='food' /></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='5' value={fields['5'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">6</td>
                        <td data-column="Last Name">Zafrani Rice</td>
                        <td data-column="Last Name"><img src="https://www.ndtv.com/cooks/images/Zaffrani-Pulao_article.jpg"  alt='food'/></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='6' value={fields['6'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">7</td>
                        <td data-column="Last Name">Kashmiri Chicken Rice</td>
                        <td data-column="Last Name"><img src="https://www.ndtv.com/cooks/images/kashmiri-chicken-pulao_article.jpg" alt='ffod' /></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='7' value={fields['7'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">8</td>
                        <td data-column="Last Name">Garlic Rice</td>
                        <td data-column="Last Name"><img src="https://www.ndtv.com/cooks/images/Garlic-egg-fried-rice_article.jpg" alt='food'/></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='8' value={fields['8'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">9</td>
                        <td data-column="Last Name">Variety Rice</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2020-06/1od6u29o_murgh-kofte-ki-biryani_625x300_17_June_20.jpg" alt='food'/></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='9' value={fields['9'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">10</td>
                        <td data-column="Last Name"> Curd Rice</td>
                        <td data-column="Last Name"><img src="https://c.ndtvimg.com/2020-05/inr9r43o_curd-rice_625x300_29_May_20.jpg" alt='food'/></td>
                        <td data-column="Last Name">100</td>
                        <td><input type="checkbox" name='10' value={fields['10'] || ''} onChange={(e) =>this.handleChange(e)}/></td>
                    </tr>
                </tbody>
            </table>
                <button className='button' onClick = {() => this.onCheckout()}>Checkout</button>
            </React.Fragment>
        )
    }
}
export default withRouter(Checkout)