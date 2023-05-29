import React from 'react';
import './App.css';
import {Layout} from "../../layout";
import {HeadSection, Section} from "../../widgets";
import {Container, HorizontalRow} from "../../shared/ui";

function App() {
    return (
        <Layout>
            <Container>
                <HeadSection/>
                <HorizontalRow>
                    <Section/>
                    <Section/>
                    <Section/>
                </HorizontalRow>
            </Container>
        </Layout>
    );
}

export default App;
