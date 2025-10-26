import * as React from "react";

export interface ProfileProps {
    name: string;
    role: string;
    imgSrc: string;
    description: string;
}

const Profile = React.forwardRef<HTMLTableElement, ProfileProps>((props, ref) => {
    const { name, role, imgSrc, description } = props;
    return (
        <table
            ref={ref}
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{ backgroundColor: "#ffffff", borderRadius: "12px", marginBottom: "20px" }}
        >
            <tbody>
                <tr>
                    <td
                        width="120"
                        valign="middle"
                        align="center"
                        style={{ padding: "16px" }}
                    >
                        <img
                            src={imgSrc}
                            alt={name}
                            width="120"
                            height="120"
                            style={{ borderRadius: "50%", display: "block" }}
                        />
                    </td>
                    <td valign="middle" style={{ padding: "16px" }}>
                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: "16px", fontWeight: 500, color: "#000000" }}>
                                        {name}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            fontSize: "13px",
                                            fontStyle: "italic",
                                            color: "#666666",
                                            padding: "4px 0",
                                        }}
                                    >
                                        {role}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "13px", color: "#444444" }}>
                                        {description}
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

export default Profile;