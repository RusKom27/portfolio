import React from 'react';
import './App.css';
import {Layout} from "../../layout";
import {HeadSection, Section} from "../../widgets";
import {Container} from "../../shared/ui";

function App() {
    return (
        <Layout>
            <Container>
                <HeadSection/>
                <Section/>
            </Container>
        </Layout>
    );
}

export default App;
