import { Field, ErrorMessage } from 'formik'
import { FormArticles } from '../styles/stylesCollection';

const BasicInfo = () => {
  return (
    <>
      <FormArticles>
        <label htmlFor="firstName">First Name</label>
        <Field type="text" name="firstName" />
        <ErrorMessage component="span" name="firstName" />
      </FormArticles>

      <FormArticles>
        <label htmlFor="lastName">Last Name</label>
        <Field type="text" name="lastName" />
        <ErrorMessage component="span" name="lastName" />
      </FormArticles>

      <FormArticles>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage component="span" name="email" />
      </FormArticles>

      <FormArticles>
        <label htmlFor="streetAddress">Street Address</label>
        <Field type="text" name="streetAddress" />
        <ErrorMessage component="span" name="streetAddress" />
      </FormArticles>

      <FormArticles>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Field type="text" name="phoneNumber" />
        <ErrorMessage component="span" name="phoneNumber" />
      </FormArticles>
    </>
  );
};

export default BasicInfo;
