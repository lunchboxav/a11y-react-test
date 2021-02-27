import React, { useState } from "react";

function NoteForm(props) {
  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Title</label>
      <br />
      <input
        name="title"
        type="text"
        value={form.title}
        onChange={handleUpdate}
      ></input>
      <br />
      <label>Note</label>
      <br />
      <textarea
        name="content"
        type="text"
        value={form.content}
        onChange={handleUpdate}
      ></textarea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NoteForm;
