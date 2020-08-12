import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useVerifyEmailMutation } from "../generated/graphql";

function EmailVerification() {
  const [loading, setLoading] = useState(true);
  const [verifyEmail] = useVerifyEmailMutation();
  const { token } = useParams();

  useEffect(() => {
    verifyEmail({ variables: { token } })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
      })
      .catch(({ graphQLErrors }) => {
        console.log(graphQLErrors[0].message);
      });
  }, [token, verifyEmail]);

  return loading ? <>Loading...</> : <>Email Verified!</>;
}

export default EmailVerification;
