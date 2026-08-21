import { useState, useEffect } from "react";


function Admin({ token, onLogout }) {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        async function fetchInquiries() {
            const response = await fetch("https://galleon-api-production.up.railway.app/api/inquiries", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            const data = await response.json();
            setInquiries(data);
        }
        fetchInquiries();
    }, [token]);

    async function markAsReplied(id) {
        const response = await fetch(`https://galleon-api-production.up.railway.app/api/inquiries/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "PATCH",
        });
        // const prev = await response.json(); NOT NEEDED AND LOOK AT WHAT YOUR PATCH ROUTE ACTUALLY SENDS BACK. ITS PLAIN TEXT AND THIS WOULD CAUSE AN ERROR. IN ADDITION YOU ARE 
        // NOT USING TEH SERVERS RESPONSE TO BUILD YOUR NEW STATE BUT USING THE MAP PATTERN TO UPDATE THE STATE LOCALLY BASED ON THE ID YOU ALREADY HAVE. 
        setInquiries((prev) => 
            prev.map((inquiry) => 
                inquiry.id === id ? { ...inquiry, status: "replied" } : inquiry
            )
        );
    }

    return (
        // <div>
        //     <h1>
        //         Admin Dashboard
        //     </h1>
        //     <ul>
        //         {inquiries.map((inquiry) => (
        //             <li key={inquiry.id}>
        //                 <strong>{inquiry.name}</strong> ({inquiry.email}) - {inquiry.message} - {inquiry.status}
        //                 {inquiry.status !== "replied" && (
        //                     <button onClick={() => markAsReplied(inquiry.id)}>Mark as Replied</button>
        //                 )}
        //             </li>
        //         ))}
        //     </ul>
        //     <button type="button" className="logout-button" onClick={onLogout}>Logout</button>
        // </div>
        <div className="admin-page">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="table-wrapper">
                <table className="inquiries-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inquiry) => (
                            <tr key={inquiry.id} className={inquiry.status === "replied" ? "replied-row" : ""}>
                                <td>{inquiry.name}</td>
                                <td>{inquiry.email}</td>
                                <td>{inquiry.message}</td>
                                <td>{inquiry.status}</td>
                                <td>
                                    {inquiry.status !== "replied" && (
                                        <button onClick={() => markAsReplied(inquiry.id)}>Mark as Replied</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="admin-footer">
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </div>

        </div>
    );
}

export default Admin;