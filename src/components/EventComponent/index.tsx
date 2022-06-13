import EventComponentWrapper from "./EventComponentWrapper";
import { Room } from "@mui/icons-material";

const EventComponent = ({
  className,
  eventImg,
  eventDate,
  eventTitle,
  eventLocation,
}: EventComponentProps) => {
  return (
    <EventComponentWrapper className={className}>
      <div className="rightBox">
        <img className="evImg" src={eventImg} />
      </div>

      <div className="leftBox">
        <h5 className="eventDate">{eventDate}</h5>
        <h4 className="eventTitle">{eventTitle}</h4>
        <p className="eventLocation">
          <Room className="icon" />
          <span>{eventLocation}</span>
        </p>
      </div>
    </EventComponentWrapper>
  );
};

export default EventComponent;
