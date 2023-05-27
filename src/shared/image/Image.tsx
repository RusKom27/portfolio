import styled from "styled-components";
import React, {FC} from "react";

import styles from "./Image.module.scss";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
`;

const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <div className={styles.image_wrap}>
            <StyledImage {...props}/>
        </div>

    );
};

export default Image;