import React from "react";

function Reload() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Refresh Data</button>
    </div>
  );
}

export default Reload;
