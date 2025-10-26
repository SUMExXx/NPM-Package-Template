import * as React from "react";

export interface ColumnItemProps {
  children: React.ReactNode;
}

const ColumnItem = React.forwardRef<HTMLTableRowElement, ColumnItemProps>((props, ref) => {
  const { children } = props;
  return (
    <tr ref={ref}>
      <td>
        {children}
      </td>
    </tr>
  );
});

export default ColumnItem;