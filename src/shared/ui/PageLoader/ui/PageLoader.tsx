import { Loader } from 'src/shared/ui/Loader';
import styles from './PageLoader.module.scss';
import { memo } from 'react';

const PageLoader = memo(function PageLoader() {
  return (
    <div className={styles.root}>
      <Loader />
    </div>
  );
});

export default PageLoader;
