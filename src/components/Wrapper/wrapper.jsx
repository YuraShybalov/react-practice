import React from 'react';
import css from 'components/Wrapper/Wrapper.module.css';

const Wrapper = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Wrapper;
