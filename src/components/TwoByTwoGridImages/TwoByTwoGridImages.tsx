import * as React from "react";

export interface TwoByTwoGridImagesProps {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
}

const TwoByTwoGridImages = React.forwardRef<HTMLTableElement, TwoByTwoGridImagesProps>((props, ref) => {

    const { img1, img2, img3, img4 } = props;

    return (
        <table
            ref={ref}
            width="100%"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            style={{ width: "100%", marginTop: "20px" }}
        >
            <tbody>
                <tr>
                    <td style={{ padding: "4px" }}>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "4px" }}>
                                        <img
                                            src={img1}
                                            alt="Image 1"
                                            style={{ display: "block", width: "100%", borderRadius: "8px" }}
                                        />
                                    </td>
                                    <td style={{ padding: "4px" }}>
                                        <img
                                            src={img2}
                                            alt="Image 2"
                                            style={{ display: "block", width: "100%", borderRadius: "8px" }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "4px" }}>
                                        <img
                                            src={img3}
                                            alt="Image 3"
                                            style={{ display: "block", width: "100%", borderRadius: "8px" }}
                                        />
                                    </td>
                                    <td style={{ padding: "4px" }}>
                                        <img
                                            src={img4}
                                            alt="Image 4"
                                            style={{ display: "block", width: "100%", borderRadius: "8px" }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default TwoByTwoGridImages;