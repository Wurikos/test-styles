import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "index": {
        "background": "#9f2626"
    },
    "gffggff": {
        "background": "#1d49c6"
    },
    "fgfdgfdg": {
        "background": "#279f46"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
