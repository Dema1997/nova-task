// import axios from "axios";
import * as React from "react";
import { Button } from "../ui-components/Button";
import { Input } from "../ui-components/Input";
import { InputRange } from "../ui-components/InputRange";
import { TextArea } from "../ui-components/TextArea";

const formDataInitialstate = {
  email: "",
  description: "",
  score: {
    involvement: 0,
    talent: 0,
  },
};

interface FormData {
  email: string;
  description: string;
  score: {
    involvement: number;
    talent: number;
  };
}

const NominatePeerForm: React.FC = () => {
  const form = React.useRef();

  const [formData, setFormData] =
    React.useState<FormData>(formDataInitialstate);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const sendEmail = (_content: string, _to: string) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.score.talent < 8) {
      sendEmail(
        "Nomination rejected because talent is minor than 8",
        formData.email
      );
      sendEmail(
        "Nomination rejected because talent is minor than 8",
        "referrer@gmail.com"
      );
    }

    /* Decommented this when BE is ready
    axios
      .post("/members/${memberId}/nominations")
      .then((res) => {
        if(res.status === 409){
          setIsSubmitting(false);
          alert('Nomination already exists')
          return
        }

        setIsSubmitting(false);
        alert('Operation succeded');
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

  return (
    <div style={{ marginTop: 50, width: 350 }}>
      <form
        ref={form.current}
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
        <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <TextArea
          style={{ width: "100%", marginTop: 15 }}
          rows={10}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.currentTarget.name]: e.currentTarget.value,
            })
          }
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
              fontWeight: "bold",
            }}
          >
            Involvement
            <InputRange
              name="involvement"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  score: {
                    ...formData.score,
                    involvement: +e.currentTarget.value,
                  },
                })
              }
              defaultValue={5}
              min={0}
              max={10}
              step={1}
            />
          </label>
          <label
            style={{
              color: "white",
              marginTop: 30,
              flexDirection: "column",
              display: "flex",
              fontWeight: "bold",
            }}
          >
            Talent
            <InputRange
              name="talent"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  score: {
                    ...formData.score,
                    talent: +e.currentTarget.value,
                  },
                })
              }
              step={1}
              defaultValue={5}
              min={0}
              max={10}
            />
          </label>
        </div>

        <Button
          type="submit"
          style={{
            width: "60%",
            marginTop: 40,
          }}
        >
          {isSubmitting ? "SENDING.." : "SEND"}
        </Button>
      </form>
    </div>
  );
};

export { NominatePeerForm };
