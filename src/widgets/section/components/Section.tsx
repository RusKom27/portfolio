import React from 'react';
import {HorizontalRow, Image} from "../../../shared/ui";

import styles from "./Section.module.scss";

const Section = () => {
    return (
        <section className={styles.section}>
            <HorizontalRow>
                <Image src={"image_placeholder.jpg"}/>
                <div className={styles.section_description}>
                    <h1>My first game</h1>
                    <p>FFF wergwerg wergwerg ergerg erg.e erger ergerg erger gergerg erer egewr ewrgw rerger</p>
                </div>
            </HorizontalRow>
        </section>
    );
};

export default Section;