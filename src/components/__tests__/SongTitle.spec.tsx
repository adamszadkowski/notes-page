import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { SongTitle } from "../SongTitle";
import { useSongsStore } from "@/stores/songs";

beforeEach(() => {
  useSongsStore.setState({ currentSongId: null });
});

describe("SongTitle", () => {
  it("shows placeholder text when no song is selected", () => {
    render(<SongTitle />);
    expect(screen.getByRole("button", { name: /Wybierz piosenkę/i })).toBeInTheDocument();
  });

  it("dropdown is hidden initially", () => {
    render(<SongTitle />);
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("shows song list after clicking the toggle button", async () => {
    render(<SongTitle />);
    await userEvent.click(screen.getByRole("button", { name: /Wybierz piosenkę/i }));
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("selects a song and closes dropdown on item click", async () => {
    render(<SongTitle />);
    await userEvent.click(screen.getByRole("button", { name: /Wybierz piosenkę/i }));
    const firstOption = screen.getAllByRole("button").find(
      (btn) => btn.textContent !== "Wybierz piosenkę\u00a0",
    )!;
    await userEvent.click(firstOption);
    expect(screen.queryByRole("list")).toBeNull();
    expect(useSongsStore.getState().currentSongId).not.toBeNull();
  });
});
