import React from 'react';
import styles from "./Section.module.scss";
import {VerticalRow} from "../../../shared/ui";


const Section = () => {
    return (
        <section className={styles.head_section}>
            <VerticalRow>
                <h1>This is my site portfolio, Welcome!</h1>
                <p>Here you can see all my works and how i maked them!</p>
            </VerticalRow>
        </section>
    );
};

export default Section;