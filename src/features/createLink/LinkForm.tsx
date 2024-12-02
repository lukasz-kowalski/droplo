import { useFormik } from 'formik';

interface Props {
  onCancel: () => void;
}

export const LinkForm = ({ onCancel }: Props): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: '',
      url: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nazwa</label>
      <input id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
      <label htmlFor="url">Link</label>
      <input id="url" name="url" onChange={formik.handleChange} value={formik.values.url} />

      <button onClick={onCancel}>Anuluj</button>
      <button type="submit">Dodaj</button>
    </form>
  );
};
