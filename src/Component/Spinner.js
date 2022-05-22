import React from 'react';
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: pink;
`;

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState(" ");
    return (
        <div className="sweet-loading">
            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
};

export default Spinner;