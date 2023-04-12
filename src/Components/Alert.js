import React from 'react'

export default function Alert(props) {

    const initCap = (word) => {
        let str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    props.myalert &&
    <div>
      <div
        className={`alert alert-${props.myalert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{initCap(props.myalert.type)}</strong>: {props.myalert.msg}
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
