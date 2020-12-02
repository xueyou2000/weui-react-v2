import React, { useContext, useState } from 'react';
import Button, { ButtonProps } from '../Button';
import FormContext from './context/FormContext';

export default function SubmitButton(props: ButtonProps & { silent?: boolean }) {
  const { silent } = props;
  const context = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setLoading(true);
    context.methods
      .submit(silent)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    e.stopPropagation();
    e.preventDefault();
  }

  return <Button type="primary" loading={loading} onClick={handleClick} {...props}></Button>;
}
