import React from "react";

function Reload() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
  );
}

export default Reload;
