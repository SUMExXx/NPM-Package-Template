import * as React from "react";

export interface ColumnProps {
    children: React.ReactNode;
    bgColor?: string;
    borderRadius?: string;
    padding?: string;
}

const Column = React.forwardRef<HTMLTableElement, ColumnProps>((props, ref) => {
    const { children, bgColor = "", borderRadius = "0", padding = "0" } = props;
    return (
        <table
            ref={ref}
            width="100%"
            border={0}
            cellSpacing="0"
            cellPadding="0"
            style={{ width: "100%", backgroundColor: bgColor, borderRadius }}
        >
            <tbody>
                <tr>
                    <td style={{ padding }}>
                        <table
                            width="100%"
                            border={0}
                            cellSpacing="0"
                            cellPadding="0"
                            style={{ width: "100%" }}
                        >
                            <tbody>{children}</tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default Column;