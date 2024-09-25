import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import styles from "../styles/TodoForm.module.css";

const TodoSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
});

const TodoForm = ({ addTodo }) => {
    return (
        <Formik
            initialValues={{ title: "", description: "" }}
            validationSchema={TodoSchema}
            onSubmit={(values, { resetForm }) => {
                const newTodo = { ...values, id: uuidv4(), status: "pending" };
                addTodo(newTodo);
                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <Field name="title" placeholder="Title" />
                    {errors.title && touched.title ? <div>{errors.title}</div> : null}
                    <Field name="description" placeholder="Description" />
                    {errors.description && touched.description ? <div>{errors.description}</div> : null}
                    <Button type="submit" variant="contained">Add Todo</Button>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;
