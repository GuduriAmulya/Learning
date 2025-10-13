import React, { useEffect, useState } from "react";
import { addAnim, updateAnim, deleteAnim, getAnims } from "../services/api";

export default function AnimForm({ onRefresh }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    age: "",
    breed: "",
    status: "calm",
  });
  const [anims, setAnims] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => { loadAnims(); }, []);

  const loadAnims = async () => {
    const { data } = await getAnims();
    setAnims(data);
    if (onRefresh) onRefresh();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("in handle submit");
    e.preventDefault();
    if (editId) {
      await updateAnim(editId, form);
      setEditId(null);
    } else {
      await addAnim(form);
      //TODO
     // HINT: You can call the addAnim() function and pass the current form object.
     // remember to await 
     // code here
    }
    resetForm();
    loadAnims();
  };

  const handleEdit = (anim) => {
    setForm({
      name: anim.name,
      type: anim.type,
      age: anim.age,
      breed: anim.breed,
      status: anim.status,
    });
    setEditId(anim._id);
  };

  const handleDelete = async (id) => {
    await deleteAnim(id);
    loadAnims();
  };

  const resetForm = () => {
    // TODO: Reset all form fields back to their default empty values.
  // HINT: Use setForm() and assign each field (name, type, age, breed)
  // an empty string. You can keep "status" as "calm" by default.
  //
  // Example:
  // setForm({..., ...,.....,....,..});
    //code here
    setForm({
    name: "",
    type: "",
    age: "",
    breed: "",
    status: "calm",
  });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="pet-form" style={{ marginBottom: 16 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Rabbit</option>
          <option>Other</option>
        </select>
        <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} required />
        <input name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} required />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>calm</option>
          <option>violent</option>
        </select>

        <button type="submit">{editId ? "Save Changes" : "Add Animal"}</button>
        {editId && (
          <button type="button" onClick={resetForm} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </form>

      {/* Display existing animals */}
      <div className="pet-grid">
        {anims.map((anim) => (
          <div key={anim._id} className="anim-card">
            <h3>{anim.name}</h3>
            <p>{anim.type} - {anim.breed}</p>
            <p>Age: {anim.age}</p>
            <p>Status: <b>{anim.status}</b></p>
            <button onClick={() => handleEdit(anim)}>Edit</button>
            <button onClick={() => handleDelete(anim._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
