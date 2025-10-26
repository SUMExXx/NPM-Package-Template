import * as React from "react";

export interface SectionProps {
    children: React.ReactNode;
}

const Section = React.forwardRef<HTMLTableRowElement, SectionProps>((props, ref) => {
    const { children } = props;
    
    return (
        <tr ref={ref}>
            <td style={{ backgroundColor: "#FFFFFF" }}>
                {children}
            </td>
        </tr>
    );
});

export default Section;