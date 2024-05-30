import { render } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

test("Form gönderildiğinde aratma fonksiyonu çalışır", async () => {
  const mockFn = jest.fn();
  const user = userEvent.setup();

  const { getByPlaceholderText, getByRole } = render(
    <Form handleSubmit={mockFn} />
  );

  const input = getByPlaceholderText(/ülke ara/i);
  const btn = getByRole("button");

  // inputa turkey
  await user.type(input, "Turkey");

  // butona tıkla
  await user.click(btn);

  // fonksiyon çağrıldı mı?
  expect(mockFn).toHaveBeenCalled();
});
