import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";


test("renders Login page", () => {
  render(<Login />);
    screen.debug();
  const email = screen.getByPlaceholderText("Email Id");
  expect(email).toBeInTheDocument(); // jest
});

test("should accept email value", () => {
  render(<Login />);
  const element = screen.getByPlaceholderText("Email Id");
  fireEvent.change(element, { target: { value: "test@gmail.com" } });
  screen.debug();
  expect(element.value).toBe("test@gmail.com");
});

test("should display no errors", () => {
  render(
    <Login />
  );

  const email = screen.getByPlaceholderText("Email Id");
  fireEvent.change(email, { target: { value: "test@gmail.com" } });

  const password = screen.getByPlaceholderText("Password");
  fireEvent.change(password, { target: { value: "Test@123" } });
  
  const button = screen.getByRole("button");
  fireEvent.click(button);
});



