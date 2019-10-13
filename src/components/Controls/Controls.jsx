import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css'

const Controls = ({ onNextPage, onPrevPage, disabledPrev, disabledNext }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onPrevPage}
      disabled={disabledPrev}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={onNextPage}
      disabled={disabledNext}
    >
      Вперед
    </button>
  </section>
);

Controls.prototype = {
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  disabledNext: PropTypes.bool.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
};

export default Controls;
