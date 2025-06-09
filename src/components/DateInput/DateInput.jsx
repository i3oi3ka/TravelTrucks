import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import style from "./DateInput.module.css";

const DateInput = ({ name }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div>
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={(val) => {
          setFieldValue(name, val);
          setFieldTouched(name, true, false);
        }}
        onBlur={() => setFieldTouched(name, true)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Booking date*"
        className={`${style.input} ${
          meta.touched && meta.error ? style.errorInput : ""
        }`}
        calendarClassName={style.calendar}
        dayClassName={() => style.day}
        popperPlacement="bottom"
        showPopperArrow={false}
      />
    </div>
  );
};

export default DateInput;
