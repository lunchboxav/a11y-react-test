import React, { useState } from "react";
import { styled } from "../stitches.config";

const Input = styled("input", {
  margin: "8px 0 16px",
  padding: "12px 20px",
  width: "480px",
});

const TextArea = styled("textarea", {
  margin: "8px 0 16px",
  padding: "12px 20px",
  width: "480px",
  height: "320px",
  fontFamily: 'Arial'
});

function NoteForm(props) {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      title: "",
      content: "",
    });
  };

  const handleUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
      <Input
        name="title"
        type="text"
        value={form.title}
        onChange={handleUpdate}
      ></Input>
      <br />
      <label>Note</label>
      <br />
      <TextArea
        name="content"
        type="text"
        value={form.content}
        onChange={handleUpdate}
      ></TextArea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NoteForm;
