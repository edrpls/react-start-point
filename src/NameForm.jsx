import React from "react";

const NameForm = ({ setName, name }) => (
  <form>
    <input type="text" placeholder="name" value={name} onChange={setName} />{" "}
  </form>
);

export default NameForm;
