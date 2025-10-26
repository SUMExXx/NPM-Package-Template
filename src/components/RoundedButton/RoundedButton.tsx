import * as React from "react";
import { type ReactNode } from "react";

type BaseProps = {
    href: string;
    bgColor?: string;
    fontSize?: string;
};

type LabelVariant = BaseProps & {
    label: string;
    children?: never;
};

type ChildrenVariant = BaseProps & {
    children: ReactNode;
    label?: never;
};

export type RoundedButtonProps = LabelVariant | ChildrenVariant;

const RoundedButton = React.forwardRef<HTMLTableElement, RoundedButtonProps>((props, ref) => {
    const {
        href,
        label,
        children,
        bgColor = "#F58321",
        fontSize = "12px"
    } = props;

    return (
        <table ref={ref} border={0} cellSpacing={0} cellPadding={0} align="right">
            <tbody>
                <tr>
                    <td align="center" style={{ borderRadius: "20px", backgroundColor: bgColor }}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                fontSize: fontSize,
                                fontWeight: "bold",
                                color: "#ffffff",
                                textDecoration: "none",
                                padding: "8px 14px",
                                borderRadius: "20px",
                                fontFamily: "Arial, sans-serif",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {children || label}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default RoundedButton;