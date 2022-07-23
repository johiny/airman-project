import { Formik, Form } from "formik";
import * as Yup from "yup";
import BasicInfo from "../components/BasicInfo";
import PaymentInfo from "../components/PaymentInfo";
import { DataSection, FormButton, FormButtons } from "../styles/stylesCollection";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addData, selectFormData } from "../Redux/Slices/formSlice";

const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u


const dataFormSchema = Yup.object({
  firstName: Yup.string().matches(regex, { message: "Invalid First Name", excludeEmptyString: true })
  .min(3, "Your first name must be larger than 2 letters")
    .required("Your first name is required to continue"),
    lastName: Yup.string().matches(regex, { message: "Invalid Last Name", excludeEmptyString: true })
    .min(6, "Your last name must be larget than 5 letters")
    .required("Your last name is required to continue"),
    email: Yup.string()
    .email("Invalid email")
    .required("Your email is required to continue"),
    streetAddress: Yup.string()
    .min(5, "Your street address must contain more than 4 letters")
    .required("Your street address is required to continue"),
    phoneNumber: Yup.string()
    .min(7, "Your phone number must consist at least of 7 digits")
    .required("Your phone number is required to continue"),
    cardNumber: Yup.string()
    .min(12, "Your card number should be minimum 12 characters")
    .max(16, "Your card number should be maximum 16 characters")
    .required("Your card number is required to continue"),
    cardHolder: Yup.string().matches(regex, { message: "Invalid Card Holder Name", excludeEmptyString: true })
    .max(64)
    .required("The card holder's name is required to continue"),
  expirationDate: Yup.date()
    .min(new Date(), "The expiration date should be in the future")
    .required("The expiration date is required to continue"),
    cvv: Yup.string()
    .min(3, "The cvv should be at least 3 digits")
    .max(3, "The cvv has a maximum of 3 digits")
    .required("The cvv is required to continue"),
  });
  
  const DataForm = () => {
    const dispatch = useDispatch()
    const formDataSelector = useSelector(selectFormData)
    const navigate = useNavigate()
    
    const handleSubmit = (values, callback) => {
      dispatch(addData(values))
      callback("/processing")
    };

    return (
      <DataSection>
      <h1>Please enter your info</h1>
      <Formik
        initialValues={formDataSelector.data || {
          firstName: "",
          lastName: "",
          email: "",
          streetAddress: "",
          phoneNumber: "",
          cardNumber: "",
          cardHolder: "",
          expirationDate: "",
          cvv: ""
        }}
        onSubmit={(values)=> handleSubmit(values, navigate)}
        validationSchema={dataFormSchema}
      >
        <Form>
          <BasicInfo />
          <PaymentInfo />

          <FormButtons>
            <FormButton type="submit">Send</FormButton>
            <FormButton type="reset">Reset</FormButton>
          </FormButtons>
          
        </Form>
      </Formik>
    </DataSection>
  );
};

export default DataForm;
