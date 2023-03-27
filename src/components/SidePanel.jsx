import React, { useEffect, useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import PropTypes from 'prop-types';
import './sidepanel.css';
import 'react-sliding-side-panel/lib/index.css';

function SidePanel({ children, open, onClose }) {
  // This is a side panel component where the responses for candidates will apper.
  // It takes the boolean prop open which will be true when user clicks on the table.
  // It also has the onClose prop which will update the state in parent component whether the side
  // panel is open or not.
  const [openPanel, setOpenPanel] = useState(false);

  useEffect(() => {
    setOpenPanel(open);
  }, [open]);

  return (
    <SlidingPanel
      type="right"
      isOpen={openPanel}
      backdropClicked={() => onClose()}
      size={43}
      panelClassName="additional-class"
      panelContainerClassName=""
    >
      <div className="panel-container">
        {children}
      </div>
    </SlidingPanel>
  );
}

SidePanel.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

SidePanel.defaultProps = {
  children: null,
};

export default SidePanel;
