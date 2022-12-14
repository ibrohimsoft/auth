import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  console.log("first", isAuthenticated);
  return (
    <>
      {isAuthenticated && (
        <Button
          type="button"
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => logout()}
        >
          Sign Out
        </Button>
      )}
    </>
  );
};

export default LogoutButton;
