import styles from './options.module.css';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${styles.buttonGood}`}
          onClick={() => updateFeedback('good')}
        >
          Good
        </button>
        <button
          className={`${styles.button} ${styles.buttonNeutral}`}
          onClick={() => updateFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={`${styles.button} ${styles.buttonBad}`}
          onClick={() => updateFeedback('bad')}
        >
          Bad
        </button>
      </div>
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
