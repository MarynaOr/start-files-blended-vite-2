import { FiSearch } from 'react-icons/fi';
import s from './Form.module.css'
import { Field, Form, Formik} from "formik";

const FormComponent = ({onSubmit}) => {

 const initialValues = {name: ''}

 const handleSubmit =(values, actions)=>{
  onSubmit(values.name.trim())
  actions.resetForm()
 }
  return <>
  <div className={s.form}>
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}>
      <Form>
        <Field placeholder='Введіть текст'  name='name' type='search' className={s.input}/>
        <button className={s.button} type="submit"> <FiSearch  size="16px"/> </button>
      </Form>
      
    </Formik>
  </div>
  </>;
};

export default FormComponent;
