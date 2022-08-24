/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Container, Button } from "reactstrap";

import NftCard from '../components/NftCard.js';

function ClaimPage() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    return (
        <>
            <div className="section claim-section">
                <Container className="mt-5">
                    <Row className="claim-manage-bar pr-4">
                        <Row>
                            <p>500000PAL</p>
                            <p className="mr-4">Total earned</p>
                        </Row>
                        <Row>
                            <Button>Claim</Button>
                            <Button className="mr-4">Unstake All</Button>
                        </Row>
                    </Row>
                    <Row>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={true}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={true}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={false}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={true}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={true}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={false}></NftCard>
                        <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" stacked={true}></NftCard>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ClaimPage;
