import React, { useState, useEffect } from 'react';
import { CandidatesTable, Responses, SidePanel } from '../components';
import { apiService } from '../services';

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [applicationId, setApplicationId] = useState('');
  const [openPanel, setOpenPanel] = useState(false);

  useEffect(() => {
    // This is the main page whihch renders the table and when we click on a row of table
    // It opens up the side panel and passes the response compnent as its children.
    apiService.getCandidates().then((res) => {
      setCandidates(res);
    }).catch(() => {});
  }, []);

  const handleClick = (row) => {
    setOpenPanel(false);
    setApplicationId(row.applicationId);
    setOpenPanel(true);
  };

  const handlePanelClose = () => {
    setOpenPanel(false);
  };

  return (
    <div style={{ flexDirection: 'row' }}>
      <div>
        <CandidatesTable data={candidates} onClick={(row) => handleClick(row)} />
      </div>
      <div>
        <SidePanel open={openPanel} onClose={handlePanelClose}>
          <Responses id={applicationId} />
        </SidePanel>
      </div>
    </div>
  );
}

export default Candidates;
