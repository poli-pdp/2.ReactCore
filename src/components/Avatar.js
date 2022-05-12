import { useState } from "react";
import "./Avatar.css";

const Avatar = (props) => {
  const [enabledImg, setEnabledImg] = useState(true);
  const pictureSize = props.size !== "" ? `is-${props.size}` : "";
  /*
  const handlerClick = () => {
    setEnabledImg(!enabledImg);
  };
*/
  return (
    <picture className={pictureSize}>
      <img
        className={enabledImg ? "" : "disabled"}
        src={props.src}
        alt={props.name}
        onClick={() => setEnabledImg(!enabledImg)}
      />
      {props.name}
    </picture>
  );
};

/** utilizando destructuring es6+
 const Avatar = ({name,src}) => {
  return (
    <picture>
      <img src={src} alt={name} />
      {name}
    </picture>
  );
};
 */

export default Avatar;
