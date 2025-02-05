import * as React from "react";
import styles from "./ErrorPage.module.scss";

class ErrorPage extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={styles.Error__container}>
                <h1>Error page</h1>
                <p>Some went wrong...</p>
            </div>
        );
    }
}

export default ErrorPage;
