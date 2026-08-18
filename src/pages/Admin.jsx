import { useState, useEffect } from "react";

function Admin({ token }) {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        async function fetchInquiries() {
            const response = await fetch("http://localhost:3000/api/inquiries", {
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
        const response = await fetch(`http://localhost:3000/api/inquiries/${id}`, {
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
        <div>
            <h1>
                Admin Dashboard
            </h1>
            <ul>
                {inquiries.map((inquiry) => (
                    <li key={inquiry.id}>
                        <strong>{inquiry.name}</strong> ({inquiry.email}) - {inquiry.message} - {inquiry.status}
                        {inquiry.status !== "replied" && (
                            <button onClick={() => markAsReplied(inquiry.id)}>Mark as Replied</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;