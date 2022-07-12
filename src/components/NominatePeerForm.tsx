import axios, { AxiosError } from "axios";
import * as React from "react";
import styled from "styled-components";
import { Button } from "../ui-components/Button";
import { Input } from "../ui-components/Input";
import { InputRange } from "../ui-components/InputRange";
import { TextArea } from "../ui-components/TextArea";

const StyledForm = styled.form`
  background: #0eb0a3;
  padding: 60px;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const formDataInitialstate = {
  email: "",
  description: "",
  score: {
    involvement: 6,
    talent: 6,
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

const memberId = "8c8ff55c-11f5-4b3c-8596-3d9831a8934d";

const NominatePeerForm: React.FC = () => {
  const [formData, setFormData] =
    React.useState<FormData>(formDataInitialstate);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

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

    axios
      .post<{ message: string }>(`/members/${memberId}/nominations`)
      .then((res) => {
        setIsSubmitting(false);
        alert(res.data.message);
      })
      .catch((e: Error | AxiosError<{ message: string }>) => {
        if (axios.isAxiosError(e) && e.response) {
          setError(e.response?.data.message);
        } else {
          setError(e.message);
        }
        setIsSubmitting(false);
      });
  };

  return (
    <div style={{ marginTop: 50, width: 350 }}>
      <StyledForm onSubmit={handleSubmit}>
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

        {error && <p style={{ marginTop: 80 }}>{error}</p>}

        <Button
          type="submit"
          style={{
            width: "60%",
            marginTop: 40,
          }}
        >
          {isSubmitting ? "SENDING.." : "SEND"}
        </Button>
      </StyledForm>
    </div>
  );
};

export { NominatePeerForm };
