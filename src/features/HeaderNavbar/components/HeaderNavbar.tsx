import React from 'react';
import {Button, HorizontalRow} from "../../../shared/ui";


const HeaderNavbar = () => {
    return (
        <HorizontalRow>
            <Button>
                FRONTEND
            </Button>
            <Button>
                BACKEND
            </Button>
            <Button>
                GAMEDEV
            </Button>
            <Button>
                ART
            </Button>
        </HorizontalRow>
    );
};

export default HeaderNavbar;