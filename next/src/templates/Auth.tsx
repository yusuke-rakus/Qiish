import React, { useState } from "react";
import RegisterUser from "../components/organisms/RegisterUser";
import LoginUser from "../components/organisms/LoginUser";

const Auth: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div>
      {isRegistered ? (
        <RegisterUser
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <LoginUser
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      )}
    </div>
  );
};

export default Auth;
