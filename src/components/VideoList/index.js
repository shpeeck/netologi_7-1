import Video from "../Video";
import shortid from "shortid";

export default function VideoList(props) {
  return props.list.map((item) => (
    <Video key={shortid.generate()} url={item.url} date={item.date} />
  ));
}
