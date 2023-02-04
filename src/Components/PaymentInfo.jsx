import { Field, ErrorMessage } from 'formik'
import { FormArticles } from '../styles/stylesCollection';

const PaymentInfo = () => {
    return ( 
        <>
          <FormArticles>
            <label htmlFor="cardNumber">Card Number</label>
            <Field type="text" name="cardNumber" />
            <ErrorMessage component="span" name='cardNumber' />
          </FormArticles>

          <FormArticles>
            <label htmlFor="cardHolder">Card Holder</label>
            <Field type="text" name="cardHolder" />
            <ErrorMessage component="span" name='cardHolder' />
          </FormArticles>
          
          <FormArticles>
            <label htmlFor="expirationDate">Expiration Date</label>
            <Field type="month" name="expirationDate" />
            <ErrorMessage component="span" name='expirationDate' />
          </FormArticles>

          <FormArticles>
            <label htmlFor="cvv">CVV</label>
            <Field type="text" name="cvv" />
            <ErrorMessage component="span" name='cvv' />
          </FormArticles>
        </>
     );
}
 
export default PaymentInfo;
