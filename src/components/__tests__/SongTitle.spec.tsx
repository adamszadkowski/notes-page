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
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("shows song list after clicking the toggle button", async () => {
    render(<SongTitle />);
    await userEvent.click(screen.getByRole("button", { name: /Wybierz piosenkę/i }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("selects a song and closes dropdown on item click", async () => {
    render(<SongTitle />);
    await userEvent.click(screen.getByRole("button", { name: /Wybierz piosenkę/i }));
    const firstOption = screen.getAllByRole("menuitem")[0];
    await userEvent.click(firstOption);
    expect(screen.queryByRole("menu")).toBeNull();
    expect(useSongsStore.getState().currentSongId).not.toBeNull();
  });
});
