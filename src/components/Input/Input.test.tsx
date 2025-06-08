import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders input with label", () => {
    render(<Input label="이메일" id="email" />);
    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
  });

  it("allows user to type text", () => {
    render(<Input label="이름" id="name" />);
    const input = screen.getByLabelText("이름") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "홍길동" } });
    expect(input.value).toBe("홍길동");
  });

  it("supports type=password", () => {
    render(<Input label="비밀번호" type="password" id="pw" />);
    const input = screen.getByLabelText("비밀번호") as HTMLInputElement;
    expect(input.type).toBe("password");
  });
});
