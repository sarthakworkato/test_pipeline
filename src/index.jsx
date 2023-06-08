import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, IssuePanel, useProductContext, useState } from "@forge/ui";

const fetchMessageFromAPI = async () => {
  const res = await api.fetch("https://tempapi.proj.me/api/bl2_94wyL", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

const App = () => {
  const context = useProductContext();
  const [responseData, setResponseData] = useState(null);

  useState(async () => {
    const data = await fetchMessageFromAPI();
    setResponseData(data);
  }, []);

  if (responseData === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <Fragment>
      <Text>SHA1: {responseData.SHA1}</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
