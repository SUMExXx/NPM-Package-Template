import * as React from "react";

export interface PaddingProps {
    children: React.ReactNode;
    padding?: string;
}

const Padding = React.forwardRef<HTMLTableElement, PaddingProps>((props, ref) => {
    const { children, padding = "10px" } = props;
    return (
        <table ref={ref} width="100%" style={{ width: "100%", backgroundColor: "#EBEEF5" }}>
            <tbody>
                <tr>
                    <td style={{ padding: padding }}>
                        {children}
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default Padding;