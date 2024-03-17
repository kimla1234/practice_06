import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {" "}
          {/* New section for logo */}
          <img
            src="https://istad.co/resources/img/CSTAD_120.png"
            alt="Company Logo"
          />{" "}
          {/* Assuming logo.png is in the public directory */}
          <p>
            Start your IT career with <br />
            CSTAD
          </p>
        </div>

        <div className={styles.section}>
          <h3>LEARN MORE</h3>
          <ul>
          <li>
            <a href="/page/course">Course</a> 
          </li>
          <li>
            <a href="/page/it-news">IT News</a>
          </li>
          <li> 
            <a href="/page/job">Job Opportunity</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">FAQ</a> 
          </li>
        </ul>
        </div>
        <div className={styles.section}>
          <h3>CONTACT US</h3>
          <ul>
            <li>(+855) 95-990-910</li>
            <li>(+855) 93-990-910</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>FOLLOW US</h3>
          <ul>
            <li>9.9K followers</li>
            <li>
              <a href="https://telegram.org">Telegram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.line}></div> {/* Line element */}
      <div className={styles.copyright}>
        <p>
          © 2024 Center of Science and Technology Advanced Development. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
