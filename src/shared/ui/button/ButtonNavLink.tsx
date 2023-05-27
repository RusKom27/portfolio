import {NavLink, NavLinkProps} from "react-router-dom";
import {FC} from "react";


const ButtonNavLink: FC<NavLinkProps> = ({children, ...props}) => {
    return (
        <NavLink { ...props } >{children}</NavLink>
    );
};

export default ButtonNavLink;