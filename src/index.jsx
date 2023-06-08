import ForgeUI, { render, Fragment, Text, IssuePanel, Button, Form, Select, Option } from '@forge/ui';

const App = () => {
  const handleSelectChange = (value) => {
    console.log('Selected value:', value);
    // Add your desired functionality herefr
    if (value === 'o1') {
      // Display nested dropdown for enrichments
      return (
        <Fragment>
          <Select
            label="Select an enrichment"
            name="select-enrichment"
            onChange={handleEnrichmentChange}>
            <Option label="Enrichment 1" value="e1" />
            <Option label="Enrichment 2" value="e2" />
            <Option label="Enrichment 3" value="e3" />
          </Select>
          <Button text="Perform Enrichment" onClick={handleEnrichmentClick} />
        </Fragment>
      );
    } else {
      // Handle other options
      console.log('Perform other action based on selected option');
    }
  };

  const handleEnrichmentChange = (value) => {
    console.log('Selected enrichment:', value);
    // Add your desired functionality here for the selected enrichment
  };

  const handleEnrichmentClick = () => {
    console.log('Perform Enrichment clicked!');
    // Add your desired functionality here for performing the enrichment
  };

  return (
    <Fragment>
      <Text>Incident Details</Text>
      <Button text="Auto Respond to Incident" />
      <Form>
        <Select label="Select an option" name="select-option" onChange={handleSelectChange}>
          <Option label="Enrich Incident" value="o1" />
          <Option label="Perform Response Action" value="o2" />
          <Option label="Assign Response Playbook" value="o3" />
        </Select>
      </Form>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
