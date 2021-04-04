import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on Button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disable when disable is true", () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeDisabled();
  });
});
