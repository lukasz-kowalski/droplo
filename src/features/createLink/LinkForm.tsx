import { useContext } from 'react';
import { useFormik } from 'formik';

import { MenuContext } from '@/features/menu/context/MenuContext';

interface Props {
  onCancel: () => void;
  onSubmit: () => void;
}

export interface LinkFromForm {
  name: string;
  url?: string;
}

export const LinkForm = ({ onCancel, onSubmit }: Props): JSX.Element => {
  const state = useContext(MenuContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      url: '',
    },
    onSubmit: (values) => {
      state?.addNewLink({
        name: values.name,
        url: values.url,
      });

      onSubmit();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nazwa</label>
      <input id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
      <label htmlFor="url">Link</label>
      <input id="url" name="url" onChange={formik.handleChange} value={formik.values.url} />

      <button type="button" onClick={onCancel}>
        Anuluj
      </button>
      <button type="submit">Dodaj</button>
    </form>
  );
};
