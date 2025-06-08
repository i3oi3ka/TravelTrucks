import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, date } from "yup";
import style from "./BookingForm.module.css";

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
    <section className={style.container}>
      <div className={style.header}>
        <h3 className={style.title}>Book your campervan now</h3>
        <p className={style.desc}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <Field
            className={style.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="span" />
          <Field
            className={style.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="span" />
          <Field
            className={style.input}
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
          />
          <ErrorMessage name="bookingDate" component="span" />
          <Field
            className={style.input}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage name="comment" component="span" />
          <button className={style.sendBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default BookingForm;
