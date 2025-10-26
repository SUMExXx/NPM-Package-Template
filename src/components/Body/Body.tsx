import * as React from "react";

export interface BodyProps {
    children: React.ReactNode;
    bgColor?: string;
    maxWidth?: number;
}

const Body = React.forwardRef<HTMLBodyElement, BodyProps>((props, ref) => {
    const { children, bgColor = "#FFFFFF", maxWidth = 600 } = props;

    return (
        <body ref={ref} style={{ margin: 0, padding: 0, backgroundColor: bgColor }}>
            <table
                className="container"
                width={maxWidth}
                align="center"
                style={{ maxWidth: maxWidth, minWidth: maxWidth, margin: "0 auto" }}
                cellPadding={0}
                cellSpacing={0}
                border={0}
            >
                <tbody>{children}</tbody>
            </table>
        </body>
    );
});

export default Body;