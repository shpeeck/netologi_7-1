import DateTime from "../DateTime";
import moment from "moment";
import "moment/locale/ru";

export default function Video(props) {
  const DateTimePretty = (Component) => {
    const date = moment(props.date);
    function Wrapper() {
      return <Component date={date.fromNow()} />;
    }
    return Wrapper;
  };

  const NewDate = DateTimePretty(DateTime);

  return (
    <div className="video">
      <iframe
        src={props.url}
        title={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* <DateTime date={props.date} /> */}
      <NewDate />
    </div>
  );
}
