import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import { Card } from "../Card"

describe("Card component", () => {

  test("exists in the DOM", () => {
    render(<Card />)
    expect(screen.getByLabelText<HTMLSelectElement>("Card")).toBeInTheDocument();
  })
})