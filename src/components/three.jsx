import React from "react";

const Three = () => {
  const [modal, setModal] = React.useState(false);
  console.log(modal)
  return (
    <>
      <button className="showModal" id="test" onClick={() => setModal(!modal)}>
        learn more</button>
      {modal && <div className="modal">
        <button className="close" onClick={() => setModal(!modal)}>x</button>
        <p className="modalText">hello</p>
      </div>}
    </>

  )
}

export default Three;