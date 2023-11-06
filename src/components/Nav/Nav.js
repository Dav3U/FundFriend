import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logov2.svg'
import styles from './Navbar.module.css'

function Nav() {
  return (
    <>
      <Navbar >
        <Container className={styles.navB}>
          {/* <Navbar.Brand  href="#home"> */}
          <div className={styles.navBrand}>
          <img
              alt="expense-tracker-logo"
              src={logo}
              width="40"
              height="40"
              className={styles.navLogo}
            />
           <h1 className={styles.navName}>
           expense tracker
            </h1>
          </div>
          {/* </Navbar.Brand> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;