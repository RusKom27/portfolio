import {LinkProps, NavLink} from "react-router-dom";
import {FC} from "react";

// import styles from "./ButtonLink.module.scss";

const ButtonNavLink: FC<LinkProps> = ({children, ...props}) => {
    return (
        <NavLink  { ...props } >{children}</NavLink>
    );
};

export default ButtonNavLink;