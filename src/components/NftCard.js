import React, { memo } from "react";
import { navigate } from '@reach/router';
import {
    Button,
    Row,
    Col
} from "reactstrap";

const NftCard = ({ nftUrl, nftId, stacked }) => {

    const navigateTo = (link) => {
        navigate(link);
    }

    return (
        <div className="penguin-nft-card d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
            <div
                className="nft-card-wrapper">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "0"
                    }}>
                    <img
                        alt="..."
                        className="img-fluid img-raised"
                        src={nftUrl}
                    ></img>
                </Row>
                <div className="nft-id">{nftId}</div>
                {stacked && <div className="stack-status">Stacked</div>}
                <Row className="stack-btn-wrapper">
                    <Button>{stacked ? "Unstake" : "Stake"}</Button>
                </Row>
            </div>
        </div>
    );
};

export default memo(NftCard);