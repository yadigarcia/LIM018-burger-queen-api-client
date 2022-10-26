import '../styles/orderSummary.css';

export default function OrderSummary({order}) {

 //console.log(order)
  return (
    <>
      <form action="" className='formOrder'>
       <section className='orderContainer'>
          <table>
            <thead>
              <tr>
              <th className='titleOrder'>Cantidad</th>
                <th className='titleOrder'>Productos</th>
                <th className='titleOrder'>s/.</th>
                <th className='titleOrder'></th>
              </tr>
            </thead>
            <tbody>
                {order.map((prod) => {
                  const qty = [order.product].length
                 
                  console.log(prod)
                  console.log(prod.product._id)
                  

                  return (
                    
                    <tr>
                      <td id= 'quantity'>{qty}</td>
                      <td id= 'products'>{prod.product.name}</td>
                      <td id= 'total'>{(prod.product.price)*qty}</td>
                      <td id= 'editDelete'><button onClick={()=>(prod.removeMenu)}>x</button></td>
                      <td key ={prod.product._id}></td>
                    </tr>   
                )})}
 
            </tbody>
          </table>
          <div>
              <hr/>
              <p><b>Total s/.{}</b></p>
          </div>
       </section>
       
       <section className='DataClientContainer'>
        <div className='dataClient'>
           <div >
             <label htmlFor="Cliente">Cliente:</label>
             <input type="text" className='inputClient' />
           </div>
           <div >
              <label htmlFor="Mesa"># Mesa:</label>
              <input type="text" className='inputClient'/>
            </div>
        </div>  
        <button type='button' className='btnSendOrder'>Enviar a cocina</button>
      
       </section>   
    </form>
  </>
    
  )
}
