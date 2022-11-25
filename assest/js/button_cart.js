import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


//////////////////////// Product Component ////////////////////////////////
class Product extends React.Component {
  
  constructor (props) {
    super(props)
    
    this.addCart = this.addCart.bind(this)
  }
  
  
  addCart(id) {
    this.props.onClickAdd(id)
  }
 
  
  render() {
    return (
      <>
        <div className={'product__container'} cotainerId={this.props.id}>
          <img className={'product__image'} src={this.props.image} alt='product box' />
          <span className={'product__title'}>{this.props.title}</span>
          <span className={'product__price'}>Price: ${this.props.price}</span>
          <button className={'product__button'} onClick={this.addCart}>Add to cart</button>
        </div>
      </>
    )
  }
}
////////////////////////////////////////////////////////////////////////////


//////////////////////// ProItem Component ////////////////////////////////
class ProItem extends React.Component {
  
  constructor (props) {
    super(props)
    
    this.removeItem = this.removeItem.bind(this)
    
  }
  
  removeItem (id) {
    this.props.onRemoveProItem(id)
  }
  
  
  render() {
    return (
      <>
        <tr>
          <td>
            <img src={this.props.image} alt='icon' className={"pro__image"} />
          </td>
          <td>{this.props.title}</td>
          <td>${this.props.price}</td>
          <td>
            <button onClick={this.removeItem}>Remove</button>
          </td>  
        </tr>
      </>
    )
  }
}
/////////////////////////////////////////////////////////////////////////////


//////////////////////// Container Component ///////////////////////////////
class Container extends React.Component {
  
  constructor (props) {
    super(props)
    
    this.state = {
      products: [
    {image: 'https://dkstatics-public.digikala.com/digikala-products/5dfe5b8462a797a3f51f6a186e17b08406139f24_1601319806.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'T-Shirt Wi-common', price: '46.23', id: 1},
    {image: 'https://dkstatics-public.digikala.com/digikala-products/196807b53db0ecf58fc879fcab5020b255b2d27a_1634376218.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'Headphone j54', price: '187.85', id: 2},
    {image: 'https://dkstatics-public.digikala.com/digikala-products/f988ebc7e49ac93aad665b932160b294e9571ba9_1649480246.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'Back pack TI-454', price: '278.94', id: 3},
    {image: 'https://dkstatics-public.digikala.com/digikala-products/533becf7cffbd9bab5c69065e545064f29a5bced_1653125083.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'Laptop asus 14-8gi', price: '825.16', id: 4},
    {image: 'https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'pan 15.6inch', price: '138.56', id: 5},
    {image: 'https://dkstatics-public.digikala.com/digikala-products/1f36553c1df53efeef46b9abbf24f235fbd1d577_1645886700.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80', title: 'alchol 80%', price: '1257.12', id: 6}
  ],
      proItems:  []
    }
    
    this.addToCart = this.addToCart.bind(this)
    this.removeCart = this.removeCart.bind(this)
  }
  
  addToCart(event) {
    let index = event.target.parentElement.getAttribute("cotainerid");
    let obj = this.state.products.filter((item) => {
      return item.id == index
    })
    
    this.setState(() => {
      return (
        {
          proItems: [...this.state.proItems, obj[0]]
        }  
      )
    })   
  }
  
  removeCart (event) {
    console.log(event.target.parentElement.parentElement.remove())
  }
  
  render() {
    return (
      <>
        <div className={'product__grid'}>
        {this.state.products.map((item) => {
          return (
            <Product {...item} key={item.id} onClickAdd={(event) => this.addToCart(event)} />
          )
        })}
        </div>
        <h1>- - - - - Cart - - - - -</h1>
        <div className={'product__cart'}>
          <table className={'product__table'}>
            <tr>
              <th>Picture</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
            {this.state.proItems && 
              this.state.proItems.map((item) => {
              return (
                <ProItem {...item} onRemoveProItem= {(event) => this.removeCart(event)} />
              )
            })}
          </table>
        </div>
      </>
    )
  }
}
///////////////////////////////////////////////////////////////////////


////////////////////////// App Component //////////////////////////////
class App extends React.Component {
  render() {
    return (
    <>
     <Container />
    </>
  );
  }
}
///////////////////////////////////////////////////////////////////////

ReactDOM.render(<App />, document.getElementById("root"));