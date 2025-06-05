import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, date } from "yup";

const BookingForm = () => {
  const initialValues = { name: "", email: "", bookingDate: "", comment: "" };
  const BookingSchema = object({
    name: string()
      .min(3, "to short name")
      .max(30, "to long name")
      .required("required"),
    email: string().email().required("required"),
    bookingDate: date().required("required"),
    comment: string().max(300, "to long comment"),
  });

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <section>
      <div>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="span" />
          <Field type="email" name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="span" />
          <Field type="date" name="bookingDate" placeholder="Booking date*" />
          <ErrorMessage name="bookingDate" component="span" />
          <Field as="textarea" name="comment" placeholder="Comment" />
          <ErrorMessage name="comment" component="span" />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </section>
  );
};

export default BookingForm;
