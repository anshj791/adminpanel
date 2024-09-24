import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const Datatable = () => {
  const [data, setData] = useState([]);

  // Firebase Authentication
  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth instance
    const user = auth.currentUser; // Get the currently signed-in user

    if (user) {
      // If user is signed in, extract email and displayName (full name)
      setData([
        {
          id: user.uid, // Using UID as unique identifier
          email: user.email,
          displayName: user.displayName || "No full name provided", // Full name
        },
      ]);
    } else {
      console.log("No user is signed in.");
    }
  }, []);

  // Columns for the DataGrid
  const userColumns = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "displayName", headerName: "Full Name", width: 250 },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">User Details</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={1} // Since we're showing the authenticated user, 1 row
        rowsPerPageOptions={[1]}
      />
    </div>
  );
};

export default Datatable;
