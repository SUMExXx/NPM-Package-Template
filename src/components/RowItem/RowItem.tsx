import * as React from "react";

export interface RowItemProps {
    children: React.ReactNode;
}

const RowItem = React.forwardRef<HTMLTableCellElement, RowItemProps>((props, ref) => {
    const { children } = props;
    return <td ref={ref}>{children}</td>;
});

export default RowItem;