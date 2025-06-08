import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from "formik";
import style from "./DateInput.module.css";

const DateInput = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <DatePicker
      selected={field.value}
      onChange={(val) => setFieldValue(name, val)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date*"
      className={style.input}
      calendarClassName={style.calendar}
      dayClassName={() => style.day}
      popperPlacement="bottom"
    />
  );
};

export default DateInput;
