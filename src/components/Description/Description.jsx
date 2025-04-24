import styles from './description.module.css';

const Description = () => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
