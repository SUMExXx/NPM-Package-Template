import * as React from "react";

export interface ImageBoxProps {
    src: string;
    alt?: string;
    fullWidth?: boolean;
    height?: string;
    width?: string;
    borderRadius?: number;
}

const ImageBox = React.forwardRef<HTMLTableElement, ImageBoxProps>((props, ref) => {
    const { src, alt = "image", fullWidth, height = "auto", width = "100%", borderRadius = 0 } = props;
    return (
        <table ref={ref} style={{ width: fullWidth ? "100%" : "auto" }}>
            <tbody>
                <tr>
                    <td>
                        <img
                            src={src}
                            alt={alt}
                            style={{ width: width, height: height, borderRadius: borderRadius }}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default ImageBox;