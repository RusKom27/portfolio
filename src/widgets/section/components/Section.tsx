import React from 'react';
import {HorizontalRow, Image} from "../../../shared/ui";

import styles from "./Section.module.scss";

const Section = () => {
    return (
        <section className={styles.section}>
            <HorizontalRow>
                <Image src={"image_placeholder.jpg"}/>
                <div>FFF wergwerg wergwerg ergerg erg.e erger ergerg erger gergerg erer egewr ewrgw rerger</div>
            </HorizontalRow>
        </section>
    );
};

export default Section;