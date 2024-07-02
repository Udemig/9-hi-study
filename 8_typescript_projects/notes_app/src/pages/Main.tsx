import { Form, Button, Col, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../types";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import ReactSelect from "react-select";

interface Props {
  notes: Note[];
  availableTags: Tag[];
}

const Main = ({ notes, availableTags }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  /*
  1) Not başlığı 1.inputla aratılan metni içermelidir. Note'un başlığının küçük harfe çevrilmiş hali aratılan metnin küçük harfe çevrilmiş halini içeriyorsa koşul sağlanır.

  &&

  2) 2.input ile seçilen etiketler note'un içersindeki etiketler ile birebir eşleşmeli. Seçilen etiket dizisindeki her bir etiket için note'a ait etiketler arasında eşleşme kontolü yapılmalı
  */
  const filtredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(title.toLowerCase()) &&
      selectedTags.every((s_tag) =>
        note.tags.some((noteTag) => noteTag.value == s_tag.value)
      )
  );

  return (
    <div className="container mx-auto py-5">
      {/* Üst Kısım */}
      <Stack direction="horizontal" className="justify-content-between mb-4">
        <h1 className="d-flex gap-3 align-items-cente">
          <img
            src="/note.png"
            width={45}
            alt="white note card in red background"
          />
          <span>Notlar</span>
        </h1>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* Form Alanı */}
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect
                onChange={(all_tags) => setSelectedTags(all_tags as Tag[])}
                className="text-black"
                options={availableTags}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not Listesi */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col>
            <Card key={note.id} note={note} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
