// import axios from "axios";
import * as React from "react";

interface FormData {
  email: string;
  description: string;
  involvment: number;
  talent: number;
}

const NominatePeerForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    email: "",
    description: "",
    involvment: 0,
    talent: 0,
  });
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* Decommented this when BE is ready
    axios
      .post("/apiUrl/...")
      .then((res) => {
        setIsSubmitting(false);
        alert(`STATUS 200: ${res.data}`);
      })
      .catch((e) => {
        setIsSubmitting(false);
        alert(`ERROR: ${e}`);
      }); */

    // Delete this when BE is ready
    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (changedField: string, value: string) => {
    setFormData({ ...formData, [changedField]: value });
  };

  return (
    <div style={{ marginTop: 50, width: 350 }}>
      <form
        style={{
          background: "#0eb0a3",
          padding: 60,
          paddingBottom: 30,
          paddingTop: 30,
          marginBottom: 30,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => handleChange("email", e.target.value)}
          style={{
            marginTop: 30,
            width: "100%",
            padding: 15,
            border: "1px solid #f2f2f2",
            borderRadius: 5,
          }}
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <textarea
          rows={10}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          style={{
            resize: "none",
            marginTop: 20,
            width: "100%",
            flex: 1,
            padding: 15,
            border: "1px solid #f2f2f2",
            borderRadius: 5,
          }}
          name="description"
          value={formData.description}
          placeholder="Description"
        />

        <div
          style={{
            padding: 15,
            width: "100%",
          }}
        >
          <label
            style={{
              marginTop: 50,
              flexDirection: "column",
              display: "flex",
              color: "white",
            }}
          >
            Involvement
            <input defaultValue={5} min={0} max={10} type="range" step={1} />
          </label>
          <label
            style={{
              color: "white",
              marginTop: 30,
              flexDirection: "column",
              display: "flex",
            }}
          >
            Talent
            <input step={1} defaultValue={5} min={0} max={10} type="range" />
          </label>
        </div>

        <button
          type="submit"
          style={{
            display: "flex",
            margin: "auto",
            width: "50%",
            padding: 15,
            border: "1px solid #f2f2f2",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: "#222222",
            marginTop: 40,
            marginBottom: 30,
          }}
        >
          {isSubmitting ? "SENDING.." : "SEND"}
        </button>
      </form>
    </div>
  );
};

export { NominatePeerForm };
