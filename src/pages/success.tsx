 import { SuccessContainer, ImageContainer } from "@/styles/pages/success"
import Link from "next/link"



 
export default  function Success(){
    return(
        <SuccessContainer>
        <h1>Conmpra efetuada!</h1>

        <ImageContainer>


        </ImageContainer>

        <p><strong>Usuário</strong>, seu <strong>produto</strong> já está a caminho da sua casa!</p>

        <Link href="/">
        Volar ao catalogo
        
        </Link>

        </SuccessContainer>
    )
}

 




// export const getServerSideProps: GetServerSideProps = async ({query, params}) => {
//     const sessionId = String(query.session_id);
 
//     const session = await stripe.checkout.sessions.retrieve(sessionId, {
//      expand: ['line_items', 'line_items.data.price.product']
//     });
 
//     const customerName = session.customer_details.name;
//     const product = session.line_items.data[0].product as Stripe.Product ;
 
   
//      return {
//          props: {
//              customerName,
//              product:{
//                  name: product.name,
//                  imageUrl: product.images[0],
//              }
             
//          }
//      };
//  };
 
 