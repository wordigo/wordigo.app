import { Fragment } from "react";

export function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/dashboard/settings/profile",
    },
  };
}

const Settings = () => {
  return <Fragment />;
};

export default Settings;
