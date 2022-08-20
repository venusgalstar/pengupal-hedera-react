import React, { memo } from "react";
import { navigate } from '@reach/router';
import {
    Button,
    Row,
    Col
} from "reactstrap";

const NftCard = ({ nftUrl, nftId, ownerId, nftPrice }) => {

    const navigateTo = (link) => {
        navigate(link);
    }

    return (
        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4"
            style={{
                display: "flex",
                justifyContent: "center"
            }}>
            <Button
                className="p-0"
                style={{
                    borderRadius: "0",
                    border: "1px solid #351d35",
                    backgroundColor: "#351d35"
                }}>
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
                <Row className="ml-2 mt-2 mb-2">{nftId}</Row>
                <Row className="ml-2 mb-2">{ownerId}</Row>
                <Row>
                    <Col className="pl-2 pr-0">
                        <p
                            className="mb-2"
                            style={{ float: "left" }}>
                            Price
                        </p>
                    </Col>
                    <Col className="pl-0 pr-2">
                        <p
                            className="mb-2"
                            style={{ float: "right" }}>
                            {`${nftPrice}PAL`}
                        </p>
                    </Col>
                </Row>
            </Button>
        </div>
    );
};

export default memo(NftCard);