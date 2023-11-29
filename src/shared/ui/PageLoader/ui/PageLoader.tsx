import { Loader } from 'src/shared/ui/Loader';
import styles from './PageLoader.module.scss';

const PageLoader = () => (
  <div className={styles.root}>
    <Loader />
  </div>
);

export default PageLoader;
