import React from "react";

export default function Alert({ message }) {
  return (
    <>
      <div class="alert alert-danger mt-2" role="alert">
        {message}
      </div>
    </>
  );
}
