import styles from './Heading.module.css';

export type HeadingProps = {
  name?: string;
};

function Heading({ name = 'world' }: HeadingProps): JSX.Element {
  return <h1 className={styles.heading}>Hello {name}.</h1>;
}

export default Heading;
