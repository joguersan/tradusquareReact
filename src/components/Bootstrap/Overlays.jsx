import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const tooltip = (
  <Tooltip id="button-tooltip">
    Simple tooltip
  </Tooltip>
);

const getOverlayFunction = (overlayType) => {
  switch (overlayType) {
    case 'popover':
      return popover
    case 'tooltip':
      return tooltip
    default:
      return false
  }
}

const TriggerOverlay = ({ overlayType, overlayElement, placement, toggle }) => {
  var type = getOverlayFunction(overlayType);
  return (<OverlayTrigger
    delay={{ show: 250, hide: 400 }}
    trigger={toggle}    
    placement={placement}
    overlay={type}
  >
    {overlayElement}
  </OverlayTrigger>)
};

export default TriggerOverlay