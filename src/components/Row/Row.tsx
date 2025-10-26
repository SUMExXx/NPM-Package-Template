import * as React from "react";
import type { ReactElement } from "react";
import RowItem from "../RowItem/RowItem.js";

export interface RowProps {
    children: ReactElement<typeof RowItem> | ReactElement<typeof RowItem>[];
    x?: 'left' | 'center' | 'right' | 'justify';
    y?: 'top' | 'bottom' | 'middle' | 'baseline';
    bgColor?: string;
    borderRadius?: string;
    padding?: string;
}

const Row = React.forwardRef<HTMLTableElement, RowProps>((props, ref) => {
    const { children, x = 'left', y = 'top', bgColor = "", borderRadius = "0", padding = "0" } = props;
    return (
        <table
            ref={ref}
            width="100%"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            style={{ width: "100%", backgroundColor: bgColor, borderRadius: borderRadius }}
        >
            <tbody>
                <tr>
                    <td style={{ padding: padding }}>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ width: "100%" }}>
                            <tbody>
                                <tr style={{ textAlign: x, verticalAlign: y }}>
                                    {children}
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default Row;