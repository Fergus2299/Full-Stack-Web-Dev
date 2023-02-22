import { useCallback } from "react";
import styles from "./UserGroupPage.module.css";

const UserGroupPage = () => {
  const onRectangle4Click = useCallback(() => {
    // Please sync "Login page(External User)" to the project
  }, []);

  const onRectangle5Click = useCallback(() => {
    // Please sync "Login Page(Academics)" to the project
  }, []);

  const onRectangle6Click = useCallback(() => {
    // Please sync "Login Page(SAT)" to the project
  }, []);

  const onBackTextClick = useCallback(() => {
    // Please sync "Pre-Login Page" to the project
  }, []);

  return (
    <div className={styles.userGroupPage}>
      <img className={styles.icon} alt="" src="../20230124-1523-1@2x.png" />
      <img className={styles.images1Icon} alt="" src="../images-1@2x.png" />
      <div className={styles.userGroupPageChild} />
      <div className={styles.password}>Password</div>
      <div className={styles.forgetYourPassword}>Forget your password?</div>
      <div className={styles.userGroupPageItem} />
      <div className={styles.logIn}>Log in</div>
      <img className={styles.icon} alt="" src="../20230124-1523-1@2x.png" />
      <img className={styles.images1Icon} alt="" src="../images-1@2x.png" />
      <div className={styles.password}>Password</div>
      <div className={styles.forgetYourPassword}>Forget your password?</div>
      <div className={styles.userGroupPageItem} />
      <div className={styles.logIn}>Log in</div>
      <img className={styles.icon} alt="" src="../20230124-1523-1@2x.png" />
      <img className={styles.images1Icon} alt="" src="../images-1@2x.png" />
      <div className={styles.pleaseChooseYour}>
        Please choose your user type:
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.userGroupPageChild1} onClick={onRectangle4Click} />
      <div className={styles.userGroupPageChild2} onClick={onRectangle5Click} />
      <div className={styles.userGroupPageChild3} onClick={onRectangle6Click} />
      <div className={styles.academics}>Academics</div>
      <div className={styles.ixnPartners}>IXN partners</div>
      <div className={styles.ixnPartners}>IXN partners</div>
      <div className={styles.systemAdminsat}>System admin/SAT</div>
      <div className={styles.lineDiv} />
      <div className={styles.userGroupPageChild4} />
      <div className={styles.back} onClick={onBackTextClick}>
        Back
      </div>
    </div>
  );
};

export default UserGroupPage;
