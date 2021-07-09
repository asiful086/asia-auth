import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div>
        <input
          className={`border border-green-600  rounded-lg px-2 focus:outline-none py-1  w-10/12   ${
            meta.touched && meta.error && "border-red-500"
          } `}
          type="password"
          placeholder="password"
          name="password"
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-red-500 text-left px-6"
      />
    </div>
  );
};

export default TextField;
